import { Separator } from '@/components/ui/separator';

const Resume = () => {
  const experience = [
    {
      title: 'Lead Unreal Engine Developer (Systems, Features, UI)',
      company: 'The Residency — Remote',
      period: 'October 2023 – Present',
      description:
        'Built core C++ and Blueprint multiplayer systems, gameplay features, and UI for large-scale online games supporting thousands of concurrent players. Enhanced network replication efficiency for 1,000+ users across multiple platforms. Accelerated onboarding of technical designers on Improbable\'s MSquared engine by establishing development standards and best practices.',
    },
    {
      title: 'Unreal Developer (Features)',
      company: 'Realworldone — Remote',
      period: 'October 2022 – October 2023',
      description:
        'Designed and shipped multiplayer VR training applications in Unreal Engine using C++ and Blueprints, maintaining performance targets. Built reusable Blueprint systems and prototypes, accelerating iteration and enabling designers to implement content independently. Delivered 5 VR experiences for enterprise clients (Zeiss and Cytiva), balancing UX, interactivity, and performance.',
    },
    {
      title: 'Technical Designer (Cinematics)',
      company: 'Crytek — Remote',
      period: 'October 2021 – October 2022',
      description:
        'Prototyped and validated gameplay features, ensuring technical feasibility and alignment with narrative goals. Collaborated with design and art teams to block out early gameplay sequences and implement scripted events. Performed competitive analysis of FPS design trends to inform feature scope, player expectations, and technical direction.',
    },
    {
      title: 'Technical Designer (Cinematics)',
      company: 'Ubisoft — Hybrid',
      period: 'November 2019 – October 2021',
      description:
        'Built and maintained scripting tools that accelerated designer workflows. Supported gameplay systems integration in the Anvil engine, ensuring production readiness across platforms. Documented workflows and provided technical support to designers, improving iteration speed and collaboration.',
    },
  ];

  const education = [
    {
      degree: 'Computer Science and Game Development Bachelor',
      institution: 'Technical University',
      period: '2016 – 2020',
      description: 'Focus on programming and specialization in game development engines.',
    },
  ];

  const certifications = [
    {
      name: 'Unreal Engine Authorized Instructor Bootcamp',
      organization: 'Epic Games/Incas',
    },
    {
      name: 'Professional Game Development in C++',
      organization: 'Tom Looman',
    },
    {
      name: '3D Environment Art',
      organization: 'CG Master Academy',
    },
  ];

  return (
    <section id="resume" className="py-32 relative">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-24 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-4 tracking-tight">Resume</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
          </div>

          {/* Experience Section */}
          <div className="mb-24">
            <h3 className="text-xl font-light mb-12 tracking-wide uppercase text-accent">Experience</h3>

            <div className="space-y-16">
              {experience.map((job, index) => (
                <div 
                  key={index} 
                  className="space-y-6 p-8 rounded-lg border border-border/50 bg-card/30 hover:border-accent/50 hover:bg-card/50 transition-all duration-500 ease-smooth group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <div>
                      <h4 className="text-xl font-normal text-foreground tracking-tight transition-all duration-300 ease-smooth group-hover:text-accent">
                        {job.title}
                      </h4>
                      <p className="text-base text-accent mt-1 tracking-wide">{job.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground tracking-wider">{job.period}</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed transition-all duration-300 ease-smooth group-hover:text-foreground">
                    {job.description}
                  </p>

                  {index < experience.length - 1 && <Separator className="mt-8" />}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Education */}
            <div className="p-8 rounded-lg border border-border/50 bg-card/30 hover:border-accent/50 hover:bg-card/50 transition-all duration-500 ease-smooth">
              <h3 className="text-xl font-light mb-12 tracking-wide uppercase text-accent">Education</h3>

              {education.map((edu, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <h4 className="text-base font-normal text-foreground tracking-tight">{edu.degree}</h4>
                    <p className="text-sm text-accent mt-2 tracking-wide">{edu.institution}</p>
                    <span className="text-sm text-muted-foreground tracking-wider">{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="p-8 rounded-lg border border-border/50 bg-card/30 hover:border-accent/50 hover:bg-card/50 transition-all duration-500 ease-smooth">
              <h3 className="text-xl font-light mb-12 tracking-wide uppercase text-accent">Certifications</h3>

              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <span className="text-accent mt-1.5 text-xs transition-transform duration-300 ease-smooth group-hover/item:translate-x-1">→</span>
                    <div className="flex-1">
                      <span className="text-muted-foreground text-sm italic transition-all duration-300 ease-smooth group-hover/item:text-accent">
                        {cert.name}
                      </span>
                      <span className="text-muted-foreground text-sm"> – {cert.organization}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
