import styles from "./features.module.scss";

export default function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.sectionTitle}>It&apos;s easy to use — trust</h2>

      <div className={styles.featuresBox}>
        <div className={styles.featureText}>
          <h3>Track everything that matters</h3>
          <p>
            With PlanSave, you can track dialysis costs, daily expenses, income
            streams, budgets, and financial goals. Everything is organized,
            visual, and simple — so you always know where your money goes.
          </p>
        </div>

        <div className={styles.featureImage}>
          <div className={styles.placeholderVideo}>Preview</div>
        </div>
      </div>
    </section>
  );
}