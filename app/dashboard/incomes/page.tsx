"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import styles from "../dashboard.module.scss";
import DashboardNavbar from "../../components/dashboardNavbar/dashboardNavbar";
import DashboardSidebar from "../../components/dashboardSidebar/dashboardSidebar";

export default function IncomesPage() {
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
          <h1 className={styles.pageTitle}>Income</h1>
          <p className={styles.pageSubtitle}>
            Track salary, side gigs, benefits, and every recurring income source.
          </p>

          {/* Build income sources list / forms here later */}
        </div>
      </div>
    </div>
  );
}