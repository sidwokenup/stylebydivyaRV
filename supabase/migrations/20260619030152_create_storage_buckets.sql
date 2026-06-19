-- 1. Create the storage buckets and make them public
INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('review-images', 'review-images', true),
  ('review-videos', 'review-videos', true)
ON CONFLICT (id) DO NOTHING;

-- 2. Create policy to allow public read access for everyone
CREATE POLICY "Public read access for review images"
ON storage.objects FOR SELECT
USING (bucket_id = 'review-images');

CREATE POLICY "Public read access for review videos"
ON storage.objects FOR SELECT
USING (bucket_id = 'review-videos');

-- 3. Create policy to allow anonymous users to upload files
CREATE POLICY "Allow anonymous uploads for review images"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'review-images');

CREATE POLICY "Allow anonymous uploads for review videos"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'review-videos');
