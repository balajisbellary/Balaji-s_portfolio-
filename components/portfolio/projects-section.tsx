import { ExternalLink, Github, Heart, Plane } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Bikevault - Vehicle Lifecycle Management",
      description:
        "A backend-driven vehicle lifecycle management system built during my internship at Bosch. Features database models, data tracking workflows, vehicle testing logs, instrumentation tracking, and image uploads.",
      tags: ["Python", "Flask", "PostgreSQL", "SQLAlchemy"],
      icon: "bike",
    },
    {
      title: "Healthcare AI Disease Prediction",
      description:
        "An AI-powered system that predicts diseases using patient health data. Implements monitoring features to support early detection and preventive care using machine learning algorithms.",
      tags: ["Python", "Machine Learning", "Data Analysis", "Healthcare"],
      icon: "health",
    },
    {
      title: "Flight Delay Prediction & Analysis",
      description:
        "A machine learning model to predict flight delays using historical flight and weather data. Includes data preprocessing, feature engineering, and model evaluation for improved prediction accuracy.",
      tags: ["Python", "ML", "Data Science", "XGBoost"],
      icon: "flight",
    },
  ]

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Projects</h2>
        <div className="w-12 h-1 bg-primary rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group bg-secondary/50 border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
          >
            <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              {project.icon === "health" && (
                <Heart className="w-16 h-16 text-primary/50 group-hover:text-primary transition-colors" />
              )}
              {project.icon === "flight" && (
                <Plane className="w-16 h-16 text-primary/50 group-hover:text-primary transition-colors" />
              )}
              {project.icon === "bike" && (
                <svg
                  className="w-16 h-16 text-primary/50 group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="5" cy="17" r="3" strokeWidth="2" />
                  <circle cx="19" cy="17" r="3" strokeWidth="2" />
                  <path strokeWidth="2" d="M12 17l-2-6 5-2 2 3h4" />
                  <path strokeWidth="2" d="M10 11l-5 6" />
                </svg>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-secondary/50 border border-border rounded-xl p-6">
        <h3 className="font-semibold text-foreground mb-4">More on GitHub</h3>
        <p className="text-muted-foreground mb-4">
          Check out my GitHub profile for more projects and contributions.
        </p>
        <a
          href="https://github.com/balajisbellary"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
        >
          <Github className="w-4 h-4" />
          Visit GitHub
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </section>
  )
}
