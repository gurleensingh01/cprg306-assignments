"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const handleSignIn = async () => {
    await gitHubSignIn();
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  useEffect(() => {
    if (user && typeof window !== "undefined") {
      router.push("/week-10/shopping-list");
    }
  }, [user, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="text-center">
        <h1 className="text-5xl font-bold m-8">Shopping List</h1>
        <div>
          {user ? (
            <div className="flex flex-col">
              <p className="text-2xl m-3">
                Welcome, {user.displayName} ({user.email})
              </p>

              <Link className="text-xl m-3 hover:underline" href="/week-10/shopping-list">View Shopping List</Link>

              <button
                onClick={handleSignOut}
                className="m-2 px-4 py-2 bg-blue-950 text-white text-2xl rounded w-48 mx-auto"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div>
              <p className="text-2xl m-3">Welcome, Please Sign In to view content.</p>
              <button
                onClick={handleSignIn}
                className="m-2 px-4 py-2 bg-blue-950 text-white text-2xl rounded"
              >
                Sign In with GitHub
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
