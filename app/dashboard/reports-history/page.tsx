"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import styles from "../dashboard.module.scss";
import DashboardNavbar from "../../components/dashboardNavbar/dashboardNavbar";
import DashboardSidebar from "../../components/dashboardSidebar/dashboardSidebar";

export default function ReportsHistoryPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);

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
          userName={user?.displayName ?? ""}
          onLogout={logout}
        />

        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Reports & history</h1>
          <p className={styles.pageSubtitle}>
            Filter your transactions by date range and export clean CSV or Excel reports.
          </p>

          {/* Filters + table + export buttons will live here */}
        </div>
      </div>
    </div>
  );
}