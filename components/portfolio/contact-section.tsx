"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:balajisbellary9@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`
    window.location.href = mailtoLink
  }

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Contact Me</h2>
        <div className="w-12 h-1 bg-primary rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be 
            part of your vision. Feel free to reach out!
          </p>

          <div className="space-y-4">
            <a
              href="mailto:balajisbellary9@gmail.com"
              className="flex items-center gap-4 p-4 bg-secondary/50 border border-border rounded-xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">balajisbellary9@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+917204384789"
              className="flex items-center gap-4 p-4 bg-secondary/50 border border-border rounded-xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">+91 7204384789</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-secondary/50 border border-border rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">Bengaluru, India</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="https://linkedin.com/in/balajisbellary"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/balajisbellary"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground resize-none"
              placeholder="Hello, I would like to discuss..."
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-medium"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
