import { NextRequest, NextResponse } from "next/server";
import { SEO } from "@/lib/seo";

// This is the key generated in public/indexnow-key.txt
// IMPORTANT: Keep this in sync with the file content!
const INDEXNOW_KEY = "9a324edd993bfe0f4daa3a519f15fd10"; 

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { urlList } = body;

    if (!urlList || !Array.isArray(urlList) || urlList.length === 0) {
      return NextResponse.json(
        { error: "Invalid request. 'urlList' is required." },
        { status: 400 }
      );
    }

    // Construct IndexNow payload
    const payload = {
      host: "www.stylebydivya.in",
      key: INDEXNOW_KEY,
      keyLocation: `${SEO.siteUrl}/indexnow-key.txt`,
      urlList: urlList,
    };

    console.log("[IndexNow] Submitting URLs:", urlList);

    // Send to IndexNow API
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log("[IndexNow] Submission successful.");
      return NextResponse.json({ success: true, message: "URLs submitted to IndexNow." });
    } else {
      const errorText = await response.text();
      console.error("[IndexNow] Submission failed:", response.status, errorText);
      return NextResponse.json(
        { error: "IndexNow submission failed.", details: errorText },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("[IndexNow] Internal server error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
