import { FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const subtitles = ['Technical Design', 'System Design', 'Unreal Development'];

  const [scrollProgress, setScrollProgress] = useState(0);

  // Animated subtitle cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Scroll cover effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollY / (windowHeight * 0.7), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToNextSection = () => {
    const heroHeight = window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth',
    });
  };

  const heroOpacity = 1 - scrollProgress * 0.8;
  const heroScale = 1 - scrollProgress * 0.05;
  const heroTranslateY = scrollProgress * -30;

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        opacity: heroOpacity,
        transform: `scale(${heroScale}) translateY(${heroTranslateY}px)`,
        transition: 'none',
      }}
    >
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/SQh2cBr4MgA?autoplay=1&mute=1&loop=1&playlist=SQh2cBr4MgA&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3&disablekb=1"
          title="Hero Background Video"
          allow="autoplay; encrypted-media"
          style={{
            border: 'none',
            pointerEvents: 'none',
          }}
        />
        
        {/* Dark overlay for text readability */}
        <div 
          className="absolute inset-0 bg-black/60"
          style={{
            opacity: 1 + scrollProgress * 0.4,
          }}
        ></div>
      </div>

      {/* Content - Centered vertically */}
      <div className="relative z-10 flex-1 flex items-center justify-center container mx-auto px-4">
        <div 
          className="max-w-5xl mx-auto space-y-12 animate-fade-in" 
          style={{ 
            animationDelay: '0.4s',
            opacity: heroOpacity,
          }}
        >
          {/* Title with Elegant Fade-In Animation */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="inline-block text-accent animate-name-fade-in whitespace-nowrap">BOYAN </span>
              <span className="inline-block text-white animate-name-fade-in whitespace-nowrap" style={{ animationDelay: '0.1s' }}>ANGELOV</span>
            </h1>
            <div className="relative h-12 sm:h-14 md:h-16 overflow-hidden">
              {subtitles.map((subtitle, index) => (
                <p
                  key={subtitle}
                  className={`absolute inset-0 flex items-center justify-center text-xl sm:text-2xl md:text-3xl text-gray-300 font-light tracking-wide transition-all duration-700 ${
                    index === currentSubtitleIndex
                      ? 'opacity-100 translate-y-0'
                      : index < currentSubtitleIndex
                      ? 'opacity-0 -translate-y-full'
                      : 'opacity-0 translate-y-full'
                  }`}
                >
                  {subtitle}
                </p>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('resume')}
              className="px-8 py-6 text-base font-medium bg-accent hover:bg-accent/90 text-white border-0 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30 group"
            >
              <FileText className="mr-2 h-5 w-5" />
              Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="px-8 py-6 text-base font-medium bg-transparent border-2 border-gray-400 text-gray-300 hover:border-accent hover:text-accent hover:bg-accent/5 rounded-md transition-all duration-300 hover:scale-105 group"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Prompt */}
      <div 
        className="relative z-10 pb-6 sm:pb-8 flex justify-center animate-fade-in" 
        style={{ 
          animationDelay: '0.8s',
          opacity: heroOpacity,
        }}
      >
        <button
          onClick={scrollToNextSection}
          className="group flex flex-col items-center gap-3 text-gray-400 hover:text-accent transition-all duration-300 cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-sm font-light tracking-wider uppercase">Scroll Down</span>
          <div className="relative">
            <svg
              width="28"
              height="42"
              viewBox="0 0 28 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-300"
            >
              <rect
                x="1"
                y="1"
                width="26"
                height="40"
                rx="13"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-400 group-hover:text-accent transition-colors duration-300"
              />
              <rect
                x="11"
                y="8"
                width="6"
                height="10"
                rx="3"
                className="text-accent animate-mouse-scroll"
                fill="currentColor"
              />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
