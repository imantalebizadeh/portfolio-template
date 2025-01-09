import ProjectsFeaturesTap from "@/components/layout/projects-features-tap";
import Header from "@/components/layout/header";
import HeroSection from "@/components/layout/hero-section";
import ProjectsSection from "@/components/layout/projects-section";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <ProjectsFeaturesTap />
    </div>
  );
}
