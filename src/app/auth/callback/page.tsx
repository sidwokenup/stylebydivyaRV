"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

function CallbackContent() {
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
          const { data, error: sessionError } = await supabase.auth.exchangeCodeForSession(code);
          
          if (sessionError) {
             console.error("Session exchange error:", sessionError);
          }

          // Successful login
          // Check for 'next' param, otherwise default to '/shop'
          const nextParam = searchParams.get("next");
          const next = nextParam && nextParam.startsWith("/") ? nextParam : "/shop";
          router.replace(next);
        } catch (err) {
          console.error("Callback handling error:", err);
          router.replace("/shop");
        }
      } else {
        // No code, just redirect
        router.replace("/shop");
      }
    };

    handleAuthCallback();
  }, [router, searchParams]);

  return (
    <div className="text-center space-y-4">
      <div className="w-12 h-12 border-4 border-[#C6A756] border-t-transparent rounded-full animate-spin mx-auto"></div>
      <h2 className="text-xl font-serif text-black tracking-wide">
        Signing you in...
      </h2>
      <p className="text-sm text-gray-500">Please wait while we verify your credentials.</p>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Suspense fallback={<div>Loading...</div>}>
        <CallbackContent />
      </Suspense>
    </div>
  );
}
