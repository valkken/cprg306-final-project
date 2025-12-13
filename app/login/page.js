"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function LoginPage() {
  const { user, googleSignIn } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user, router]);

  const handleLogin = async () => {
    try {
      await googleSignIn();
      router.push("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="w-full max-w-md rounded-2xl bg-zinc-900 p-8 shadow-xl text-center">        
       <h1 className="text-3xl font-bold text-white">
          TriviaMaster
        </h1>
        <p className="mt-2 text-zinc-400">
          Sign in to start playing
        </p>

        <button
          onClick={handleLogin}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-lg bg-white px-4 py-3 font-medium text-black transition hover:bg-zinc-200"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="h-5 w-5"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
