"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { supabase } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";

interface AuthUserContextType {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthUserContext = createContext<AuthUserContextType | undefined>(undefined);

export function AuthUserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Get initial session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
      if (session?.user) {
        syncUserToDatabase(session.user);
      }
    };

    getSession();

    // 2. Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
      if (session?.user) {
        syncUserToDatabase(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const syncUserToDatabase = async (user: User) => {
    // If you don't have a 'users' table or RLS policies set up yet,
    // this call will fail. We'll suppress the error for now to prevent console noise
    // until the backend schema is ready.
    try {
      /*
      // TODO: Uncomment when 'users' table exists in Supabase
      const { error } = await supabase
        .from('users')
        .upsert({
          id: user.id,
          email: user.email,
          name: user.user_metadata?.full_name || user.user_metadata?.name || '',
          phone: user.phone || '',
          updated_at: new Date().toISOString(),
        }, { onConflict: 'id' });

      if (error) {
        // console.error('Error syncing user to DB:', error);
      }
      */
     console.log("User logged in:", user.email);
    } catch (err) {
      // console.error('Error in syncUserToDatabase:', err);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthUserContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthUserContext.Provider>
  );
}

export function useAuthUser() {
  const context = useContext(AuthUserContext);
  if (context === undefined) {
    throw new Error("useAuthUser must be used within an AuthUserProvider");
  }
  return context;
}
