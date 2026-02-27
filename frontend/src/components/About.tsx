import { Gamepad2, Code, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Gamepad2,
      title: 'Technical Design',
      description: 'Expert in gameplay systems, combat mechanics, and technical implementation across AAA titles.',
    },
    {
      icon: Code,
      title: 'Game Engines',
      description: 'Proficient in Unreal Engine, CryEngine, and Unity with strong scripting and prototyping skills.',
    },
    {
      icon: Lightbulb,
      title: 'Systems Design',
      description: 'Specialized in designing complex game systems, AI behaviors, and player progression mechanics.',
    },
    {
      icon: Users,
      title: 'Cross-Functional Leadership',
      description: 'Experienced in collaborating with programmers, artists, and designers to deliver polished experiences.',
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-24 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-4 tracking-tight">About</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
          </div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-5 gap-16 items-start mb-32">
            <div className="md:col-span-2 animate-slide-in-left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-transparent rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 ease-smooth"></div>
                <img
                  src="/assets/Screenshot 2025-09-08 115559.png"
                  alt="Boyan - Technical Designer and Unreal Engine Developer"
                  className="relative w-full rounded-lg shadow-2xl shadow-background/50 transition-all duration-500 ease-smooth group-hover:shadow-accent/20"
                />
              </div>
            </div>

            <div className="md:col-span-3 space-y-8 animate-slide-in-right">
              <div>
                <h3 className="text-3xl font-light text-foreground mb-2 tracking-tight">Boyan</h3>
                <p className="text-lg text-accent tracking-wide">Technical Designer & Unreal Engine Developer</p>
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="transition-all duration-300 ease-smooth hover:text-foreground">
                  I'm a Technical Designer and Unreal Engine Developer with 6 years of professional experience across AAA, multiplayer, VR, and mobile projects, including work on globally recognized game franchises.
                </p>
                <p className="transition-all duration-300 ease-smooth hover:text-foreground">
                  I specialize in building gameplay systems, combat mechanics, and scalable technical solutions in Unreal Engine (Blueprints & C++), bridging game design and engineering with a strong focus on performance, stability, and player experience.
                </p>
                <p className="transition-all duration-300 ease-smooth hover:text-foreground">
                  With a hands-on, problem-solving approach, I'm comfortable moving from rapid prototyping to full production, translating creative vision into robust, production-ready systems that teams can confidently build upon.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-12">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="space-y-4 p-6 rounded-lg border border-border/50 bg-card/30 hover:border-accent/50 hover:bg-card/50 transition-all duration-500 ease-smooth group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all duration-500 ease-smooth">
                    <skill.icon className="h-6 w-6 text-accent transition-transform duration-500 ease-smooth group-hover:scale-110" />
                  </div>
                  <h4 className="text-lg font-normal text-foreground tracking-tight">{skill.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-[4.5rem] transition-all duration-300 ease-smooth group-hover:text-foreground">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
