"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { apiGet } from "@/lib/apiClient";
import styles from "./dashboard.module.scss";

import DashboardNavbar from "../components/dashboardNavbar/dashboardNavbar";
import DashboardSidebar from "../components/dashboardSidebar/dashboardSidebar";
import DashboardSummaryCards from "../components/dashboardSummaryCards/dashboardSummaryCards";
import DashboardMain from "../components/dashboardMain/dashboardMain";

type Expense = {
  id: string;
  amount: number;
  category: string;
  date: string | null;
  description?: string;
  paymentMethod?: string;
  isRecurring?: boolean;
};

export default function DashboardPage() {
  const { user, idToken, logout } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  // redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  // fetch expenses summary
  useEffect(() => {
    const fetchData = async () => {
      if (!idToken) return;
      try {
        setLoadingData(true);
        const data = await apiGet<Expense[]>("/api/expenses", idToken);
        setExpenses(data);
      } catch (error) {
        console.error("Failed to fetch expenses", error);
      } finally {
        setLoadingData(false);
      }
    };
    fetchData();
  }, [idToken]);

  const totalExpenses = expenses.reduce((sum, e) => sum + (e.amount || 0), 0);
  // incomes & budgets are placeholders for now
  const totalIncome = 0;
  const netBalance = totalIncome - totalExpenses;

  return (
    <div className={styles.layout}>
      <DashboardSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        userEmail={user?.email ?? ""}
      />

      <div className={styles.mainArea}>
        <DashboardNavbar
          onMenuClick={() => setSidebarOpen(true)}
          userEmail={user?.email ?? ""}
          onLogout={logout}
        />

        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Dashboard Overview</h1>
          <p className={styles.pageSubtitle}>
            Welcome back! Here&apos;s what&apos;s happening with your money today.
          </p>

          <DashboardSummaryCards
            loading={loadingData}
            totalExpenses={totalExpenses}
            totalIncome={totalIncome}
            netBalance={netBalance}
          />

          <DashboardMain expenses={expenses} />
        </div>
      </div>
    </div>
  );
}