"use client";

import { FormEvent, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import styles from "./register.module.scss";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await register(email, password);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message ?? "Registration failed");
    }
  };

  return (
    <main className={styles.registerContainer}>
      <h1 className={styles.registerTitle}>Register</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password (min 6 chars)"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className={styles.buttonPrimary} type="submit">
          Create Account
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p className={styles.loginText}>
        Already have an account? <a href="/login">Login</a>
      </p>
    </main>
  );
}