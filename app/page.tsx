import AboutSection from "@/components/layout/about-section";
import CTASection from "@/components/layout/cta-section";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import HeroSection from "@/components/layout/hero-section";
import ProjectsFeaturesTap from "@/components/layout/projects-features-tap";
import ProjectsSection from "@/components/layout/projects-section";
import TestimonialsSection from "@/components/layout/Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <ProjectsFeaturesTap />
      <TestimonialsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </>
  );
}
