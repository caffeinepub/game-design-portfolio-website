import { useGetSkills } from '../hooks/useQueries';
import { Wrench, Zap, Code, Network, Gauge, Workflow } from 'lucide-react';

const Skills = () => {
  const { data: skills = [], isLoading } = useGetSkills();

  // Map skill names to icons and descriptions
  const skillDetails: Record<string, { icon: typeof Wrench; description: string }> = {
    'Planning': {
      icon: Workflow,
      description: 'Strategic planning and roadmap development for complex game systems and features.',
    },
    'Pipeline Optimization': {
      icon: Zap,
      description: 'Streamlining workflows and improving team efficiency through technical solutions.',
    },
    'Prototyping': {
      icon: Wrench,
      description: 'Rapid iteration and validation of gameplay mechanics and technical concepts.',
    },
    'Visual Scripting': {
      icon: Code,
      description: 'Expert-level Blueprint development and visual scripting system design.',
    },
    'Multiplayer Replication': {
      icon: Network,
      description: 'Building scalable networked systems for large-scale multiplayer experiences.',
    },
    'Game Optimization': {
      icon: Gauge,
      description: 'Performance profiling and optimization for smooth gameplay across platforms.',
    },
  };

  if (isLoading) {
    return (
      <section id="skills" className="py-32 relative bg-card/20">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="mb-24 animate-fade-in">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-4 tracking-tight">
                Relevant Skills
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border/50 bg-card/30 animate-pulse"
                >
                  <div className="h-12 w-12 bg-muted rounded-lg mb-4"></div>
                  <div className="h-6 bg-muted rounded mb-3 w-3/4"></div>
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-32 relative bg-card/20">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-24 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-4 tracking-tight">
              Relevant Skills
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const details = skillDetails[skill] || {
                icon: Wrench,
                description: 'Specialized expertise in game development and technical design.',
              };
              const IconComponent = details.icon;

              return (
                <div
                  key={skill}
                  className="group p-6 rounded-lg border border-border/50 bg-card/30 hover:border-accent/50 hover:bg-card/50 transition-all duration-500 ease-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all duration-500 ease-smooth w-fit">
                      <IconComponent className="h-6 w-6 text-accent transition-transform duration-500 ease-smooth group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl font-normal text-foreground tracking-tight">
                      {skill}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed transition-all duration-300 ease-smooth group-hover:text-foreground">
                      {details.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
