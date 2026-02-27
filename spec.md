# Game Design Portfolio Website

A minimal, dark-modern portfolio website for showcasing game design and Unreal Engine work with refined visual polish and subtle animations.

## Deployment Configuration

- **Public deployment** on the Internet Computer network
- **Custom domain**: boyangamedev
- **Content language**: English

## Core Features

### Navigation Structure
- Home: Landing page with hero section and brief introduction
- Projects: Portfolio showcase with project details and modal project information
- About: Professional background and skills overview with profile photo
- Resume: Professional experience and qualifications
- Contact: Contact information display

### Header Component
- Centered horizontal navigation with all navigation links positioned in the middle of the header
- No logo or name text in the top-left corner
- Clean minimal header design maintaining dark-modern aesthetic
- Responsive navigation that works across all screen sizes

### Hero Section
- **YouTube Video Background**: Full-screen YouTube video background using https://youtu.be/SQh2cBr4MgA embedded as the primary hero background
- **Video Configuration**: YouTube video configured to autoplay, loop continuously, and remain muted with all YouTube controls, overlays, titles, and recommendations disabled for clean presentation
- **Responsive Video Background**: Video background maintains proper aspect ratio and covers the full hero section on both desktop and mobile devices without letterboxing or distortion
- **Dark Overlay for Text Readability**: Semi-transparent dark overlay positioned over the video background to ensure optimal text contrast and readability while preserving video visibility
- **Video Performance Optimization**: Video background loads efficiently with proper fallback handling and smooth playback across different devices and connection speeds
- Centered layout with name, title, and buttons vertically and horizontally aligned over the video background
- "BOYAN ANGELOV" title with "BOYAN" rendered in the same light blue accent color used throughout the site while "ANGELOV" remains in white, maintaining overall font styling and size
- **Elegant Name Animation**: Smooth fade-in animation with subtle upward movement using gradual easing curve that introduces "BOYAN ANGELOV" elegantly without any abrupt transitions or pop effects
- Animation uses CSS transforms and opacity transitions for smooth fade-in from 0 to 100% opacity with gentle upward movement and proper easing-out curves
- Name animation triggers once on page load, maintains smooth easing throughout, and retains full opacity at completion with solid color fill
- Animation integrates seamlessly with subtitle and scroll-down animations while maintaining timing consistency with dark-modern hero aesthetic
- Bold sans-serif typography with strong weight for the user's name
- Animated subtitle cycling between "Technical Design", "System Design", and "Unreal Development" with smooth fade or typewriter-style animation
- Light blue accent color for highlighted elements and buttons
- Two action buttons: "Resume" and "Contact" positioned closer to the title and subtitle for better visual grouping
- Matching shape, color, and hover effects for buttons
- Animated mouse icon scroll indicator positioned at the very bottom of the hero section, centered horizontally below the animated subtitle and above the section transition
- Mouse scroll animation loops subtly with smooth glowing or pulsing animation highlighting the scroll wheel
- Scroll indicator maintains responsive positioning across all screen sizes and stays visually aligned at the bottom of the hero area
- Subtle parallax or fade-in animations as the page loads
- Fully responsive design that maintains center alignment across all screen sizes
- **Scroll Cover Effect**: When user scrolls down, the hero section smoothly transitions out as lower sections scroll over it, creating a gradual layered "scroll cover" effect with parallax-like animation where the hero fades or dims slightly as other sections move upward
- Scroll cover effect maintains smoothness and performance across desktop and mobile views
- Scroll prompt and hero animations remain fully visible and fade out smoothly as transition begins
- Effect preserves responsiveness and dark-modern aesthetics

### Relevant Skills Section
- **Hidden from main layout**: The Relevant Skills section is hidden from the main portfolio layout and does not appear below the hero section
- **Component preservation**: The component code remains intact for future use but is not rendered in the current layout
- Six skills maintained in component code:
  1. Planning
  2. Pipeline Optimization
  3. Prototyping
  4. Visual Scripting
  5. Multiplayer Replication
  6. Game Optimization
- Skills maintain interactive hover animations with smooth fade-in effects when component is active
- Maintains dark-modern theme styling with proper spacing and alignment
- Integrates seamlessly with the overall site layout and animations when enabled
- Responsive design that adapts to different screen sizes

### Projects Section
- **Section Header Layout**: Projects section header displays "Projects" title on the left side with a small, sleek "3D Portfolio" button positioned at the top-right corner of the section header
- **3D Portfolio Button**: Compact, clean button labeled "3D Portfolio" that opens https://www.artstation.com/boyanangelov in a new browser tab when clicked
- **Button Styling**: Button styled to match the site's dark-modern aesthetic with consistent typography, compact size, and subtle glow effect on hover using the same light blue accent color and smooth transitions used throughout the site
- **2x3 Grid Layout**: Display exactly six portfolio projects in a 2-row by 3-column grid layout that adapts to different screen sizes while maintaining visual balance
- **Uniform Thumbnail Sizes**: All project thumbnails displayed at consistent, uniform dimensions for visual cohesion across the grid
- **Refined Hover Animation**: Smooth hover animation with gentle scaling and content fade-in using ease-out timing (~400ms duration) that matches the site's dark-modern visual language
- **Simplified Hover Content**: On hover, display only:
  - Project name
  - Role/position in the project
  - Subtle "Click to Learn More" icon
- **Smooth Content Transitions**: Project text and icon fade in smoothly using CSS transitions with ease-out timing rather than appearing instantly
- **Optimized Layout Animation**: Grid reflow animations feel natural with stable positioning of other cards during hover expansion, preventing jarring layout shifts
- **Natural Grid Stability**: Hover expansion maintains grid alignment without disrupting neighboring cards, using optimized CSS transforms and positioning
- **Smooth Animations**: Hover effects use CSS transforms and opacity transitions to create polished interactions that align with the dark-modern aesthetic
- **Hover Scaling Animation**: Each project tile expands slightly on hover with smooth scaling animation using CSS transforms with ease-out timing (~400ms)
- **Responsive Grid Stability**: Expanded cards maintain grid alignment and do not disrupt layout across different screen sizes
- Display exactly six portfolio projects in this specific order:
  1. The Residency Multiplayer Games (using residency.png as thumbnail image)
  2. AAA FPS Projects – Crytek (using external image: https://www.dropbox.com/scl/fi/y5ptzzfksf2ngtum05bq9/crytek-photo.jpg?rlkey=7b5ebacb0gocdklu7stdan60p&st=5uvjoiu6&dl=0)
  3. Virtual Reality Trainings (using real world one.png as thumbnail image)
  4. Assassin's Creed Mirage (using ac mirage.png as thumbnail image)
  5. Assassin's Creed Dawn of Ragnarok (using external image: https://www.dropbox.com/scl/fi/6x3fargb8upq60i5e9wd2/dawn-of-ragnarok-3.jpg?rlkey=iby4impqwm0c3nt3zjky2e08n&st=ser88v59&dl=0)
  6. Norseguy (using external image: https://www.dropbox.com/scl/fi/v7etyznjv20qoten4kf2a/norseguy3.png?rlkey=846yncrdsr2s1lkmiuvj50nly&st=havfvs9n&dl=0)
- Each project card includes:
  - Short description
  - Role in the project
  - Dynamic thumbnail image
  - **Modal Project Details**: Clickable functionality with smooth transition animation to open a popup modal overlay showing detailed project information
- **Grid Hover Details**: On hover, overlay displays project title, role, and "Click to Learn More" icon with smooth fade-in animation using CSS ease-out timing and proper contrast for readability
- Dynamic hover states with subtle animations on project cards that maintain dark-modern theme consistency
- Improved alignment for text and media elements within the grid structure
- Consistent styling across all project cards with enhanced visual hierarchy
- **Full-Page Modal Project Information**: Clicking "Click to Learn More" opens a full-page popup layer overlay within the main website that covers approximately 90-95% of the screen width and height for an expansive cinematic presentation, displaying detailed information including:
  - Extended project description
  - Detailed technologies used
  - Specific role and responsibilities
  - **Embedded project video**: Responsive YouTube iframe or video element embedded within the modal with autoplay enabled, muted by default, and clean presentation
  - **YouTube Link Button**: Visible button (small icon or text link like "Watch on YouTube") positioned in the top-right corner of the modal or near the video that opens the YouTube video in a new tab, styled to match the existing dark-modern theme
- **Enhanced Video Embedding**: All embedded videos in project modals automatically start playing when the modal opens, muted by default, with YouTube overlay controls, titles, and recommendations disabled for a clean, cinematic viewing experience
- **Improved Text Readability**: Overlay text displayed on top of videos features enhanced contrast through subtle dim or gradient overlays behind the text or soft shadow effects to improve text visibility against video backgrounds
- **Full-Page Modal Overlay Design**: Modal features dark translucent background overlay with smooth fade-in/out transitions consistent with the site's dark-modern theme, covering approximately 90-95% of the screen width and height while maintaining proportional scaling and responsive design
- **Full-Page Modal Animation**: Modal appears with smooth scale-in animation and disappears with scale-out animation using CSS transitions, maintaining cinematic and modern feel with smooth animations at the full-page scale
- **Responsive Full-Page Modal**: Modal covers approximately 90-95% of the screen width and height while maintaining responsive margins and centering vertically and horizontally on all devices, scaling down appropriately on smaller screens
- **Mobile Modal Optimization**: On mobile devices (375px, 414px, 768px breakpoints), modal video overlay scales correctly to fit viewport width with proper aspect ratio maintenance, blurred background effects render with consistent opacity and positioning, text elements (project title, description, role) remain centered and legible above the blurred overlay, and all transitions and animations remain smooth without overflow or vertical shifting out of frame
- **Content Adaptation**: All internal modal content including project videos, descriptions, and buttons adapt gracefully to the full-page layout with proper spacing and alignment
- **Scroll Position Preservation**: When closing the modal, user retains their exact scroll position on the Projects grid with no page shift or reset
- **Modal Close Functionality**: Modal includes close button and clicking outside the modal content area closes the modal
- **Grid Layout Preservation**: Modal system maintains grid stability and responsive behavior across all screen sizes without affecting the underlying Projects grid layout

### Project Content Details
- **The Residency Multiplayer Games**:
  - Role: Lead Unreal Engine Developer
  - Description: "I led the technical direction and gameplay development for The Residency's interactive multiplayer games, built to connect football stars with fans in real time. The projects supported 1,000+ concurrent players with smooth, reliable online performance. My work covered system design, Unreal gameplay development, multiplayer optimization, rapid prototyping, and bug fixing to ensure stability at scale. We had no dedicated game designers, so our team handled all gameplay and feature design internally. These games delivered a unique and engaging way for football stars to interact with their fans."
  - Embedded Video: https://youtu.be/oyRhhySzPrY

- **AAA FPS Projects – Crytek**:
  - Role: Technical Design / Gameplay Prototyping
  - Description: "Contributed to gameplay prototyping and iteration across multiple FPS projects, validating core mechanics, player interactions, and systemic behavior. Developed and tested gameplay features and interactions to assess performance and overall technical feasibility within CryEngine. Built gameplay sequences and scripted events using internal tools, focusing on readable action and smooth gameplay flow. Supported the creation of promotional gameplay captures for Hunt: Showdown trailers, in collaboration with the cinematic and production teams."
  - Embedded Video: https://www.youtube.com/watch?v=16vBsmpcxh4

- **Virtual Reality Trainings**:
  - Role: Unreal Engine Developer
  - Description: "Developed multiplayer VR training applications in Unreal Engine using C++ and Blueprints, delivering stable, high-performance solutions for enterprise clients. Created feature prototypes and reusable Blueprint systems to speed up iteration and support designers and non-programmers. Collaborated with cross-functional teams to refine interactions, user flows, and training logic. Delivered VR experiences for clients including Zeiss and Cytiva, balancing technical constraints with intuitive UX and reliable multiplayer functionality."
  - Embedded Video: https://www.youtube.com/watch?v=uG__1gSkI3Y

- **Assassin's Creed Mirage**:
  - Role: Technical Designer (Cinematics)
  - Description: "Built and maintained scripting systems for assembling in-game cinematic sequences, improving iteration speed for mission and narrative teams. Integrated gameplay and cinematic logic within the Anvil engine to ensure events, character behaviors, and transitions were stable and production-ready. Worked with level and narrative designers to script interactive moments and refine timing for story-driven gameplay. Documented workflows and provided technical support to improve pipeline efficiency and cross-team communication."
  - Embedded Video: https://www.youtube.com/watch?v=x55lAlFtXmw

- **Assassin's Creed Dawn of Ragnarök**:
  - Role: Technical Designer (Cinematics)
  - Description: "Developed and maintained cinematic scripting systems for Ubisoft's most ambitious AC expansion, focusing on stable, scalable narrative implementation in the Anvil engine. Created logic for event sequencing, camera behavior, character states, and gameplay-to-cinematic transitions. Collaborated with mission, animation, and narrative teams to debug issues, refine pacing, and support interactive story moments. Improved tools, documented workflows, and provided technical support to streamline the cinematic pipeline."
  - Embedded Video: https://www.youtube.com/watch?v=1wiclO4a60A

- **Norseguy**:
  - Role: Lead Developer
  - Description: "Designed and implemented core RPG systems—including dialogue, quests, progression, and inventory—covering both gameplay logic and data structures. Built and refined gameplay features directly in Unity, focusing on smooth iteration, narrative integration, and system reliability throughout development. Developed the entire prototype independently, delivering a polished, narrative-driven RPG experience that demonstrated cohesive systems design, player progression, and engaging core gameplay."
  - Embedded Video: https://www.youtube.com/watch?v=6iMCoMX6gkA

### About Section
- Display professional information including:
  - Name and professional title
  - Professional summary: "I'm a Technical Designer and Unreal Engine Developer with 6 years of professional experience across AAA, multiplayer, VR, and mobile projects, including work on globally recognized game franchises. I specialize in building gameplay systems, combat mechanics, and scalable technical solutions in Unreal Engine (Blueprints & C++), bridging game design and engineering with a strong focus on performance, stability, and player experience. With a hands-on, problem-solving approach, I'm comfortable moving from rapid prototyping to full production, translating creative vision into robust, production-ready systems that teams can confidently build upon."
  - Key skills and expertise areas
- Include profile photo display using Screenshot 2025-09-08 115559.png
- Profile photo maintains current size
- Minimal dark theme layout with clean typography

### Resume Section
- Display detailed professional experience in this specific order:
  1. **The Residency — Remote**
     - **Lead Unreal Engine Developer (Systems, Features, UI)**
     - *October 2023 – Present*
     - Built core C++ and Blueprint multiplayer systems, gameplay features, and UI for large-scale online games supporting thousands of concurrent players. Enhanced network replication efficiency for 1,000+ users across multiple platforms. Accelerated onboarding of technical designers on Improbable's MSquared engine by establishing development standards and best practices.

  2. **Realworldone — Remote**
     - **Unreal Developer (Features)**
     - *October 2022 – October 2023*
     - Designed and shipped multiplayer VR training applications in Unreal Engine using C++ and Blueprints, maintaining performance targets. Built reusable Blueprint systems and prototypes, accelerating iteration and enabling designers to implement content independently. Delivered 5 VR experiences for enterprise clients (Zeiss and Cytiva), balancing UX, interactivity, and performance.

  3. **Crytek — Remote**
     - **Technical Designer (Cinematics)**
     - *October 2021 – October 2022*
     - Prototyped and validated gameplay features, ensuring technical feasibility and alignment with narrative goals. Collaborated with design and art teams to block out early gameplay sequences and implement scripted events. Performed competitive analysis of FPS design trends to inform feature scope, player expectations, and technical direction.

  4. **Ubisoft — Hybrid**
     - **Technical Designer (Cinematics)**
     - *November 2019 – October 2021*
     - Built and maintained scripting tools that accelerated designer workflows. Supported gameplay systems integration in the Anvil engine, ensuring production readiness across platforms. Documented workflows and provided technical support to designers, improving iteration speed and collaboration.

- Education section displays:
  - Degree: Computer Science and Game Development Bachelor
  - Years: 2016–2020
  - Description: Focus on programming and specialization in game development engines
- Certifications section listing:
  1. *Unreal Engine Authorized Instructor Bootcamp* – Epic Games/Incas
  2. *Professional Game Development in C++* – Tom Looman
  3. *3D Environment Art* – CG Master Academy
- Clean minimal layout maintaining website aesthetics
- Maintain existing styling, spacing, and animations in the resume layout

### Contact Information Display
- **Single horizontal row layout** displaying all contact information:
  - Email: angelov.a.boyan@gmail.com
  - Location: Valencia, Spain
  - LinkedIn profile link
- All contact details arranged in a tidy horizontal row with proper spacing and alignment
- Maintains dark-modern theme styling and responsive design
- Social links exclude Twitter and GitHub

### Design Requirements
- Minimal dark-modern theme with refined visual polish
- Deep charcoal background with light gray text
- Light blue accent color for highlights and interactive elements
- Bold sans-serif typography with strong weight for headings and lighter weight for subtitles
- Smooth transitions and micro-animations throughout
- Subtle hover effects on buttons, project cards, and navigation elements
- Refined contrast using layered gradients and subtle lighting effects within the dark palette
- Clean visual hierarchy with balanced spacing
- Professional minimalist aesthetic with enhanced visual appeal
- Responsive design optimized for desktop and mobile devices
- Seamless blending between header and hero sections with proper spacing and alignment
- **2x3 Grid Layout Aesthetics**: Projects section grid maintains dark-modern minimal aesthetic with proper spacing, shadows, and hover transitions in a 2-row by 3-column layout
- **Full-Page Modal Aesthetics**: Modal overlay maintains dark-modern theme consistency with proper contrast, spacing, and visual hierarchy using dark translucent background, covering approximately 90-95% of the screen width and height with proportional scaling for expansive cinematic presentation
- **Enhanced Video Text Contrast**: Overlay text on videos features improved readability through subtle dim or gradient overlays behind text or soft shadow effects for better visibility
- **3D Portfolio Button Design**: Button maintains compact, sleek appearance with consistent typography, subtle glow hover effect using light blue accent color, and smooth transitions that align with the overall dark-modern aesthetic

### Animation and Interaction Details
- Smooth transitions on all interactive elements
- Subtle hover animations for buttons and cards
- Micro-animations that enhance user experience without distraction
- **Refined Project Grid Animations**: Gentle scaling and content fade-in animations using ease-out timing (~400ms duration) that matches the site's dark-modern visual language
- **Optimized Project Scaling Animation**: Smooth scaling animation on project tiles during hover with CSS transforms and ease-out timing that maintains grid stability and prevents layout disruption
- **Simplified Hover Content Animation**: Coordinated fade-in animation for project name, role, and "Click to Learn More" icon using CSS ease-out timing rather than instant appearance, with proper timing alignment for natural user experience
- **Stable Grid Layout Animation**: Optimized CSS transforms and positioning that maintain neighboring card stability during hover expansion, preventing jarring reflow effects
- **Full-Page Modal Transition Animations**: Smooth scale-in and scale-out animations for modal overlay and content using CSS transitions consistent with the site's dark-modern theme, maintaining cinematic and modern feel with smooth animations at the full-page scale (90-95% screen coverage)
- **Full-Page Modal Background Animation**: Dark translucent background overlay appears and disappears with smooth opacity transitions at the full-page modal scale
- **Scroll Position Maintenance**: Modal system preserves user's exact scroll position when opening and closing modals to prevent page jumping or position reset
- **Enhanced Video Autoplay Animation**: Smooth transition animations when embedded videos begin autoplay in modals, maintaining cinematic presentation
- Refined typography animations for headings and key content
- **Elegant Name Animation**: Smooth fade-in animation with subtle upward movement using CSS transforms and opacity transitions, introducing "BOYAN ANGELOV" elegantly with gradual easing curve (ease-out) to eliminate abrupt transitions and ensure natural completion flow
- Name animation triggers once on page load, maintains timing consistency with hero aesthetic, and retains full opacity at completion with solid color fill
- Animated subtitle text transition cycling between phrases with timing alignment to hero background motion
- Animated mouse icon scroll indicator positioned at the very bottom of the hero section, centered horizontally with smooth glowing or pulsing animation highlighting the scroll wheel, looping subtly
- Maintain clarity and simplicity while adding visual polish
- **Hero Scroll Cover Animation**: Parallax-like scroll effect where hero section smoothly transitions out as lower sections scroll over it, with gradual fading/dimming of hero content as other sections move upward, maintaining performance across all devices
- **3D Portfolio Button Hover Animation**: Subtle glow effect on hover using light blue accent color with smooth CSS transitions that match the site's overall animation timing and style

### Content Management
- Static text content structure
- All content embedded directly in the application
- Application content in English
- The Residency Multiplayer Games project uses residency.png as its associated image
- AAA FPS Projects – Crytek project uses external image: https://www.dropbox.com/scl/fi/y5ptzzfksf2ngtum05bq9/crytek-photo.jpg?rlkey=7b5ebacb0gocdklu7stdan60p&st=5uvjoiu6&dl=0
- Virtual Reality Trainings project uses real world one.png as its thumbnail image
- Assassin's Creed Mirage project uses ac mirage.png as its thumbnail image
- Assassin's Creed Dawn of Ragnarok project uses external image: https://www.dropbox.com/scl/fi/6x3fargb8upq60i5e9wd2/dawn-of-ragnarok-3.jpg?rlkey=iby4impqwm0c3nt3zjky2e08n&st=ser88v59&dl=0
- Norseguy project uses external image: https://www.dropbox.com/scl/fi/v7etyznjv20qoten4kf2a/norseguy3.png?rlkey=846yncrdsr2s1lkmiuvj50nly&st=havfvs9n&dl=0

## Backend Requirements

### File Storage and Management
- **Asset Storage**: Store and serve all project assets including user-uploaded and generated files
- File serving for all project thumbnails and media assets:
  - residency.png for The Residency Multiplayer Games project
  - real world one.png for Virtual Reality Trainings project
  - ac mirage.png for Assassin's Creed Mirage project
  - Screenshot 2025-09-08 115559.png for About section profile photo
- **Large asset support** for high-resolution images and video files
- **Efficient storage allocation** that scales with portfolio content needs
- **Media file retention** ensuring no automatic deletion of uploaded assets currently in use

### API Endpoints
- File serving endpoints for all project thumbnails, media assets, and profile photo
- **Enhanced storage management endpoints** for handling large file uploads
- **Storage capacity monitoring** endpoints for tracking usage and availability
- **Asset management endpoints** for organizing and serving media files efficiently

### Deployment Configuration
- **Public deployment** configuration for Internet Computer network
- **Custom domain setup** for boyangamedev domain
- **Production-ready** deployment with proper asset optimization and caching
- **Enhanced storage configuration** to support increased media file capacity

## Technical Notes
- Text content is static and embedded in the frontend
- **All media assets served from backend storage** with comprehensive metadata tracking
- **YouTube Video Background Implementation**: Hero section uses embedded YouTube iframe with https://youtu.be/SQh2cBr4MgA configured for autoplay, loop, muted playback, and disabled controls/overlays for seamless background video experience
- **Responsive Video Background**: YouTube video background maintains proper aspect ratio and full coverage across all screen sizes using CSS object-fit and responsive iframe techniques
- **Video Performance Optimization**: YouTube embed configured with appropriate parameters for optimal loading and playback performance across different devices and connection speeds
- **Dark Overlay Implementation**: Semi-transparent dark overlay positioned over video background using CSS to ensure text readability while preserving video visibility
- **Enhanced Project Modal Video Embedding**: YouTube videos embedded within project modals using responsive iframe elements with autoplay enabled, muted by default, and YouTube overlay controls, titles, and recommendations disabled for clean cinematic presentation
- **Video Autoplay in Modals**: Embedded videos in project modals automatically start playing when modal opens, muted by default, with enhanced user experience
- **YouTube Link Button**: Visible button styled to match dark-modern theme positioned in the top-right corner of the modal or near the video that opens the YouTube video in a new tab
- **Responsive Video Embedding**: All embedded videos in modals maintain responsive design and proper aspect ratios across all screen sizes
- **Improved Video Text Overlay**: Enhanced contrast for text displayed over videos through subtle dim or gradient overlays behind text or soft shadow effects for improved readability
- Enhanced CSS animations and transitions for modern visual appeal
- **Full-Page Modal Implementation**: Frontend-based modal system using CSS transforms and JavaScript state management for smooth overlay appearance and disappearance covering approximately 90-95% of the screen width and height with proportional scaling
- **Responsive Full-Page Modal Scaling**: Modal maintains proportional scaling covering approximately 90-95% of the screen width and height while ensuring responsive margins and centering vertically and horizontally on all devices, scaling down appropriately on smaller screens
- **Mobile Modal Layout Fixes**: On mobile devices (375px, 414px, 768px breakpoints), modal video overlay scales correctly to fit viewport width with proper aspect ratio maintenance, blurred background effects render with consistent opacity and positioning without distortion, text elements (project title, description, role) remain centered and legible above the blurred overlay with proper font sizing and line height, and all transitions and animations remain smooth without overflow or vertical shifting out of frame
- **Content Layout Adaptation**: All internal modal content including project videos, descriptions, and buttons adapt gracefully to the full-page layout with proper spacing, alignment, and responsive behavior
- **Scroll Position Management**: JavaScript-based scroll position preservation that maintains user's exact location when opening and closing modals
- The Residency Multiplayer Games project displays residency.png in both the main projects showcase and its modal details
- AAA FPS Projects – Crytek project displays external image: https://www.dropbox.com/scl/fi/y5ptzzfksf2ngtum05bq9/crytek-photo.jpg?rlkey=7b5ebacb0gocdklu7stdan60p&st=5uvjoiu6&dl=0 as its thumbnail in the projects showcase
- Virtual Reality Trainings project displays real world one.png as its thumbnail in the projects showcase
- Assassin's Creed Mirage project displays ac mirage.png as its thumbnail in the projects showcase
- Assassin's Creed Dawn of Ragnarok project displays external image: https://www.dropbox.com/scl/fi/6x3fargb8upq60i5e9wd2/dawn-of-ragnarok-3.jpg?rlkey=iby4impqwm0c3nt3zjky2e08n&st=ser88v59&dl=0 as its thumbnail in the projects showcase
- Norseguy project displays external image: https://www.dropbox.com/scl/fi/v7etyznjv20qoten4kf2a/norseguy3.png?rlkey=846yncrdsr2s1lkmiuvj50nly&st=havfvs9n&dl=0 as its thumbnail in the projects showcase
- **2x3 Grid Thumbnails**: All project thumbnails displayed at consistent, uniform sizes for visual cohesion within the responsive 2-row by 3-column grid layout
- About section profile photo maintains current size while using Screenshot 2025-09-08 115559.png
- **Hidden Skills Section**: Relevant Skills section component code is preserved but hidden from the main layout, positioned below hero section when enabled
- Animated subtitle cycling with smooth transitions and timing alignment
- **Elegant name animation** implemented with CSS transforms and opacity transitions for smooth fade-in with subtle upward movement and proper easing-out curves to ensure natural completion flow without any pop effects
- Animated mouse icon scroll indicator positioned at the very bottom of the hero section, centered horizontally below the animated subtitle and above the section transition, maintaining responsive positioning across all screen sizes
- **Hero scroll cover effect** implemented with CSS transforms and opacity transitions for smooth performance, ensuring seamless layered scrolling experience across desktop and mobile devices
- **Refined 2x3 Grid Hover Interactions**: CSS-based hover effects for project grid with gentle scaling and content fade-in using ease-out timing (~400ms), displaying only project name, role, and "Click to Learn More" icon with optimized layout stability to prevent grid reflow disruption in the 2-row by 3-column layout
- **Smooth Project Hover**: CSS transform-based scaling and simplified content reveal animations with proper ease-out curves that maintain grid stability and provide natural user interaction feedback
- **Full-Page Modal Project Details Implementation**: Frontend-based modal overlay system using CSS transforms, opacity transitions, and JavaScript state management for smooth modal appearance covering approximately 90-95% of the screen width and height, content display, and disappearance with proportional scaling and responsive content adaptation
- **Grid Layout Preservation**: CSS-based layout system that maintains stable positioning during modal operations, preventing jarring layout shifts while providing smooth transition animations and preserving user scroll position
- **Clean Video Presentation**: YouTube embeds configured to disable default overlays, controls, titles, and recommendations for cinematic viewing experience
- **Enhanced Autoplay Implementation**: All project modal videos automatically begin playback when opened, muted by default, with smooth transition animations
- **Contact Section Horizontal Layout**: CSS flexbox or grid-based layout for single horizontal row display of all contact information with proper spacing and responsive behavior
- **3D Portfolio Button Implementation**: Frontend button component with click handler that opens https://www.artstation.com/boyanangelov in a new browser tab using target="_blank", styled with compact design, consistent typography, and subtle glow hover effect using light blue accent color
- **Public deployment** with custom domain configuration for boyangamedev on Internet Computer network
- **Enhanced storage backend** configured to handle increased media file capacity with comprehensive asset tracking
- **External Image Support**: Frontend implementation to display external images from Dropbox URLs for Dawn of Ragnarok, Crytek and Norseguy projects with proper responsive sizing and consistent thumbnail alignment within the 2x3 project grid
