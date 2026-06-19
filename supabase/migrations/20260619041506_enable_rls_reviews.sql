-- Enable RLS on the reviews table
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Policy 1: Anyone can READ reviews
-- This allows your website to fetch and display the reviews
CREATE POLICY "Anyone can read reviews" 
ON reviews FOR SELECT 
TO public 
USING (true);

-- Policy 2: Anyone can INSERT (submit) a new review
-- This allows your website form to submit new reviews
CREATE POLICY "Anyone can insert reviews" 
ON reviews FOR INSERT 
TO public 
WITH CHECK (true);

-- Note: We are deliberately NOT creating policies for UPDATE or DELETE.
-- Because there are no policies for UPDATE or DELETE, anonymous users (the public) 
-- cannot edit or delete reviews. 
-- However, YOU (as the admin using the Supabase Dashboard) bypass RLS completely,
-- so you can still edit, approve, or delete reviews from the dashboard.