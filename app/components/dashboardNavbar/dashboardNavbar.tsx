"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./dashboardNavbar.module.scss";

type Props = {
  onMenuClick: () => void;
  userEmail: string;
  userName?: string;
  onLogout: () => void;
};

export default function DashboardNavbar({
  onMenuClick,
  userEmail,
  userName,
  onLogout,
}: Props) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const avatarLetter =
    (userName && userName.trim().charAt(0).toUpperCase()) ||
    (userEmail && userEmail.charAt(0).toUpperCase()) ||
    "U";

  const resolvedName =
    userName && userName.trim().length > 0
      ? userName
      : userEmail
        ? userEmail.split("@")[0]
        : "User";

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <button className={styles.menuButton} onClick={onMenuClick}>
          ☰
        </button>
        {/* <div className={styles.breadcrumb}>Dashboard</div> */}
      </div>

      <div className={styles.right}>
        {/* <button className={styles.iconButton}>🔔</button>
        <button className={styles.iconButton}>⚙️</button> */}

        {/* User Dropdown */}
        <div className={styles.userWrapper} ref={dropdownRef}>
          <div
            className={styles.userContainer}
            onClick={() => setOpen(!open)}
          >
            <div className={styles.avatar}>{avatarLetter}</div>

            <div className={styles.userInfo}>
              <span className={styles.userName}>{resolvedName}</span>
              <span className={styles.userEmail}>{userEmail}</span>
            </div>
          </div>

          {open && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownHeader}>
                <div className={styles.dropdownAvatar}>{avatarLetter}</div>
                <div>
                  <p className={styles.dropdownName}>{resolvedName}</p>
                  <p className={styles.dropdownEmail}>{userEmail}</p>
                </div>
              </div>

              <button className={styles.dropdownItem}>Profile</button>
              <button className={styles.dropdownItem}>Settings</button>

              <div className={styles.dropdownDivider}></div>

              <button className={styles.dropdownLogout} onClick={onLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}