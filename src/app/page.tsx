import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesSection } from "@/components/sections/services";
import { ProjectsSection } from "@/components/sections/projects";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CoverageSection } from "@/components/sections/coverage";
import { CtaSection } from "@/components/sections/cta";
import { HomeSlider } from "@/components/sections/home-slider";

export default function Home() {
  return (
    <main>
      <HomeSlider />
      <TrustBar />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CoverageSection />
      <CtaSection />
    </main>
  );
}
