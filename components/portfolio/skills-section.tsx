export function SkillsSection() {
  const technicalSkills = [
    { name: "Python", level: 90 },
    { name: "Flask & REST APIs", level: 85 },
    { name: "PostgreSQL & SQLAlchemy", level: 85 },
    { name: "Machine Learning", level: 75 },
    { name: "SQL", level: 85 },
    { name: "JavaScript", level: 70 },
    { name: "Git & GitHub", level: 80 },
    { name: "HTML/CSS", level: 75 },
  ]

  const tools = [
    "Python",
    "Flask",
    "SQLAlchemy",
    "PostgreSQL",
    "SQLite",
    "Git",
    "VS Code",
    "Pandas",
    "NumPy",
    "Jinja2",
  ]

  const concepts = [
    "REST API Design",
    "Database Design",
    "Machine Learning",
    "Data Analysis",
    "System Design",
    "OCR Pipelines",
    "RAG Basics",
    "Clean Architecture",
  ]

  const softSkills = [
    "Problem Solving",
    "Collaboration",
    "Effective Communication",
    "Adaptability",
    "Leadership",
  ]

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">My Skills</h2>
        <div className="w-12 h-1 bg-primary rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {technicalSkills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-foreground font-medium">{skill.name}</span>
              <span className="text-primary">{skill.level}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-secondary/50 border border-border rounded-xl p-5">
          <h3 className="font-semibold text-foreground mb-4">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-lg border border-primary/20"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-secondary/50 border border-border rounded-xl p-5">
          <h3 className="font-semibold text-foreground mb-4">Concepts</h3>
          <div className="flex flex-wrap gap-2">
            {concepts.map((concept) => (
              <span
                key={concept}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-lg border border-primary/20"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-secondary/50 border border-border rounded-xl p-5">
          <h3 className="font-semibold text-foreground mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-lg border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-secondary/50 border border-border rounded-xl p-5">
        <h3 className="font-semibold text-foreground mb-4">Languages</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-between">
            <span className="text-foreground">English</span>
            <span className="text-sm text-muted-foreground">Fluent</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-foreground">Hindi</span>
            <span className="text-sm text-muted-foreground">Proficient</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-foreground">Kannada</span>
            <span className="text-sm text-muted-foreground">Native</span>
          </div>
        </div>
      </div>
    </section>
  )
}
