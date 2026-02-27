import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import Header from './components/Header';
import Hero from './components/Hero';
// import Skills from './components/Skills'; // Hidden from layout but component preserved
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          {/* Skills section hidden from main layout but component code preserved for future use */}
          {/* <Skills /> */}
          <Projects />
          <About />
          <Resume />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
