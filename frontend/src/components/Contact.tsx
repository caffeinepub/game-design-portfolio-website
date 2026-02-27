import { Mail, MapPin } from 'lucide-react';
import { SiLinkedin } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-card/30 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-24 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-4 tracking-tight">Contact</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
          </div>

          {/* Single Horizontal Row Layout */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 animate-slide-in-left">
            {/* Email */}
            <div className="flex items-center gap-3 group">
              <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all duration-300 ease-smooth">
                <Mail className="h-5 w-5 text-accent transition-transform duration-300 ease-smooth group-hover:scale-110" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 tracking-wide uppercase">Email</p>
                <a
                  href="mailto:angelov.a.boyan@gmail.com"
                  className="text-foreground hover:text-accent transition-all duration-300 ease-smooth text-base"
                >
                  angelov.a.boyan@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 group">
              <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all duration-300 ease-smooth">
                <MapPin className="h-5 w-5 text-accent transition-transform duration-300 ease-smooth group-hover:scale-110" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 tracking-wide uppercase">Location</p>
                <p className="text-foreground text-base">Valencia, Spain</p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3 group">
              <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all duration-300 ease-smooth">
                <SiLinkedin className="h-5 w-5 text-accent transition-transform duration-300 ease-smooth group-hover:scale-110" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 tracking-wide uppercase">LinkedIn</p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-all duration-300 ease-smooth text-base"
                >
                  Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
