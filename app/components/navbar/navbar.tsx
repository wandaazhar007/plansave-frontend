import Link from "next/link";
import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>PlanSave</div>

      <nav className={styles.navLinks}>
        <Link className={styles.loginButton} href="/login">Log in</Link>
        <Link className={styles.signupButton} href="/login">
          Sign up
        </Link>
      </nav>
    </header>
  );
}