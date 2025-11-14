import styles from "./howitworks.module.scss";

export default function HowItWorksSection() {
  return (
    <section className={styles.section}>
      {/* MAIN CARD: "time to talk" style */}
      <div className={styles.mainCard}>
        <div className={styles.videoWrapper}>
          <div className={styles.fakeVideo}>Dashboard preview</div>
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>time to see the full picture</h2>
          <p className={styles.description}>
            Sit down with your money like it&apos;s a real conversation. PlanSave
            pulls in your dialysis costs, regular bills, and daily spending into
            one clear view. See what&apos;s fixed, what&apos;s flexible, and where
            you can breathe again.
          </p>
          <p className={styles.description}>
            Every session helps you understand the real story behind your
            numbers — so you can make choices with confidence instead of stress.
            It&apos;s like having a calm, organized friend who lays everything out
            for you.
          </p>
        </div>
      </div>

      {/* THREE CARDS */}
      <div className={styles.cardsRow}>
        <div className={styles.card}>
          <div className={styles.iconCircle}>
            <span>💬</span>
          </div>
          <h3>separate dialysis & daily life</h3>
          <p>
            Track dialysis-related expenses in their own category, right next to
            your everyday spending. See exactly how much treatment costs without
            losing sight of groceries, rent, and transport.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconCircle}>
            <span>📊</span>
          </div>
          <h3>see patterns, not chaos</h3>
          <p>
            Spot trends across months, categories, and payment methods. Understand
            where your money leaks, where it&apos;s stable, and where you can
            adjust without sacrificing what matters.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconCircle}>
            <span>📝</span>
          </div>
          <h3>end each month with a plan</h3>
          <p>
            Close every month with a simple summary and clear next steps. Know
            what to save, what to cut, and how much room you have before the next
            dialysis bill arrives.
          </p>
        </div>
      </div>
    </section>
  );
}