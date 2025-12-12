"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  // If not logged in, redirect to login page
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  const handleLogout = async () => {
    await firebaseSignOut();
    router.push("/login");
  };


  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome to TriviaMaster!</h1>
      <p>You are logged in as:</p>

      <div style={{ marginTop: "20px"}}>
        {user.photoURL && (
          <img
            src={user.photoURL}
            alt="Profile"
            width={80}
            height={80}
            style={{ borderRadius: "50%" }}
          />
        )}
        <h2>{user.displayName}</h2>
        <p>{user.email}</p>
      </div>

      <button
        onClick={handleLogout}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      >
        Logout
      </button>
    </div>
  );
}
