"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createReview } from '@/lib/reviews';
import { supabase } from '@/lib/supabase/client';

interface ReviewSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId: string;
  onSuccess?: () => void;
}

const StarIcon = ({ filled, onClick, onMouseEnter, onMouseLeave }: any) => (
  <svg 
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`w-8 h-8 cursor-pointer transition-colors ${filled ? 'text-gray-900' : 'text-gray-200'}`} 
    fill="currentColor" 
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export function ReviewSubmissionModal({ isOpen, onClose, productId, onSuccess }: ReviewSubmissionModalProps) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  
  const [images, setImages] = useState<File[]>([]);
  const [video, setVideo] = useState<File | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setImages(prev => [...prev, ...selectedFiles].slice(0, 5)); // Limit to 5 images
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Validate video file size (max 500MB)
      const MAX_VIDEO_SIZE = 500 * 1024 * 1024; // 500MB in bytes
      
      if (file.size > MAX_VIDEO_SIZE) {
        setError("Video file size must be less than 500MB.");
        if (videoInputRef.current) {
          videoInputRef.current.value = ''; // Reset input
        }
        setVideo(null);
      } else {
        setVideo(file);
        setError(null);
      }
    }
  };

  const uploadFile = async (file: File, bucket: string): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
    const filePath = `${productId}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (uploadError) {
      throw new Error(`Failed to upload media: ${uploadError.message}`);
    }

    const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) return setError("Please enter your name.");
    if (rating === 0) return setError("Please select a rating.");

    setIsSubmitting(true);

    try {
      // 1. Upload Images
      const uploadedImageUrls = await Promise.all(
        images.map(img => uploadFile(img, 'review-images'))
      );

      // 2. Upload Video
      let uploadedVideoUrl = null;
      if (video) {
        uploadedVideoUrl = await uploadFile(video, 'review-videos');
      }

      // 3. Save Review to Database
      await createReview({
        product_id: productId,
        customer_name: name.trim(),
        rating,
        review_text: reviewText.trim() || null,
        image_urls: uploadedImageUrls,
        video_urls: uploadedVideoUrl ? [uploadedVideoUrl] : [],
      });

      // 4. Show success and cleanup
      setShowSuccess(true);
      setTimeout(() => {
        handleClose();
        if (onSuccess) onSuccess();
      }, 2000);

    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setName('');
    setRating(0);
    setHoverRating(0);
    setReviewText('');
    setImages([]);
    setVideo(null);
    setError(null);
    setShowSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={!isSubmitting && !showSuccess ? handleClose : undefined}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="relative w-full max-w-lg bg-white shadow-2xl rounded-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {showSuccess ? (
            <div className="p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 uppercase tracking-wide">Thank You</h3>
              <p className="text-gray-500">Your review has been submitted successfully.</p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 uppercase tracking-wide">Write a Review</h3>
                <button 
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="text-gray-400 hover:text-gray-900 transition-colors disabled:opacity-50"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Form Body */}
              <div className="p-6 overflow-y-auto custom-scrollbar">
                <form id="review-form" onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Rating */}
                  <div className="flex flex-col items-center justify-center py-4">
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Overall Rating</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon 
                          key={star} 
                          filled={star <= (hoverRating || rating)}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-2">Your Name</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Review Text */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-2">Review</label>
                    <textarea 
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="What did you love about this piece?"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Media Uploads */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1">Add Photos & Video</label>
                    <p className="text-[10px] text-gray-500 mb-3 uppercase tracking-widest">Max 5 photos, 1 video (max 500MB)</p>
                    <div className="flex gap-3">
                      
                      {/* Image Upload Button */}
                      <button
                        type="button"
                        onClick={() => imageInputRef.current?.click()}
                        disabled={isSubmitting || images.length >= 5}
                        className="flex-1 py-3 px-4 border border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-colors flex flex-col items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Images ({images.length}/5)</span>
                      </button>

                      {/* Video Upload Button */}
                      <button
                        type="button"
                        onClick={() => videoInputRef.current?.click()}
                        disabled={isSubmitting || video !== null}
                        className="flex-1 py-3 px-4 border border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-colors flex flex-col items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>{video ? 'Video Added' : 'Add Video'}</span>
                      </button>

                      {/* Hidden Inputs */}
                      <input 
                        type="file" 
                        ref={imageInputRef} 
                        onChange={handleImageChange} 
                        accept="image/*" 
                        multiple 
                        className="hidden" 
                      />
                      <input 
                        type="file" 
                        ref={videoInputRef} 
                        onChange={handleVideoChange} 
                        accept="video/*" 
                        className="hidden" 
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                      {error}
                    </div>
                  )}
                </form>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <button
                  type="submit"
                  form="review-form"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 text-white py-3.5 px-4 rounded-lg font-medium hover:bg-black transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Review'
                  )}
                </button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
