"use client"

import Image from "next/image"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-full lg:w-80 lg:min-h-screen bg-card border-r border-border p-6 lg:p-8 flex flex-col">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center mb-4 overflow-hidden">
          <Image
            src="/profile.png"
            alt="Balaji S Bellary"
            width={128}
            height={128}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>
        <h1 className="text-xl font-bold text-foreground mb-1">Balaji S Bellary</h1>
        <span className="px-3 py-1 bg-secondary rounded-lg text-sm text-muted-foreground">
          Python Backend Developer
        </span>
      </div>

      <div className="border-t border-border pt-6 space-y-4 mb-8">
        <div className="flex items-center gap-3 text-sm">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <Mail className="w-4 h-4 text-primary" />
          </div>
          <div className="text-left">
            <p className="text-muted-foreground text-xs">Email</p>
            <p className="text-foreground text-sm">balajisbellary9@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <Phone className="w-4 h-4 text-primary" />
          </div>
          <div className="text-left">
            <p className="text-muted-foreground text-xs">Phone</p>
            <p className="text-foreground text-sm">+91 7204384789</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <MapPin className="w-4 h-4 text-primary" />
          </div>
          <div className="text-left">
            <p className="text-muted-foreground text-xs">Location</p>
            <p className="text-foreground text-sm">Bengaluru, India</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-center">
        <a
          href="https://linkedin.com/in/balajisbellary"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="https://github.com/balajisbellary"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>
    </aside>
  )
}
