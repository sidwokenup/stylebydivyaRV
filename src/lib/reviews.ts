import { supabase } from './supabase/client';

export type Review = {
  id: string;
  product_id: string;
  customer_name: string;
  rating: number;
  review_text?: string | null;
  image_urls?: string[];
  video_urls?: string[];
  approved?: boolean;
  created_at?: string;
};

export type CreateReviewInput = Omit<Review, 'id' | 'created_at' | 'approved'>;

/**
 * Creates a new review in the database
 */
export async function createReview(reviewData: CreateReviewInput) {
  const { data, error } = await supabase
    .from('reviews')
    .insert([{
      ...reviewData,
      // Default to empty arrays if not provided
      image_urls: reviewData.image_urls || [],
      video_urls: reviewData.video_urls || []
    }])
    .select()
    .single();

  if (error) {
    console.error('Error creating review:', error);
    throw new Error(error.message);
  }

  return data;
}

/**
 * Fetches reviews for a specific product
 * By default, only fetches approved reviews
 */
export async function getReviewsByProduct(productId: string, onlyApproved: boolean = false) {
  let query = supabase
    .from('reviews')
    .select('*')
    .eq('product_id', productId)
    .order('created_at', { ascending: false });

  if (onlyApproved) {
    query = query.eq('approved', true);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching reviews:', error);
    throw new Error(error.message);
  }

  return data;
}

/**
 * Deletes a review by its ID
 */
export async function deleteReview(reviewId: string) {
  const { error } = await supabase
    .from('reviews')
    .delete()
    .eq('id', reviewId);

  if (error) {
    console.error('Error deleting review:', error);
    throw new Error(error.message);
  }

  return true;
}
