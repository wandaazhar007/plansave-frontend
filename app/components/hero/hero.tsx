import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.tag}>📊 Smart Financial Management</div>

      <h1 className={styles.headline}>
        Take control of your money & your <span>dialysis expenses</span>.
      </h1>

      <p className={styles.subheadline}>
        Track every dialysis session, every spending, and every income — all in
        one clean, easy-to-use dashboard. Built for clarity, productivity, and
        peace of mind.
      </p>

      <a href="/register" className={styles.ctaButton}>
        Try it out — it&apos;s free
      </a>

      <div className={styles.socialProof}>
        loved by people who want clarity &amp; control
      </div>
    </section>
  );
}