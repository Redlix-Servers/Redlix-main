import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CallToAction from "@/components/CallToAction";
import ProjectsSection from "@/components/ProjectsSection";
import BlogsSection from "@/components/BlogsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import CorporateFooter from "@/components/CorporateFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans">
      <main className="flex-grow">
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <CallToAction />
        <BlogsSection />
        <TestimonialsSection />
        <FinalCTA />
        <CorporateFooter />
      </main>
    </div>
  );
}
