import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle, MessageSquare } from "lucide-react"
import Link from "next/link"

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
          <Link 
            href="mailto:Olowodarey@gmail.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-accent/50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium">Olowodarey@gmail.com</span>
          </Link>
          
          <Link 
            href="tel:+2348142293610" 
            className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-accent/50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">+234 8142293610</span>
          </Link>
          
          <div className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-accent/50">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Nigeria</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/Olowodarey" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-[#333] hover:text-white transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 group-hover:text-white" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/darey-olowo-213859169/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-[#0A66C2] hover:text-white transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 group-hover:text-white" />
            </Link>
            <Link 
              href="https://x.com/Dareyolowo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-[#1DA1F2] hover:text-white transition-colors group"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 group-hover:text-white" />
            </Link>
            <Link 
              href="https://wa.me/2348142293610" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-[#25D366] hover:text-white transition-colors group"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 group-hover:text-white" />
            </Link>
            <Link 
              href="https://t.me/Darey56" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-[#0088CC] hover:text-white transition-colors group"
              aria-label="Telegram"
            >
              <MessageSquare className="w-4 h-4 group-hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
