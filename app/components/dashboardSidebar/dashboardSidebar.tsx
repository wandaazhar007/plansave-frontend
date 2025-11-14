"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faWallet,
  faMoneyBillTrendUp,
  faChartPie,
  faClipboardList,
  faBell,
  faGear,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./dashboardSidebar.module.scss";

type Props = {
  open: boolean;
  onClose: () => void;
  userEmail: string;
};

const overviewItems = [
  { title: "Dashboard", icon: faGauge, href: "/dashboard" },
];

const featureItems = [
  { title: "Expenses", icon: faWallet, href: "/dashboard/expenses" },
  { title: "Incomes", icon: faMoneyBillTrendUp, href: "/dashboard/incomes" },
  { title: "Analytics", icon: faChartPie, href: "/dashboard/analytics" },
  {
    title: "Budget Planning",
    icon: faClipboardList,
    href: "/dashboard/budget-planning",
  },
  {
    title: "Reports & History",
    icon: faClipboardList,
    href: "/dashboard/reports-history",
  },
  { title: "Notifications", icon: faBell, href: "/dashboard/notifications" },
  {
    title: "Settings & Preferences",
    icon: faGear,
    href: "/dashboard/settings",
  },
  { title: "Users", icon: faUser, href: "/dashboard/users" },
];

export default function DashboardSidebar({ open, onClose, userEmail }: Props) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      // only highlight Dashboard on the main overview page
      return pathname === "/dashboard";
    }
    // highlight for sub-routes like /dashboard/expenses/123
    return pathname.startsWith(href);
  };

  return (
    <>
      {open && <div className={styles.backdrop} onClick={onClose} />}

      <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
        <div className={styles.logoArea}>
          <div className={styles.logoDot}>P</div>
          <span className={styles.logoText}>PlanSave</span>
        </div>

        <nav className={styles.nav}>
          {/* OVERVIEW */}
          <div className={styles.navSection}>
            <span className={styles.navSectionTitle}>Overview</span>
            {overviewItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`${styles.navItem} ${isActive(item.href) ? styles.navItemActive : ""
                  }`}
                onClick={onClose}
              >
                <FontAwesomeIcon icon={item.icon} className={styles.icon} />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>

          {/* FEATURES */}
          <div className={styles.navSection}>
            <span className={styles.navSectionTitle}>Features</span>
            {featureItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`${styles.navItem} ${isActive(item.href) ? styles.navItemActive : ""
                  }`}
                onClick={onClose}
              >
                <FontAwesomeIcon icon={item.icon} className={styles.icon} />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </nav>

        <div className={styles.sidebarUser}>
          <div className={styles.sidebarAvatar}>
            {userEmail ? userEmail[0].toUpperCase() : "U"}
          </div>
          <div className={styles.sidebarUserInfo}>
            <span className={styles.sidebarUserName}>Current user</span>
            <span className={styles.sidebarUserEmail}>{userEmail}</span>
          </div>
        </div>
      </aside>
    </>
  );
}