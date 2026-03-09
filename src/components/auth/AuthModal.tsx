"use client";

import { useAuthModal } from "@/context/AuthModalContext";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

import { supabase } from "@/lib/supabase/client";

export default function AuthModal() {
  const { isOpen, authMode, closeAuth, toggleMode } = useAuthModal();
  const [mounted, setMounted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSendOTP = async () => {
    // TODO: Future Feature
    // Phone OTP verification using Supabase Auth
    // Currently disabled for simplified flow
    console.log("OTP Verification temporarily disabled");
  };

  const handleVerifyOTP = async () => {
    // TODO: Future Feature
    // Phone OTP verification using Supabase Auth
  };

  const handleSignup = async () => {
      setIsLoading(true);
      console.log("Signing up with:", { fullName, email, phoneNumber });
      
      // Save phone number to database (mock for now until table exists)
      try {
        /*
        const { error } = await supabase
          .from('users')
          .insert({
            name: fullName,
            email: email,
            phone: phoneNumber,
            created_at: new Date().toISOString(),
          });
        */
       
        // Simulate success
        setTimeout(() => {
            setIsLoading(false);
            closeAuth();
        }, 1000);
      } catch (error) {
        console.error("Signup error:", error);
        setIsLoading(false);
      }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `https://www.stylebydivya.in/auth/callback?next=/shop`,
        },
      });
      if (error) throw error;
    } catch (error) {
      console.error("Error logging in with Google:", error);
      setIsLoading(false);
    }
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAuth}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-md bg-white overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={closeAuth}
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-serif text-black uppercase tracking-widest mb-2">
                  {authMode === "login" ? "Login" : "Sign Up"}
                </h2>
                <div className="w-12 h-0.5 bg-[#C6A756] mx-auto"></div>
              </div>

              {/* Form Content */}
              <div className="space-y-6 mb-8">
                {/* Google Login Button */}
                <button
                  onClick={handleGoogleLogin}
                  className="w-full h-12 flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-full hover:border-[#C6A756] hover:shadow-md transition-all duration-300 group"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium group-hover:text-black transition-colors">
                    Continue with Google
                  </span>
                </button>

                <div className="relative flex items-center justify-center">
                  <div className="border-t border-gray-200 w-full"></div>
                  <span className="bg-white px-3 text-sm text-gray-500 font-medium uppercase tracking-wider">
                    OR
                  </span>
                  <div className="border-t border-gray-200 w-full"></div>
                </div>

                {/* Phone Number Input */}
                <div className="space-y-4">
                  {authMode === "signup" && (
                    <>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Enter full name"
                          className="w-full h-12 px-4 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-[#C6A756] focus:ring-1 focus:ring-[#C6A756] transition-all duration-300 text-black placeholder-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter email address"
                          className="w-full h-12 px-4 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-[#C6A756] focus:ring-1 focus:ring-[#C6A756] transition-all duration-300 text-black placeholder-gray-400"
                        />
                      </div>
                    </>
                  )}

                  {authMode === "login" ? (
                      // LOGIN MODE: Only Google/Email supported for now
                      <div className="text-center text-sm text-gray-500 py-2">
                          Please use Google Login to access your account.
                      </div>
                  ) : (
                      // SIGNUP MODE: Collect Phone but no OTP
                      <>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                            Phone Number
                            </label>
                            <div className="relative flex items-center">
                            <div className="absolute left-0 top-0 bottom-0 flex items-center pl-4 border-r border-gray-300 pr-3 bg-gray-50 rounded-l-full">
                                <span className="text-gray-500 font-medium text-sm">
                                +91
                                </span>
                            </div>
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => {
                                const val = e.target.value.replace(/\D/g, "");
                                if (val.length <= 10) setPhoneNumber(val);
                                }}
                                placeholder="XXXXXXXXXX"
                                className="w-full h-12 pl-16 pr-4 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-[#C6A756] focus:ring-1 focus:ring-[#C6A756] transition-all duration-300 text-black placeholder-gray-400"
                            />
                            </div>
                            <p className="text-xs text-gray-500 italic">
                            * Please enter your WhatsApp number
                            </p>
                        </div>

                        <div className="space-y-4 pt-2">
                          <label className="flex items-center space-x-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={agreedToTerms}
                              onChange={(e) => setAgreedToTerms(e.target.checked)}
                              className="w-5 h-5 text-[#C6A756] border-gray-300 rounded focus:ring-[#C6A756]"
                            />
                            <span className="text-sm text-gray-600 group-hover:text-black transition-colors">
                              I agree with Terms & Conditions
                            </span>
                          </label>

                          <button
                            onClick={handleSignup}
                            disabled={!agreedToTerms || phoneNumber.length !== 10 || !fullName || !email || isLoading}
                            className="w-full h-12 bg-black text-white uppercase tracking-wider font-medium rounded-full hover:bg-[#C6A756] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                          >
                            {isLoading ? "Creating Account..." : "Create Account"}
                          </button>
                        </div>
                      </>
                  )}
                </div>
              </div>

              {/* Switch Mode */}
              <div className="text-center text-sm text-gray-600">
                {authMode === "login" ? (
                  <p>
                    Don't have an account?{" "}
                    <button
                      onClick={toggleMode}
                      className="text-black font-medium hover:text-[#C6A756] transition-colors underline decoration-1 underline-offset-4"
                    >
                      Sign Up
                    </button>
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <button
                      onClick={toggleMode}
                      className="text-black font-medium hover:text-[#C6A756] transition-colors underline decoration-1 underline-offset-4"
                    >
                      Login
                    </button>
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
