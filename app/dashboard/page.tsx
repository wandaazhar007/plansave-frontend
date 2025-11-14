"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState, FormEvent } from "react";
import { apiGet, apiPost } from "@/lib/apiClient";

type FirestoreDate =
  | {
    seconds?: number;
    _seconds?: number;
    nanoseconds?: number;
    _nanoseconds?: number;
  }
  | string
  | null
  | undefined;

type Expense = {
  id: string;
  amount: number;
  category: string;
  date: FirestoreDate;
  description?: string;
  paymentMethod?: string;
  isRecurring?: boolean;
};

const getDateString = (date: FirestoreDate) => {
  if (!date) return "Unknown Date";

  // Case 1: Firestore Timestamp serialized by Firebase Admin
  if (typeof date === "object") {
    const seconds = date.seconds ?? date._seconds;
    if (typeof seconds === "number") {
      const d = new Date(seconds * 1000);
      if (!Number.isNaN(d.getTime())) {
        return d.toLocaleDateString();
      }
    }
  }

  // Case 2: Already a string (ISO or something parseable)
  if (typeof date === "string") {
    const d = new Date(date);
    if (!Number.isNaN(d.getTime())) {
      return d.toLocaleDateString();
    }
  }

  return "Unknown Date";
};

export default function DashboardPage() {
  const { user, idToken, loading, logout } = useAuth();
  const router = useRouter();

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [apiError, setApiError] = useState<string | null>(null);

  // form state
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Dialysis");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [saving, setSaving] = useState(false);

  // redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  // fetch expenses when we have a token
  useEffect(() => {
    const fetchExpenses = async () => {
      if (!idToken) return;

      try {
        setApiError(null);
        const data = await apiGet<Expense[]>("/api/expenses", idToken);
        setExpenses(data);
      } catch (err: any) {
        setApiError(err.message ?? "Failed to load expenses");
      }
    };

    fetchExpenses();
  }, [idToken]);

  const handleAddExpense = async (e: FormEvent) => {
    e.preventDefault();
    if (!idToken) return;

    try {
      setSaving(true);
      setApiError(null);

      const payload = {
        amount: Number(amount),
        category,
        // Send a clear ISO date; backend will convert to Timestamp
        date: date ? `${date}T00:00:00` : new Date().toISOString(),
        description,
        paymentMethod,
        isRecurring: false,
      };

      const created = await apiPost<Expense>("/api/expenses", idToken, payload);

      // prepend new expense to list
      setExpenses((prev) => [created, ...prev]);

      // reset some fields
      setAmount("");
      setDescription("");
    } catch (err: any) {
      setApiError(err.message ?? "Failed to add expense");
    } finally {
      setSaving(false);
    }
  };

  if (loading || (!user && !loading)) {
    return <p style={{ padding: "2rem" }}>Loading...</p>;
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      <p>You are logged in as: {user?.email}</p>

      <button onClick={logout} style={{ marginTop: 8, marginBottom: 24 }}>
        Logout
      </button>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Add Expense</h2>
        <form onSubmit={handleAddExpense}>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <br />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Dialysis</option>
            <option>Food</option>
            <option>Rent</option>
            <option>Transport</option>
            <option>Other</option>
          </select>
          <br />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Payment method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <br />
          <button type="submit" disabled={saving}>
            {saving ? "Saving..." : "Add expense"}
          </button>
        </form>
      </section>

      <section>
        <h2>Recent Expenses</h2>
        {apiError && <p style={{ color: "red" }}>{apiError}</p>}
        {!apiError && expenses.length === 0 && <p>No expenses yet.</p>}

        <ul>
          {expenses.map((exp) => (
            <li key={exp.id}>
              {getDateString(exp.date)} — {exp.category} — ${exp.amount} —{" "}
              {exp.description || "(no description)"}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}