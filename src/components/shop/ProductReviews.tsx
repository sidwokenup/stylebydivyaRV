"use client";

import React, { useEffect, useState } from 'react';
import { getReviewsByProduct, Review } from '@/lib/reviews';
import { motion, AnimatePresence } from 'framer-motion';

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg 
    className={`w-4 h-4 sm:w-5 sm:h-5 ${filled ? 'text-yellow-400' : 'text-gray-200'}`} 
    fill="currentColor" 
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export function ProductReviews({ productId, refreshTrigger = 0 }: { productId: string, refreshTrigger?: number }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video', url: string } | null>(null);

  useEffect(() => {
    async function loadReviews() {
      try {
        const data = await getReviewsByProduct(productId);
        setReviews(data || []);
      } catch (error) {
        console.error("Failed to load reviews", error);
      } finally {
        setLoading(false);
      }
    }
    loadReviews();
  }, [productId, refreshTrigger]);

  if (loading) {
    return (
      <div className="w-full max-w-5xl mx-auto py-8 px-4 sm:px-6 animate-pulse mt-12 border-t border-gray-100">
        <div className="h-8 bg-gray-200 w-48 mb-6 rounded"></div>
        <div className="flex gap-4 mb-10 p-6 bg-gray-50/50 rounded-2xl">
          <div className="h-16 w-16 bg-gray-200 rounded-lg"></div>
          <div className="space-y-2 py-2">
            <div className="h-4 bg-gray-200 w-32 rounded"></div>
            <div className="h-4 bg-gray-200 w-24 rounded"></div>
          </div>
        </div>
        <div className="space-y-8">
          {[1, 2].map((i) => (
            <div key={i} className="h-32 bg-gray-100 rounded-lg w-full"></div>
          ))}
        </div>
      </div>
    );
  }

  const averageRating = reviews.length > 0
    ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-100 mt-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 uppercase tracking-wide">Customer Reviews</h2>
      
      {/* Review Summary (Myntra/Nykaa style) */}
      <div className="flex items-center gap-6 mb-10 p-6 bg-gray-50/50 rounded-2xl">
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl font-light text-gray-900 tracking-tighter">
            {averageRating}
          </div>
          <div className="flex mt-2 mb-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} filled={star <= Number(averageRating)} />
            ))}
          </div>
          <div className="text-sm text-gray-500 font-medium">
            {reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}
          </div>
        </div>
      </div>

      {/* Review List */}
      <div className="space-y-8">
        {reviews.length === 0 ? (
          <p className="text-gray-500 italic text-center py-8">No reviews yet. Be the first to review this product!</p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-8 last:border-0">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} filled={star <= review.rating} />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900 ml-2">{review.customer_name}</span>
                </div>
                {review.created_at && (
                  <span className="text-xs text-gray-400">
                    {new Date(review.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                )}
              </div>
              
              {review.review_text && (
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {review.review_text}
                </p>
              )}

              {/* Media Grid */}
              {(review.image_urls?.length || review.video_urls?.length) ? (
                <div className="flex flex-wrap gap-3 mt-4">
                  {/* Videos */}
                  {review.video_urls?.map((videoUrl, idx) => (
                    <div 
                      key={`video-${idx}`} 
                      className="relative w-24 h-32 sm:w-28 sm:h-36 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 group cursor-pointer"
                      onClick={() => setSelectedMedia({ type: 'video', url: videoUrl })}
                    >
                      <video 
                        src={videoUrl}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        preload="none"
                        muted
                      />
                      {/* Play Icon Overlay */}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                        <svg className="w-8 h-8 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4l12 6-12 6z" />
                        </svg>
                      </div>
                    </div>
                  ))}
                  
                  {/* Images */}
                  {review.image_urls?.map((imageUrl, idx) => (
                    <div 
                      key={`img-${idx}`} 
                      className="relative w-24 h-32 sm:w-28 sm:h-36 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 group cursor-pointer"
                      onClick={() => setSelectedMedia({ type: 'image', url: imageUrl })}
                    >
                      <img 
                        src={imageUrl} 
                        alt={`Customer review photo ${idx + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))
        )}
      </div>

      {/* Media Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-zoom-out"
              onClick={() => setSelectedMedia(null)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col items-center justify-center"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedMedia(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Media Content */}
              {selectedMedia.type === 'image' ? (
                <img 
                  src={selectedMedia.url} 
                  alt="Customer review full view" 
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                />
              ) : (
                <video 
                  src={selectedMedia.url} 
                  controls
                  autoPlay
                  className="max-w-full max-h-[85vh] object-contain rounded-lg bg-black"
                />
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
