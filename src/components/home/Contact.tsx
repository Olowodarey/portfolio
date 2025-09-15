import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Get In Touch</h2>
          <p className="text-muted-foreground text-sm">
            Ready to start your project? Let's discuss how we can work together.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 bg-card p-6 rounded-xl border border-border">
          <a 
            href="mailto:Olowodarey@gmail.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-accent/50"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium">Olowodarey@gmail.com</span>
          </a>
          
          <a 
            href="tel:+2348142293610" 
            className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-accent/50"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">+234 8142293610</span>
          </a>
          
          <div className="flex items-center gap-2 text-muted-foreground px-4 py-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Nigeria</span>
          </div>
          
          <div className="flex items-center gap-2">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-accent/50 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-accent/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-accent/50 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
