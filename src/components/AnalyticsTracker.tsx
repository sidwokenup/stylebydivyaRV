"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && window.gtag) {
      window.gtag("config", "G-3WWZP795L0", {
        page_path: pathname,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
