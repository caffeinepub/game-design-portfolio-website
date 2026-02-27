import { useState } from 'react';
import { ArrowRight, X, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectData {
  id: string;
  title: string;
  subtitle?: string;
  role: string;
  technologies: string[];
  description: string;
  extendedDescription: string;
  responsibilities: string[];
  image: string;
  embedUrl: string;
  youtubeUrl: string;
  embedType: 'youtube' | 'upwork';
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleProjectClick = (project: ProjectData) => {
    setScrollPosition(window.scrollY);
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 0);
  };

  const handleWatchOnYouTube = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handle3DPortfolioClick = () => {
    window.open('https://www.artstation.com/boyanangelov', '_blank', 'noopener,noreferrer');
  };

  const projects: ProjectData[] = [
    {
      id: 'residency-multiplayer',
      title: 'The Residency Multiplayer Games',
      role: 'Lead Technical Designer',
      technologies: ['Unreal Engine', 'Blueprint', 'C++', 'Multiplayer Systems', 'System Design', 'Gameplay Development'],
      description:
        'Led technical direction and gameplay development for interactive multiplayer games connecting football stars with fans in real time, supporting 1,000+ concurrent players.',
      extendedDescription:
        'I led the technical direction and gameplay development for The Residency\'s interactive multiplayer games, built to connect football stars with fans in real time. The projects supported 1,000+ concurrent players with smooth, reliable online performance. My work covered system design, Unreal gameplay development, multiplayer optimization, rapid prototyping, and bug fixing to ensure stability at scale. We had no dedicated game designers, so our team handled all gameplay and feature design internally. These games delivered a unique and engaging way for football stars to interact with their fans.',
      responsibilities: [
        'Led technical direction and system design for multiplayer games',
        'Developed gameplay systems and features in Unreal Engine',
        'Optimized multiplayer performance for 1,000+ concurrent players',
        'Handled rapid prototyping and iterative feature development',
        'Managed bug fixing and stability improvements at scale',
        'Designed gameplay features and mechanics without dedicated game designers',
      ],
      image: '/assets/residency.png',
      embedUrl: 'https://www.youtube.com/embed/oyRhhySzPrY?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3',
      youtubeUrl: 'https://youtu.be/oyRhhySzPrY',
      embedType: 'youtube',
    },
    {
      id: 'aaa-fps-crytek',
      title: 'AAA FPS Projects – Crytek',
      subtitle: 'Technical Design / Gameplay Prototyping',
      role: 'Technical Design / Gameplay Prototyping',
      technologies: ['CryEngine', 'Gameplay Prototyping', 'FPS Mechanics', 'Scripting', 'Performance Testing'],
      description:
        'Contributed to gameplay prototyping and iteration across multiple FPS projects, validating core mechanics and player interactions.',
      extendedDescription:
        'Contributed to gameplay prototyping and iteration across multiple FPS projects, validating core mechanics, player interactions, and systemic behavior. Developed and tested gameplay features and interactions to assess performance and overall technical feasibility within CryEngine. Built gameplay sequences and scripted events using internal tools, focusing on readable action and smooth gameplay flow. Supported the creation of promotional gameplay captures for Hunt: Showdown trailers, in collaboration with the cinematic and production teams.',
      responsibilities: [
        'Contributed to gameplay prototyping across multiple FPS projects',
        'Validated core mechanics, player interactions, and systemic behavior',
        'Developed and tested gameplay features for performance assessment',
        'Built gameplay sequences and scripted events using internal tools',
        'Focused on readable action and smooth gameplay flow',
        'Supported promotional gameplay captures for Hunt: Showdown trailers',
      ],
      image: 'https://www.dropbox.com/scl/fi/y5ptzzfksf2ngtum05bq9/crytek-photo.jpg?rlkey=7b5ebacb0gocdklu7stdan60p&st=5uvjoiu6&raw=1',
      embedUrl: 'https://www.youtube.com/embed/16vBsmpcxh4?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3',
      youtubeUrl: 'https://www.youtube.com/watch?v=16vBsmpcxh4',
      embedType: 'youtube',
    },
    {
      id: 'vr-trainings',
      title: 'Virtual Reality Trainings',
      subtitle: 'Multiplayer VR Training Applications',
      role: 'Technical Designer',
      technologies: ['Unreal Engine', 'C++', 'Blueprints', 'VR SDKs', 'Multiplayer Systems', 'Enterprise Solutions'],
      description:
        'Developed multiplayer VR training applications in Unreal Engine, delivering stable, high-performance solutions for enterprise clients including Zeiss and Cytiva.',
      extendedDescription:
        'Developed multiplayer VR training applications in Unreal Engine using C++ and Blueprints, delivering stable, high-performance solutions for enterprise clients. Created feature prototypes and reusable Blueprint systems to speed up iteration and support designers and non-programmers. Collaborated with cross-functional teams to refine interactions, user flows, and training logic. Delivered VR experiences for clients including Zeiss and Cytiva, balancing technical constraints with intuitive UX and reliable multiplayer functionality.',
      responsibilities: [
        'Developed multiplayer VR training applications using C++ and Blueprints',
        'Created feature prototypes and reusable Blueprint systems',
        'Collaborated with cross-functional teams on interactions and user flows',
        'Refined training logic and user experience design',
        'Delivered VR experiences for enterprise clients (Zeiss, Cytiva)',
        'Balanced technical constraints with intuitive UX and multiplayer functionality',
      ],
      image: '/assets/real world one.png',
      embedUrl: 'https://www.youtube.com/embed/uG__1gSkI3Y?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3',
      youtubeUrl: 'https://www.youtube.com/watch?v=uG__1gSkI3Y',
      embedType: 'youtube',
    },
    {
      id: 'ac-mirage',
      title: 'Assassin\'s Creed Mirage',
      subtitle: 'Technical Designer (Cinematics)',
      role: 'Technical Designer (Cinematics)',
      technologies: ['Anvil Engine', 'Cinematic Scripting', 'Event Sequencing', 'Narrative Systems', 'Pipeline Optimization'],
      description:
        'Built and maintained scripting systems for assembling in-game cinematic sequences, improving iteration speed for mission and narrative teams.',
      extendedDescription:
        'Built and maintained scripting systems for assembling in-game cinematic sequences, improving iteration speed for mission and narrative teams. Integrated gameplay and cinematic logic within the Anvil engine to ensure events, character behaviors, and transitions were stable and production-ready. Worked with level and narrative designers to script interactive moments and refine timing for story-driven gameplay. Documented workflows and provided technical support to improve pipeline efficiency and cross-team communication.',
      responsibilities: [
        'Built and maintained scripting systems for cinematic sequences',
        'Improved iteration speed for mission and narrative teams',
        'Integrated gameplay and cinematic logic within Anvil engine',
        'Ensured events, character behaviors, and transitions were production-ready',
        'Scripted interactive moments and refined timing for story-driven gameplay',
        'Documented workflows and provided technical support for pipeline efficiency',
      ],
      image: '/assets/ac mirage.png',
      embedUrl: 'https://www.youtube.com/embed/x55lAlFtXmw?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3',
      youtubeUrl: 'https://www.youtube.com/watch?v=x55lAlFtXmw',
      embedType: 'youtube',
    },
    {
      id: 'ac-ragnarok',
      title: 'Assassin\'s Creed Dawn of Ragnarök',
      subtitle: 'Technical Designer (Cinematics)',
      role: 'Technical Designer (Cinematics)',
      technologies: ['Anvil Engine', 'Cinematic Scripting', 'Event Sequencing', 'Camera Systems', 'Narrative Implementation'],
      description:
        'Developed and maintained cinematic scripting systems for Ubisoft\'s most ambitious AC expansion, focusing on stable, scalable narrative implementation.',
      extendedDescription:
        'Developed and maintained cinematic scripting systems for Ubisoft\'s most ambitious AC expansion, focusing on stable, scalable narrative implementation in the Anvil engine. Created logic for event sequencing, camera behavior, character states, and gameplay-to-cinematic transitions. Collaborated with mission, animation, and narrative teams to debug issues, refine pacing, and support interactive story moments. Improved tools, documented workflows, and provided technical support to streamline the cinematic pipeline.',
      responsibilities: [
        'Developed cinematic scripting systems for ambitious AC expansion',
        'Created logic for event sequencing and camera behavior',
        'Implemented character states and gameplay-to-cinematic transitions',
        'Collaborated with mission, animation, and narrative teams',
        'Debugged issues and refined pacing for interactive story moments',
        'Improved tools and documented workflows to streamline cinematic pipeline',
      ],
      image: 'https://www.dropbox.com/scl/fi/6x3fargb8upq60i5e9wd2/dawn-of-ragnarok-3.jpg?rlkey=iby4impqwm0c3nt3zjky2e08n&st=ser88v59&raw=1',
      embedUrl: 'https://www.youtube.com/embed/1wiclO4a60A?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3',
      youtubeUrl: 'https://www.youtube.com/watch?v=1wiclO4a60A',
      embedType: 'youtube',
    },
    {
      id: 'norseguy-rpg',
      title: 'Norseguy',
      subtitle: 'Lead Developer',
      role: 'Lead Developer',
      technologies: ['Unity', 'C#', 'RPG Systems', 'Dialogue Systems', 'Quest Systems', 'Inventory Management'],
      description:
        'Designed and implemented core RPG systems including dialogue, quests, progression, and inventory for a narrative-driven experience.',
      extendedDescription:
        'Designed and implemented core RPG systems—including dialogue, quests, progression, and inventory—covering both gameplay logic and data structures. Built and refined gameplay features directly in Unity, focusing on smooth iteration, narrative integration, and system reliability throughout development. Developed the entire prototype independently, delivering a polished, narrative-driven RPG experience that demonstrated cohesive systems design, player progression, and engaging core gameplay.',
      responsibilities: [
        'Designed and implemented core RPG systems (dialogue, quests, progression, inventory)',
        'Covered both gameplay logic and data structure implementation',
        'Built and refined gameplay features directly in Unity',
        'Focused on smooth iteration and narrative integration',
        'Developed entire prototype independently',
        'Delivered polished, narrative-driven RPG experience with cohesive systems',
      ],
      image: 'https://www.dropbox.com/scl/fi/v7etyznjv20qoten4kf2a/norseguy3.png?rlkey=846yncrdsr2s1lkmiuvj50nly&st=havfvs9n&raw=1',
      embedUrl: 'https://www.youtube.com/embed/6iMCoMX6gkA?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3',
      youtubeUrl: 'https://www.youtube.com/watch?v=6iMCoMX6gkA',
      embedType: 'youtube',
    },
  ];

  return (
    <section id="projects" className="py-32 bg-card/30 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with 3D Portfolio Button */}
          <div className="mb-16 animate-fade-in flex items-start justify-between">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-4 tracking-tight">Projects</h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
            </div>
            <button
              onClick={handle3DPortfolioClick}
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 hover:bg-accent/10 border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              aria-label="View 3D Portfolio on ArtStation"
            >
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors duration-300 tracking-wide">
                3D Portfolio
              </span>
            </button>
          </div>

          {/* Projects Grid - 2 rows x 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="group cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative overflow-hidden rounded-lg aspect-video bg-card shadow-lg shadow-background/50 transition-all duration-[400ms] ease-out group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:scale-[1.05]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[400ms] ease-out"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] ease-out"></div>
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-[400ms] ease-out">
                      <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-[400ms] ease-out">
                        <h3 className="text-xl font-light text-foreground tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm text-accent tracking-wide uppercase font-medium">
                          {project.role}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground/80 mt-3">
                          <span className="tracking-wide">Click to Learn More</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-[400ms] ease-out group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/30 rounded-lg transition-all duration-[400ms] ease-out pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center animate-modal-fade-in"
          onClick={handleCloseModal}
        >
          <div className="absolute inset-0 bg-background/95 backdrop-blur-sm"></div>
          
          <div 
            className="relative w-[95vw] sm:w-[92vw] h-[95vh] sm:h-[92vh] bg-card border border-border/50 rounded-lg overflow-hidden shadow-2xl shadow-background/50 animate-modal-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close and YouTube buttons - mobile optimized */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 z-50 p-2 rounded-full bg-background/90 hover:bg-background transition-all duration-300 group"
              aria-label="Close"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
            </button>

            <button
              onClick={() => handleWatchOnYouTube(selectedProject.youtubeUrl)}
              className="absolute top-3 right-14 sm:top-6 sm:right-20 z-50 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-background/90 hover:bg-accent/20 hover:border-accent/50 border border-border/50 transition-all duration-300 group"
              aria-label="Watch on YouTube"
            >
              <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-accent transition-colors hidden xs:inline">Watch on YouTube</span>
            </button>

            <div className="h-full overflow-y-auto">
              {/* Video Hero Section - Mobile Optimized */}
              <div className="relative h-[40vh] sm:h-[45vh] md:h-[55vh] lg:h-[60vh] overflow-hidden">
                {/* Gradient overlay with better mobile opacity */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/75 to-card z-10"></div>
                
                {/* Video iframe container */}
                <div className="absolute inset-0">
                  <iframe
                    src={selectedProject.embedUrl}
                    className="w-full h-full scale-110"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={selectedProject.title}
                  />
                </div>

                {/* Title overlay on video - mobile optimized */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8 md:p-12">
                  <p className="text-xs sm:text-sm text-accent tracking-widest uppercase mb-2 sm:mb-3 font-medium">
                    {selectedProject.role}
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-tight leading-tight">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Content Section - Mobile Optimized */}
              <div className="p-6 sm:p-8 md:p-12 space-y-8 sm:space-y-12">
                {/* Overview */}
                <div className="max-w-3xl">
                  <h3 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-accent mb-4 sm:mb-6">Overview</h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {selectedProject.extendedDescription}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
                  {/* Technologies */}
                  <div>
                    <h3 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-accent mb-4 sm:mb-6">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-border/50 text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h3 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-accent mb-4 sm:mb-6">Key Contributions</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {selectedProject.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <span className="text-accent mt-1 text-xs transition-transform duration-300 group-hover/item:translate-x-1">→</span>
                          <span className="text-sm text-muted-foreground leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Watch Full Video CTA */}
                <div className="pt-4 sm:pt-8 border-t border-border/30">
                  <Button
                    onClick={() => handleWatchOnYouTube(selectedProject.youtubeUrl)}
                    variant="outline"
                    className="group border-border/50 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover:text-accent transition-colors" />
                    <span className="group-hover:text-accent transition-colors">Watch Full Video on YouTube</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
