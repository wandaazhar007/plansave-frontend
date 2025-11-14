import styles from "./cta.module.scss";

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>get started for free</h2>
        <p className={styles.subheading}>
          start seeing your dialysis costs and daily spending in one clear view.
        </p>

        <a href="/register" className={styles.button}>
          try PlanSave free
        </a>
      </div>
    </section>
  );
}