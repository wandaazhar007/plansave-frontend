
import styles from "./dashboardSummaryCards.module.scss";

type Props = {
  loading: boolean;
  totalIncome: number;
  totalExpenses: number;
  netBalance: number;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);

export default function DashboardSummaryCards({
  loading,
  totalIncome,
  totalExpenses,
  netBalance,
}: Props) {
  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <p className={styles.label}>Total Income</p>
        <p className={styles.value}>
          {loading ? "Loading..." : formatCurrency(totalIncome)}
        </p>
        <span className={styles.tagPositive}>income</span>
      </div>

      <div className={styles.card}>
        <p className={styles.label}>Total Expenses</p>
        <p className={styles.value}>
          {loading ? "Loading..." : formatCurrency(totalExpenses)}
        </p>
        <span className={styles.tagNegative}>expenses</span>
      </div>

      <div className={styles.card}>
        <p className={styles.label}>Net Balance</p>
        <p className={styles.value}>
          {loading ? "Loading..." : formatCurrency(netBalance)}
        </p>
        <span
          className={
            netBalance >= 0 ? styles.tagPositive : styles.tagNegative
          }
        >
          {netBalance >= 0 ? "on track" : "needs attention"}
        </span>
      </div>
    </div>
  );
}