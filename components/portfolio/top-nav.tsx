"use client"

interface TopNavProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function TopNav({ activeSection, onSectionChange }: TopNavProps) {
  const sections = ["About", "Resume", "Skills", "Projects", "Contact"]

  return (
    <nav className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-wrap justify-center gap-2">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => onSectionChange(section)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeSection === section
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
