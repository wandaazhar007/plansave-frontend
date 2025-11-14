import styles from "./home.module.scss";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import FeaturesSection from "./components/features/features";
import HowItWorksSection from "./components/howitworks/howitworks";
import TestimonialsSection from "./components/testimonials/testimonials";
import FAQSection from "./components/faq/faq";
import CTASection from "./components/cta/cta";
import Footer from "./components/footer/footer";

export const metadata = {
  title: "PlanSave — Smart Money & Dialysis Expense Management",
  description:
    "Track your dialysis expenses, daily spending, budgets, and income with PlanSave — a simple, secure, and smart financial tool built for clarity and control.",
};

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}