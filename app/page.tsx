import AboutSection from "@/components/layout/about-section";
import Header from "@/components/layout/header";
import HeroSection from "@/components/layout/hero-section";
import ProjectsFeaturesTap from "@/components/layout/projects-features-tap";
import ProjectsSection from "@/components/layout/projects-section";
import TestimonialsSection from "@/components/layout/Testimonials";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <ProjectsFeaturesTap />
      <TestimonialsSection />
      <AboutSection />
    </div>
  );
}
