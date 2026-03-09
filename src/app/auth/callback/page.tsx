"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const code = searchParams.get("code");
      const error = searchParams.get("error");
      const error_description = searchParams.get("error_description");

      if (error) {
        console.error("Auth error:", error, error_description);
        // In a real app, you might show a toast here
        router.push("/");
        return;
      }

      if (code) {
        try {
          // Exchange the code for a session
          // Note: In Next.js App Router with client-side supabase, 
          // the exchange typically happens automatically if the URL is correct,
          // but calling exchangeCodeForSession manually ensures it.
          // However, standard supabase-js client handles this via getSession() usually.
          // Let's rely on the library to detect the hash/query.
          
          // Actually, for PKCE flow (which is default now), we might need to exchange it.
          // But usually, simply redirecting to root allows the onAuthStateChange in AuthUserContext
          // to pick it up.
          
          // Let's wait a brief moment to ensure session is set
          const { data, error: sessionError } = await supabase.auth.exchangeCodeForSession(code);
          
          if (sessionError) {
             console.error("Session exchange error:", sessionError);
          }

          // Successful login
          router.push("/shop");
        } catch (err) {
          console.error("Callback handling error:", err);
          router.push("/shop");
        }
      } else {
        // No code, just redirect
        router.push("/shop");
      }
    };

    handleAuthCallback();
  }, [router, searchParams]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-4 border-[#C6A756] border-t-transparent rounded-full animate-spin mx-auto"></div>
        <h2 className="text-xl font-serif text-black tracking-wide">
          Signing you in...
        </h2>
        <p className="text-sm text-gray-500">Please wait while we verify your credentials.</p>
      </div>
    </div>
  );
}
