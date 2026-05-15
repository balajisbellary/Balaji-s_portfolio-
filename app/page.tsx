"use client"

import { useState } from "react"
import { Sidebar } from "@/components/portfolio/sidebar"
import { TopNav } from "@/components/portfolio/top-nav"
import { AboutSection } from "@/components/portfolio/about-section"
import { ResumeSection } from "@/components/portfolio/resume-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ContactSection } from "@/components/portfolio/contact-section"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About")

  const renderSection = () => {
    switch (activeSection) {
      case "About":
        return <AboutSection />
      case "Resume":
        return <ResumeSection />
      case "Skills":
        return <SkillsSection />
      case "Projects":
        return <ProjectsSection />
      case "Contact":
        return <ContactSection />
      default:
        return <AboutSection />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <TopNav activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-12 max-w-5xl">
          {renderSection()}
        </main>
      </div>
    </div>
  )
}
