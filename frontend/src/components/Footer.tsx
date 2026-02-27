import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto py-12">
        <div className="flex flex-col items-center justify-center">
          <p className="text-muted-foreground text-sm">
            © 2025. Built with{' '}
            <Heart className="inline h-3.5 w-3.5 text-accent fill-accent" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
