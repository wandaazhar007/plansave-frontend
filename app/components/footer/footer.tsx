import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.line} />

      <div className={styles.grid}>
        {/* BRAND */}
        <div>
          <h3 className={styles.brand}>PlanSave</h3>
        </div>

        {/* SOCIALS */}
        <div>
          <h4 className={styles.heading}>socials</h4>
          <ul className={styles.list}>
            <li><a href="#" target="_blank">instagram</a></li>
            <li><a href="#" target="_blank">tiktok</a></li>
            <li><a href="#" target="_blank">x (twitter)</a></li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h4 className={styles.heading}>legal</h4>
          <ul className={styles.list}>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">terms of service</a></li>
            <li><a href="#">financial disclaimer</a></li>
          </ul>
        </div>

        {/* COPYRIGHT */}
        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} plansave.com</p>
          <p>all rights reserved</p>
        </div>
      </div>
    </footer>
  );
}