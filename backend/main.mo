import Storage "blob-storage/Storage";
import Text "mo:base/Text";
import MixinStorage "blob-storage/Mixin";
import Principal "mo:base/Principal";
import OrderedMap "mo:base/OrderedMap";
import Debug "mo:base/Debug";
import AccessControl "authorization/access-control";

actor {
  let storage = Storage.new();
  include MixinStorage(storage);

  // Access control state
  let accessControlState = AccessControl.initState();

  // User profile state
  transient let principalMap = OrderedMap.Make<Principal>(Principal.compare);
  var userProfiles = principalMap.empty<{ name : Text }>();

  // Access control functions
  public shared ({ caller }) func initializeAccessControl() : async () {
    AccessControl.initialize(accessControlState, caller);
  };

  public query ({ caller }) func getCallerUserRole() : async AccessControl.UserRole {
    AccessControl.getUserRole(accessControlState, caller);
  };

  public shared ({ caller }) func assignCallerUserRole(user : Principal, role : AccessControl.UserRole) : async () {
    AccessControl.assignRole(accessControlState, caller, user, role);
  };

  public query ({ caller }) func isCallerAdmin() : async Bool {
    AccessControl.isAdmin(accessControlState, caller);
  };

  public query ({ caller }) func getCallerUserProfile() : async ?{ name : Text } {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Debug.trap("Unauthorized: Only users can save profiles");
    };
    principalMap.get(userProfiles, caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?{ name : Text } {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Debug.trap("Unauthorized: Can only view your own profile");
    };
    principalMap.get(userProfiles, user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : { name : Text }) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Debug.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles := principalMap.put(userProfiles, caller, profile);
  };

  // Public query functions - no authentication required for public portfolio content
  public query func getProjects() : async [(Text, Text)] {
    [
      (
        "residency",
        "The Residency Multiplayer Games - Role: Lead Technical Designer - Technologies: Unreal Engine, Blueprint, C++",
      ),
      (
        "virtual_reality_trainings",
        "Virtual Reality Trainings - Role: Unreal Engine Developer - Technologies: Unreal Engine, VR SDKs, C++, Blueprints",
      ),
      (
        "ac_mirage",
        "Assassin's Creed Mirage - Role: Technical Designer (Cinematics) - Technologies: Anvil Engine",
      ),
      (
        "dawn_of_ragnarok",
        "Assassin's Creed Dawn of Ragnarök - Role: Technical Designer (Cinematics) - Technologies: Anvil Engine",
      ),
      (
        "aaa_fps_crytek",
        "AAA FPS Projects – Crytek - Role: Technical Design / Gameplay Prototyping - Technologies: CryEngine",
      ),
      (
        "norseguy",
        "Norseguy - Role: Lead Developer - Technologies: Unity, C#",
      ),
    ];
  };

  public query func getProjectVideos() : async [(Text, Text)] {
    [
      ("residency", "https://youtu.be/oyRhhySzPrY"),
      ("virtual_reality_trainings", "https://www.youtube.com/watch?v=uG__1gSkI3Y"),
      ("ac_mirage", "https://www.youtube.com/watch?v=x55lAlFtXmw"),
      ("dawn_of_ragnarok", "https://www.youtube.com/watch?v=1wiclO4a60A"),
      ("aaa_fps_crytek", "https://www.youtube.com/watch?v=16vBsmpcxh4"),
      ("norseguy", "https://www.youtube.com/watch?v=6iMCoMX6gkA"),
    ];
  };

  public query func getProjectDetails(projectId : Text) : async ?{
    id : Text;
    title : Text;
    role : Text;
    description : Text;
    videoUrl : Text;
  } {
    switch (projectId) {
      case ("residency") {
        ?{
          id = "residency";
          title = "The Residency Multiplayer Games";
          role = "Lead Technical Designer";
          description = "I led the technical direction and gameplay development for The Residency's interactive multiplayer games, built to connect football stars with fans in real time. The projects supported 1,000+ concurrent players with smooth, reliable online performance. My work covered system design, Unreal gameplay development, multiplayer optimization, rapid prototyping, and bug fixing to ensure stability at scale. We had no dedicated game designers, so our team handled all gameplay and feature design internally. These games delivered a unique and engaging way for football stars to interact with their fans.";
          videoUrl = "https://youtu.be/oyRhhySzPrY";
        };
      };
      case ("virtual_reality_trainings") {
        ?{
          id = "virtual_reality_trainings";
          title = "Virtual Reality Trainings";
          role = "Unreal Engine Developer";
          description = "Developed multiplayer VR training applications in Unreal Engine using C++ and Blueprints, delivering stable, high-performance solutions for enterprise clients. Created feature prototypes and reusable Blueprint systems to speed up iteration and support designers and non-programmers. Collaborated with cross-functional teams to refine interactions, user flows, and training logic. Delivered VR experiences for clients including Zeiss and Cytiva, balancing technical constraints with intuitive UX and reliable multiplayer functionality.";
          videoUrl = "https://www.youtube.com/watch?v=uG__1gSkI3Y";
        };
      };
      case ("ac_mirage") {
        ?{
          id = "ac_mirage";
          title = "Assassin's Creed Mirage";
          role = "Technical Designer (Cinematics)";
          description = "Built and maintained scripting systems for assembling in-game cinematic sequences, improving iteration speed for mission and narrative teams. Integrated gameplay and cinematic logic within the Anvil engine to ensure events, character behaviors, and transitions were stable and production-ready. Worked with level and narrative designers to script interactive moments and refine timing for story-driven gameplay. Documented workflows and provided technical support to improve pipeline efficiency and cross-team communication.";
          videoUrl = "https://www.youtube.com/watch?v=x55lAlFtXmw";
        };
      };
      case ("dawn_of_ragnarok") {
        ?{
          id = "dawn_of_ragnarok";
          title = "Assassin's Creed Dawn of Ragnarök";
          role = "Technical Designer (Cinematics)";
          description = "Developed and maintained cinematic scripting systems for Ubisoft's most ambitious AC expansion, focusing on stable, scalable narrative implementation in the Anvil engine. Created logic for event sequencing, camera behavior, character states, and gameplay-to-cinematic transitions. Collaborated with mission, animation, and narrative teams to debug issues, refine pacing, and support interactive story moments. Improved tools, documented workflows, and provided technical support to streamline the cinematic pipeline.";
          videoUrl = "https://www.youtube.com/watch?v=1wiclO4a60A";
        };
      };
      case ("aaa_fps_crytek") {
        ?{
          id = "aaa_fps_crytek";
          title = "AAA FPS Projects – Crytek";
          role = "Technical Design / Gameplay Prototyping";
          description = "Contributed to gameplay prototyping and iteration across multiple FPS projects, validating core mechanics, player interactions, and systemic behavior. Developed and tested gameplay features and interactions to assess performance and overall technical feasibility within CryEngine. Built gameplay sequences and scripted events using internal tools, focusing on readable action and smooth gameplay flow. Supported the creation of promotional gameplay captures for Hunt: Showdown trailers, in collaboration with the cinematic and production teams.";
          videoUrl = "https://www.youtube.com/watch?v=16vBsmpcxh4";
        };
      };
      case ("norseguy") {
        ?{
          id = "norseguy";
          title = "Norseguy";
          role = "Lead Developer";
          description = "Designed and implemented core RPG systems—including dialogue, quests, progression, and inventory—covering both gameplay logic and data structures. Built and refined gameplay features directly in Unity, focusing on smooth iteration, narrative integration, and system reliability throughout development. Developed the entire prototype independently, delivering a polished, narrative-driven RPG experience that demonstrated cohesive systems design, player progression, and engaging core gameplay.";
          videoUrl = "https://www.youtube.com/watch?v=6iMCoMX6gkA";
        };
      };
      case (_) null;
    };
  };

  public query func getExperience() : async [{
    company : Text;
    position : Text;
    period : Text;
    description : Text;
  }] {
    [
      {
        company = "The Residency — Remote";
        position = "Lead Technical Designer (Systems, Features, UI)";
        period = "October 2023 – Present";
        description = "Built core C++ and Blueprint multiplayer systems, gameplay features, and UI for large-scale online games supporting thousands of concurrent players. Enhanced network replication efficiency for 1,000+ users across multiple platforms. Accelerated onboarding of technical designers on Improbable's MSquared engine by establishing development standards and best practices.";
      },
      {
        company = "Crytek — Remote";
        position = "Technical Designer (Cinematics)";
        period = "October 2022 – October 2023";
        description = "Prototyped and validated gameplay features, ensuring technical feasibility and alignment with narrative goals. Collaborated with design and art teams to block out early gameplay sequences and implement scripted events. Performed competitive analysis of FPS design trends to inform feature scope, player expectations, and technical direction.";
      },
      {
        company = "Realworldone — Remote";
        position = "Technical Designer (Features)";
        period = "October 2021 – October 2022";
        description = "Designed and shipped multiplayer VR training applications in Unreal Engine using C++ and Blueprints, maintaining performance targets. Built reusable Blueprint systems and prototypes, accelerating iteration and enabling designers to implement content independently. Delivered 5 VR experiences for enterprise clients (Zeiss and Cytiva), balancing UX, interactivity, and performance.";
      },
      {
        company = "Ubisoft — Hybrid";
        position = "Technical Designer (Cinematics)";
        period = "November 2019 – October 2021";
        description = "Built and maintained scripting tools that accelerated designer workflows. Supported gameplay systems integration in the Anvil engine, ensuring production readiness across platforms. Documented workflows and provided technical support to designers, improving iteration speed and collaboration.";
      },
    ];
  };

  public query func getEducation() : async {
    degree : Text;
    years : Text;
    description : Text;
  } {
    {
      degree = "Computer Science and Game Development Bachelor";
      years = "2016–2020";
      description = "Focus on programming and specialization in game development engines";
    };
  };

  public query func getCertifications() : async [Text] {
    [
      "Unreal Engine Authorized Instructor Bootcamp – Epic Games/Incas",
      "Professional Game Development in C++ – Tom Looman",
      "3D Environment Art – CG Master Academy",
    ];
  };

  public query func getSkills() : async [Text] {
    [
      "Planning",
      "Pipeline Optimization",
      "Prototyping",
      "Visual Scripting",
      "Multiplayer Replication",
      "Game Optimization",
    ];
  };

  public query func getAboutContent() : async {
    name : Text;
    title : Text;
    summary : Text;
  } {
    {
      name = "Boyan Angelov";
      title = "Technical Designer & Unreal Engine Developer";
      summary = "I'm a Technical Designer and Unreal Engine Developer with 6 years of professional experience across AAA, multiplayer, VR, and mobile projects, including work on globally recognized game franchises.\n\nI specialize in building gameplay systems, combat mechanics, and scalable technical solutions in Unreal Engine (Blueprints & C++), bridging game design and engineering with a strong focus on performance, stability, and player experience.\n\nWith a hands-on, problem-solving approach, I'm comfortable moving from rapid prototyping to full production, translating creative vision into robust, production-ready systems that teams can confidently build upon.";
    };
  };

  public query func getContactInfo() : async {
    email : Text;
    location : Text;
    linkedin : Text;
  } {
    {
      email = "boyanangelovdev@gmail.com";
      location = "Valencia, Spain";
      linkedin = "https://www.linkedin.com/in/boyan-angelov";
    };
  };
};
