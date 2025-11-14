"use client";

import { useRef } from "react";
import styles from "./testimonials.module.scss";

const testimonials = [
  {
    quote:
      "PlanSave finally showed me how much dialysis really costs me each month without guessing. It’s honest, simple, and weirdly calming.",
    handle: "@lifewithdialysis",
  },
  {
    quote:
      "I used to track everything in random notes and screenshots. Now I open one dashboard and know exactly what I can spend today.",
    handle: "@budgetreset",
  },
  {
    quote:
      "Seeing my treatment costs next to my normal expenses helped me stop blaming myself and start planning. It feels like getting my control back.",
    handle: "@quietplanner",
  },
  {
    quote:
      "I used to track everything in random notes and screenshots. Now I open one dashboard and know exactly what I can spend today.",
    handle: "@chelsea",
  },
  {
    quote:
      "Seeing my treatment costs next to my normal expenses helped me stop blaming myself and start planning. It feels like getting my control back.",
    handle: "@diana",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 340; // px
    const amount = direction === "left" ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        trusted by people managing real-life expenses
      </h2>

      <div className={styles.carouselWrapper}>
        <button
          type="button"
          className={styles.arrowButton}
          onClick={() => scrollByAmount("left")}
          aria-label="Scroll testimonials left"
        >
          ←
        </button>

        <div className={styles.cardsContainer} ref={scrollRef}>
          {testimonials.map((item, index) => (
            <article key={index} className={styles.card}>
              <p className={styles.quote}>&quot;{item.quote}&quot;</p>
              <p className={styles.handle}>{item.handle}</p>
            </article>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrowButton} ${styles.arrowRight}`}
          onClick={() => scrollByAmount("right")}
          aria-label="Scroll testimonials right"
        >
          →
        </button>
      </div>
    </section>
  );
}