"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  const handleLogout = async () => {
    await firebaseSignOut();
    router.push("/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-black px-6 py-10">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="flex items-center justify-between rounded-xl bg-zinc-900 p-6 shadow">
          <div className="flex items-center gap-4">
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="Profile"
                className="h-14 w-14 rounded-full"
              />
            )}
            <div>
              <h1 className="text-xl font-semibold text-white">
                Welcome, {user.displayName}
              </h1>
              <p className="text-sm text-zinc-400">{user.email}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        {/* Main Content */}
        <div className="mt-10">
          <div className="rounded-xl bg-zinc-900 p-8 shadow text-center">
            <h2 className="text-2xl font-semibold text-white">
              Ready to start?
            </h2>
            <p className="mt-3 text-zinc-400">
              Jump straight into the quiz and test your knowledge.
            </p>

            <button
              onClick={() => router.push("/quiz")}
              className="mt-6 rounded-lg bg-white px-6 py-3 font-medium text-black hover:bg-zinc-200"
            >
              Start Quiz
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
