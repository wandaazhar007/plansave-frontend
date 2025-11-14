"use client";

import { useState } from "react";
import styles from "./faq.module.scss";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is PlanSave?",
    answer:
      "PlanSave is a simple budgeting app designed to help you track dialysis-related expenses alongside your everyday spending and income. It gives you one clear view of how treatment, bills, and daily life fit together.",
  },
  {
    question: "How does PlanSave work?",
    answer:
      "You log your dialysis sessions, bills, and daily expenses, then set budgets and goals that match your reality. PlanSave groups everything into categories, shows trends over time, and highlights what you can adjust without guesswork.",
  },
  {
    question: "Is PlanSave only for people on dialysis?",
    answer:
      "No. PlanSave is powerful for anyone who wants clearer control over their money, but it includes dedicated tools for tracking dialysis costs because those expenses are often recurring, complex, and easy to underestimate.",
  },
  {
    question: "Is my financial data secure and private?",
    answer:
      "Yes. Your financial data is stored securely and only tied to your account. We never sell your personal financial information, and we design the system so that you stay in control of what you share or export.",
  },
  {
    question: "Can I use PlanSave on multiple devices?",
    answer:
      "Absolutely. As long as you log in with the same account, you can access your PlanSave dashboard from any device with a browser, and your data stays in sync.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>frequently asked questions</h2>

      <div className={styles.faqContainer}>
        {faqs.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div key={index} className={styles.faqItem}>
              <button
                type="button"
                className={styles.questionRow}
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span className={styles.icon}>{isOpen ? "▴" : "▾"}</span>
              </button>

              <div
                className={`${styles.answerWrapper} ${isOpen ? styles.open : ""
                  }`}
              >
                <p className={styles.answer}>{item.answer}</p>
              </div>

              <div className={styles.divider} />
            </div>
          );
        })}
      </div>
    </section>
  );
}