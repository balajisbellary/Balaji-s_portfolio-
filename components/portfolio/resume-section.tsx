import { GraduationCap, Briefcase, Download } from "lucide-react"

export function ResumeSection() {
  const education = [
    {
      institution: "CMR University",
      degree: "B.Tech in CSE (AI & ML)",
      period: "2022 - 2026",
      details: "CGPA: 7.6",
      location: "Bengaluru",
    },
    {
      institution: "BKG PU College",
      degree: "Class 12th (PCMC)",
      period: "2020 - 2022",
      details: "Percentage: 84%",
      location: "Sandur",
    },
    {
      institution: "KLE Society's School",
      degree: "Class 10th (CBSE)",
      period: "2018 - 2020",
      details: "Percentage: 84%",
      location: "Gadag",
    },
  ]

  const experience = [
    {
      company: "Bosch Global Software Technologies",
      role: "Python & Database Development Intern",
      period: "Feb 2026 - Apr 2026",
      project: "Bikevault - Bike Lifecycle Management Database System",
      responsibilities: [
        "Designed and developed a backend-driven vehicle lifecycle management system using Python and Flask",
        "Built database models and data tracking workflows using SQLAlchemy ORM, PostgreSQL, and SQLite",
        "Developed modules for vehicle testing logs, instrumentation tracking, and image uploads",
        "Improved operational efficiency through structured database management",
      ],
    },
  ]

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-1">Resume</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>
        <a
          href="https://blobs.vusercontent.net/blob/Balaji_S_Bellary_cv-jReab6xBpZMnUOXdxUwoW8JwG18zeo.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
        >
          <Download className="w-4 h-4" />
          Download CV
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Education</h3>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-6 pb-4 border-l-2 border-border last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="bg-secondary/50 border border-border rounded-xl p-4">
                  <span className="text-xs text-primary font-medium">{edu.period}</span>
                  <h4 className="font-semibold text-foreground mt-1">{edu.institution}</h4>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.details} | {edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Experience</h3>
          </div>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative pl-6 pb-4 border-l-2 border-border last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="bg-secondary/50 border border-border rounded-xl p-4">
                  <span className="text-xs text-primary font-medium">{exp.period}</span>
                  <h4 className="font-semibold text-foreground mt-1">{exp.company}</h4>
                  <p className="text-sm text-primary/80 font-medium">{exp.role}</p>
                  <p className="text-sm text-muted-foreground mt-1 italic">{exp.project}</p>
                  <ul className="mt-3 space-y-1">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-secondary/50 border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Generative AI for Personal Productivity</p>
              <p className="text-xs text-muted-foreground">Udemy</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Getting Started with Hadoop</p>
              <p className="text-xs text-muted-foreground">Simplilearn/Skillup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
