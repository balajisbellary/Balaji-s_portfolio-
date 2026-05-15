import { Code, Database, Brain, Server } from "lucide-react"

export function AboutSection() {
  const services = [
    {
      icon: Code,
      title: "Backend Development",
      description: "Building robust REST APIs and backend systems using Python, Flask, and SQLAlchemy.",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Designing and managing databases with PostgreSQL, SQLite, and NoSQL solutions.",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Developing ML models using Random Forest, XGBoost, and implementing OCR/RAG pipelines.",
    },
    {
      icon: Server,
      title: "System Design",
      description: "Creating scalable application architectures with clean code and best practices.",
    },
  ]

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">About Me</h2>
        <div className="w-12 h-1 bg-primary rounded-full" />
      </div>

      <p className="text-muted-foreground leading-relaxed">
        Final-year B.Tech CSE (AI & ML) student with hands-on experience in Python backend development, 
        database management, and AI-based applications. Completed internship at Bosch Global Software 
        Technologies, where I developed a vehicle lifecycle management system using Flask, SQLAlchemy, 
        PostgreSQL, and Python.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Passionate about backend AI systems, RAG/OCR pipelines, machine learning, and scalable 
        application development. I enjoy tackling challenging problems and building solutions that 
        make a real impact.
      </p>

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-6">What I&apos;m Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-5 bg-secondary/50 border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
