import { SEO } from "./seo";

// This is the key generated in public/indexnow-key.txt
// IMPORTANT: Keep this in sync with the file content!
const INDEXNOW_KEY = "9a324edd993bfe0f4daa3a519f15fd10";

export async function pingSearchEngines(urls?: string[]) {
  // If no specific URLs are provided, we can't effectively use IndexNow for the whole site
  // in the same way we used sitemap ping.
  // Ideally, this function should be called with specific URLs that changed.
  // For sitemap regeneration, we might want to submit the homepage or key pages.
  
  const urlsToSubmit = urls && urls.length > 0 
    ? urls 
    : [SEO.siteUrl, `${SEO.siteUrl}/shop`, `${SEO.siteUrl}/saree-revival`];

  const payload = {
    host: "www.stylebydivya.in",
    key: INDEXNOW_KEY,
    keyLocation: `${SEO.siteUrl}/indexnow-key.txt`,
    urlList: urlsToSubmit,
  };

  try {
    console.log(`[SEO] Submitting ${urlsToSubmit.length} URLs to IndexNow...`);
    
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log("[SEO] IndexNow submission successful.");
    } else {
      console.warn(`[SEO] IndexNow submission failed. Status: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("[SEO] Critical error during IndexNow submission:", error);
  }
}
