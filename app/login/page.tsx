"use client";

import { FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import styles from "./login.module.scss";
import Image from "next/image";
import Link from "next/link";

type Mode = "signin" | "signup";

export default function AuthPage() {
  const { user, login, register, loginWithGoogle } = useAuth();
  const router = useRouter();

  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // If already logged in, go straight to dashboard
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === "signin") {
        await login(email, password);
      } else {
        await register(email, password);
      }
      router.push("/dashboard");
    } catch (err: any) {
      setError(err?.message ?? "Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      setError(null);
      setLoading(true);
      await loginWithGoogle();
      router.push("/dashboard");
    } catch (err: any) {
      setError(err?.message ?? "Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const heading = mode === "signin" ? "Welcome back" : "Join PlanSave";
  const subheading =
    mode === "signin"
      ? "Sign in to see your budgets and dialysis expenses."
      : "Create an account to start tracking your money with clarity.";

  const primaryButtonLabel =
    mode === "signin" ? "Sign in" : "Create account";

  return (
    <div className={styles.page}>
      <Link href="/" className={styles.backLink}>
        ← Back to home
      </Link>

      <div className={styles.card}>
        <div className={styles.brand}>
          <span className={styles.brandIcon}>💰</span>
          <span className={styles.brandName}>PlanSave</span>
        </div>

        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subheading}>{subheading}</p>

        {/* Tabs */}
        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.tabButton} ${mode === "signup" ? styles.tabActive : ""
              }`}
            onClick={() => setMode("signup")}
          >
            Sign Up
          </button>
          <button
            type="button"
            className={`${styles.tabButton} ${mode === "signin" ? styles.tabActive : ""
              }`}
            onClick={() => setMode("signin")}
          >
            Sign In
          </button>
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Email
            <input
              type="email"
              className={styles.input}
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className={styles.label}>
            Password
            <input
              type="password"
              className={styles.input}
              placeholder={
                mode === "signup"
                  ? "Create a strong password"
                  : "Enter your password"
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          {error && <p className={styles.error}>{error}</p>}

          <button
            type="submit"
            className={styles.primaryButton}
            disabled={loading}
          >
            {loading ? "Please wait..." : primaryButtonLabel}
          </button>
        </form>

        {/* Divider */}
        <div className={styles.dividerRow}>
          <span className={styles.divider} />
          <span className={styles.dividerLabel}>OR CONTINUE WITH</span>
          <span className={styles.divider} />
        </div>

        {/* Google button */}
        <button
          type="button"
          className={styles.googleButton}
          onClick={handleGoogle}
          disabled={loading}
        >
          <span className={styles.googleIcon}>
            <Image src="/google.svg" width={20} height={20} alt="Google logo" />
          </span>
          <span className={styles.googleText}>Continue with Google</span>
        </button>

        <p className={styles.terms}>
          By continuing, you agree to our{" "}
          <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}