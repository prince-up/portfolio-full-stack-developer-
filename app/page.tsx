import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { CodeSnippetsSection } from "@/components/code-snippets-section"
import { TimelineSection } from "@/components/timeline-section"
import { CertificationsSection } from "@/components/certifications-section"
import { GitHubStats } from "@/components/github-stats"
import { SocialLinks } from "@/components/social-links"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { AnalyticsTracker } from "@/components/analytics-tracker"
import { IntersectionObserver } from "@/components/intersection-observer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 opacity-5 bg-[url('/subtle-geometric-pattern-for-developer-portfolio-b.jpg')] bg-repeat"></div>
      <div className="relative z-10">
        <AnalyticsTracker />
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <IntersectionObserver animationClass="animate-slide-in-bottom">
            <SkillsSection />
          </IntersectionObserver>
          <IntersectionObserver animationClass="animate-slide-in-bottom" delay={100}>
            <CodeSnippetsSection />
          </IntersectionObserver>
          <IntersectionObserver animationClass="animate-slide-in-bottom" delay={200}>
            <TimelineSection />
          </IntersectionObserver>
          <IntersectionObserver animationClass="animate-slide-in-bottom" delay={100}>
            <CertificationsSection />
          </IntersectionObserver>
          <IntersectionObserver animationClass="animate-slide-in-bottom" delay={200}>
            <GitHubStats />
          </IntersectionObserver>
          <IntersectionObserver animationClass="animate-slide-in-bottom" delay={100}>
            <SocialLinks />
          </IntersectionObserver>
          <IntersectionObserver animationClass="animate-slide-in-bottom" delay={200}>
            <ProjectsSection />
          </IntersectionObserver>
          <IntersectionObserver animationClass="animate-slide-in-bottom" delay={100}>
            <ContactSection />
          </IntersectionObserver>
        </main>
        <Footer />
      </div>
    </div>
  )
}
