import styles from "./dashboardMain.module.scss";

type Expense = {
  id: string;
  amount: number;
  category: string;
  date: string | null;
  description?: string;
  paymentMethod?: string;
  isRecurring?: boolean;
};

type Props = {
  expenses: Expense[];
};

const getDateString = (date: string | null) => {
  if (!date) return "Unknown date";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "Unknown date";
  return parsed.toLocaleDateString();
};

export default function DashboardMain({ expenses }: Props) {
  const recent = expenses.slice(0, 5);

  return (
    <div className={styles.grid}>
      <section className={styles.bigCard}>
        <h2 className={styles.sectionTitle}>Spending overview</h2>
        <p className={styles.sectionSubtitle}>
          Charts and analytics will live here (monthly trends, categories, and
          dialysis vs non-dialysis comparison).
        </p>
        <div className={styles.chartPlaceholder}>Line / pie charts area</div>
      </section>

      <section className={styles.sideCard}>
        <h2 className={styles.sectionTitle}>Recent expenses</h2>
        {recent.length === 0 ? (
          <p className={styles.empty}>No expenses yet.</p>
        ) : (
          <ul className={styles.expenseList}>
            {recent.map((exp) => (
              <li key={exp.id} className={styles.expenseItem}>
                <div>
                  <p className={styles.expenseTitle}>
                    {exp.description || exp.category}
                  </p>
                  <p className={styles.expenseMeta}>
                    {getDateString(exp.date)} · {exp.category}
                  </p>
                </div>
                <div className={styles.expenseAmount}>-${exp.amount}</div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}