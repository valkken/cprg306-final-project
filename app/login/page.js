"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { user, googleSignIn } = useUserAuth();
  const router = useRouter();

  // If user is already logged in, redirect to home page
  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user, router]);

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      router.push("/home");
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Login</h1>
      <p>Welcome to TriviaMaster!</p>

      <button
        onClick={handleGoogleLogin}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}
