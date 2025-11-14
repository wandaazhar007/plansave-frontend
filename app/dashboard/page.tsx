"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { apiGet } from "@/lib/apiClient";

export default function DashboardPage() {
  const { user, idToken, loading, logout } = useAuth();
  const router = useRouter();
  const [protectedMessage, setProtectedMessage] = useState<string>("");

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  useEffect(() => {
    const fetchProtected = async () => {
      if (!idToken) return;
      try {
        const data = await apiGet<{ message: string; user: any }>(
          "/protected",
          idToken
        );
        setProtectedMessage(
          `${data.message} (hello ${data.user.email || data.user.uid})`
        );
      } catch (err: any) {
        setProtectedMessage(err.message ?? "Failed to call protected endpoint");
      }
    };

    fetchProtected();
  }, [idToken]);

  if (loading || (!user && !loading)) {
    return <p style={{ padding: "2rem" }}>Loading...</p>;
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      <p>You are logged in as: {user?.email}</p>

      <button onClick={logout} style={{ marginTop: 8 }}>
        Logout
      </button>

      <section style={{ marginTop: "2rem" }}>
        <h2>Test protected backend route</h2>
        <p>{protectedMessage || "Calling /protected..."}</p>
      </section>
    </main>
  );
}