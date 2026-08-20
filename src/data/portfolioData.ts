import { Project, SkillItem, JourneyMilestone, Certification, ExperimentItem, SocialLink } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Prathamesh Lole',
  firstName: 'Prathamesh',
  lastName: 'Lole',
  role: 'Software Developer & Computer Science Student',
  degree: 'B.Tech in Computer Science & Engineering',
  location: 'Mumbai, India',
  timezone: 'Asia/Kolkata (IST, UTC+5:30)',
  email: 'loleprathamesh488@gmail.com',
  github: 'https://github.com/Prathamesh-lole',
  linkedin: 'https://linkedin.com/in/prathamesh-lole',
  avatarUrl: '/prathamesh-photo.png',
  currentFocus: 'Full-stack engineering, microservices architecture, and practical AI integrations.',
  bioShort: "Currently building things, breaking things, and obsessively understanding why they broke.",
  bioLong: [
    "I'm a B.Tech Computer Science student and software engineer based in Mumbai. I thrive in the intersection between robust backend systems, intuitive frontends, and applied machine learning.",
    "Rather than treating code as abstract syntax, I treat every project as an editorial blueprint—crafted with precision, resilient under edge cases, and built to solve tangible problems.",
    "When I'm not tracing concurrency race conditions or refining UI micro-interactions, I'm analyzing open-source architectures, sketching system diagrams, and experimenting with computer vision."
  ],
  handwrittenQuotes: [
    "this is where the fun begins →",
    "yes, I actually built this",
    "scroll around — lots of hidden details",
    "a little messy, intentionally.",
    "built with too much chai & coffee",
    "this one took 4 iterations to get right",
    "yes, it's responsive and fully typed",
    "future me will optimize this further",
    "don't judge the git commit messages at 3 AM"
  ]
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    handle: '@prathameshlole',
    url: 'https://github.com/Prathamesh-lole',
    icon: 'Github',
    handwrittenNote: 'where side-projects live'
  },
  {
    platform: 'LinkedIn',
    handle: 'in/prathamesh-lole',
    url: 'https://linkedin.com/in/prathamesh-lole',
    icon: 'Linkedin',
    handwrittenNote: 'formal updates & connections'
  },
  {
    platform: 'Email',
    handle: 'loleprathamesh488@gmail.com',
    url: 'mailto:loleprathamesh488@gmail.com',
    icon: 'Mail',
    handwrittenNote: 'fastest response time'
  }
];

export const PROJECTS: Project[] = [
  
  {
    id: 'attendance-management-system',
    number: '01',
    title: 'Attendance Management System',
    subtitle: 'AI-Powered Facial Recognition Attendance Platform',
    category: 'AI & Computer Vision',
    year: '2024',
    status: 'Completed',

    summary:
      'An automated attendance management system that uses facial recognition and computer vision to identify users in real time and record attendance securely.',

    description:
      'Designed and developed an intelligent attendance platform that replaces manual attendance processes with automated facial verification. The system captures faces through a camera, detects and recognizes registered individuals, and records attendance with accurate timestamps. A web-based interface provides an accessible way to manage attendance records and user data.',

    technologies: [
      'Python',
      'Flask',
      'OpenCV',
      'Dlib',
      'Face Recognition',
      'MongoDB',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap'
    ],

    architecture: [
      'Face Detection & Recognition: OpenCV and Dlib-based facial processing identifies registered users from live camera input.',
      'Recognition Pipeline: Captured facial features are compared against stored encodings to verify user identity.',
      'Backend: Flask handles authentication, attendance processing, API requests, and application logic.',
      'Database: MongoDB stores user information, facial recognition data, and attendance records.',
      'Web Interface: Responsive HTML, CSS, JavaScript, and Bootstrap interface for managing users and attendance.'
    ],

    challenges: [
      'Achieving reliable facial recognition under different lighting conditions and camera angles.',
      'Reducing duplicate attendance entries when the same person remains in front of the camera.',
      'Managing facial encoding and recognition efficiently while maintaining acceptable response times.',
      'Maintaining accurate and persistent attendance records in the database.'
    ],

    keyFeatures: [
      'Real-time facial detection and recognition',
      'Automated attendance recording',
      'Secure user registration and face encoding',
      'MongoDB-based attendance history',
      'Web-based attendance management dashboard',
      'Reduced dependency on manual attendance processes'
    ],

    githubUrl: 'https://github.com/Prathamesh-lole',
    liveUrl: 'https://github.com/prathameshlole/attendance-management-system',

    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',

    annotation: 'attendance without roll calls',
    accentColor: '#2563eb'
  },

  {
    id: 'ai-caption-generator',
    number: '02',
    title: 'AI Caption Generator',
    subtitle: 'Deep Learning Image-to-Text Generation System',
    category: 'AI & Machine Learning',
    year: '2025',
    status: 'Completed',

    summary:
      'A deep learning application that automatically generates natural-language captions for images using CNN-based visual feature extraction and LSTM sequence generation.',

    description:
      'Built an image captioning system capable of understanding visual content and converting it into meaningful natural-language descriptions. The system uses a pre-trained DenseNet201 convolutional neural network to extract high-level visual features and an LSTM-based sequence model to generate captions word by word. The model was trained and evaluated using the Flickr8k dataset.',

    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'CNN',
      'LSTM',
      'DenseNet201',
      'NLP',
      'Flickr8k',
      'NumPy',
      'Pandas'
    ],

    architecture: [
      'Image Feature Extraction: DenseNet201 extracts meaningful visual representations from input images.',
      'Text Processing: Captions are tokenized and converted into numerical sequences for model training.',
      'Sequence Generation: An LSTM network learns relationships between image features and natural-language sequences.',
      'Encoder-Decoder Pipeline: CNN-generated image embeddings are combined with textual features to predict the next word.',
      'Dataset: Flickr8k provides thousands of images with multiple human-generated captions for supervised training.'
    ],

    challenges: [
      'Converting high-dimensional image features into representations suitable for sequence generation.',
      'Handling variable-length captions and preparing them for efficient model training.',
      'Improving caption quality while preventing repetitive or incomplete sentence generation.',
      'Balancing model complexity and training performance with limited computational resources.'
    ],

    keyFeatures: [
      'Automatic image caption generation',
      'CNN-based visual feature extraction',
      'LSTM-based natural-language generation',
      'DenseNet201 transfer learning',
      'Flickr8k dataset integration',
      'Image-to-text AI pipeline'
    ],

    githubUrl: 'https://github.com/Prathamesh-lole',
    liveUrl: 'https://github.com/prathameshlole/ai-caption-generator',

    image:
      'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1000&q=80',

    annotation: 'teaching machines to describe what they see',
    accentColor: '#7c3aed'
  },

  {
    id: 'realtime-code-collaboration',
    number: '03',
    title: 'Real-Time Code Collaboration Tool',
    subtitle: 'Multiplayer WebIDE with Real-Time Synchronization',
    category: 'Distributed / Real-Time',
    year: '2025',
    status: 'Featured',

    summary:
      'A real-time collaborative coding platform that allows multiple developers to edit code simultaneously, synchronize changes instantly, and communicate through integrated peer-to-peer video and audio.',

    description:
      'Built as a collaborative development environment for pair programming and remote technical collaboration. Multiple users can join a shared coding session, edit the same codebase simultaneously, observe live updates and cursor activity, and communicate through WebRTC-based audio and video. Socket.io manages real-time room communication and synchronization between connected clients.',

    technologies: [
      'React',
      'JavaScript',
      'Node.js',
      'Socket.io',
      'WebRTC',
      'Monaco Editor',
      'HTML',
      'CSS'
    ],

    architecture: [
      'Real-Time Communication: Socket.io establishes persistent connections between clients and the Node.js server for instant event synchronization.',
      'Collaborative Editor: Monaco Editor provides a professional IDE-like editing experience with syntax highlighting and developer tooling.',
      'Room Management: Users can create or join collaborative rooms where code changes and session events are synchronized.',
      'Media Layer: WebRTC enables direct peer-to-peer audio and video communication between participants.',
      'Synchronization Layer: Editor changes, cursor positions, and collaboration events are propagated to connected participants in real time.'
    ],

    challenges: [
      'Keeping multiple editor instances synchronized when several users modify code simultaneously.',
      'Handling cursor and selection updates without creating a laggy or disruptive editing experience.',
      'Managing WebRTC peer connections and reconnections during changing network conditions.',
      'Designing reliable Socket.io room and event handling for multiple simultaneous users.'
    ],

    keyFeatures: [
      'Real-time collaborative code editing',
      'Multi-user synchronized sessions',
      'Live cursor and editing activity',
      'Monaco Editor integration',
      'WebRTC peer-to-peer video and audio',
      'Socket.io real-time communication',
      'Collaborative coding rooms'
    ],

    githubUrl:
      'https://github.com/Prathamesh-lole/Code-Collab-Tool',

    liveUrl:
      'https://github.com/prathameshlole/realtime-code-collab',

    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',

    annotation: 'multiple minds, one codebase',
    accentColor: '#059669'
  },

  {
    id: 'society-maintenance-automation',
    number: '04',
    title: 'Society Management & Complaints Resolution System',
    subtitle: 'Full-Stack Residential Management & Automated Complaint Platform',
    category: 'Full Stack',
    year: '2025',
    status: 'Completed',

    summary:
      'A full-stack residential management platform designed to streamline society operations, maintenance management, resident complaints, vendor coordination, and administrative workflows.',

    description:
      'Engineered a centralized residential management system that connects administrators, residents, and vendors through dedicated workflows and role-based dashboards. The platform manages society operations, resident requests, complaints, maintenance activities, and vendor interactions while providing secure REST APIs and structured database management through Spring Boot and MySQL.',

    technologies: [
      'React.js',
      'Java',
      'Spring Boot',
      'Spring MVC',
      'REST API',
      'MySQL',
      'HTML',
      'CSS',
      'JavaScript',
      'Git'
    ],

    architecture: [
      'Frontend: React.js provides responsive dashboards and role-specific interfaces for administrators, residents, and vendors.',
      'Backend: Spring Boot and Spring MVC implement business logic, authentication, REST APIs, and application workflows.',
      'Database: MySQL stores residents, complaints, maintenance records, vendors, and society-related operational data.',
      'Role-Based Architecture: Separate workflows and permissions are provided for administrators, residents, and vendors.',
      'Complaint Management: Resident complaints are recorded, tracked, assigned, and updated through a centralized resolution workflow.',
      'Activity Tracking: Recent system activities and operational updates provide administrators with visibility into ongoing society operations.'
    ],

    challenges: [
      'Designing a scalable role-based architecture supporting administrators, residents, and vendors.',
      'Maintaining consistency between frontend workflows, REST APIs, and relational database operations.',
      'Creating an efficient complaint lifecycle from submission through assignment, tracking, and resolution.',
      'Managing complex relationships between residents, complaints, maintenance activities, and vendors.'
    ],

    keyFeatures: [
      'Role-based Admin, Resident, and Vendor dashboards',
      'Resident complaint registration and tracking',
      'Complaint assignment and resolution workflow',
      'Society maintenance management',
      'Vendor management and coordination',
      'Secure REST API architecture',
      'MySQL-based centralized data management',
      'Recent activity and operational tracking',
      'CRUD-based society administration'
    ],

    githubUrl: 'https://github.com/Prathamesh-lole/Society-management-system',
    liveUrl: 'https://github.com/prathameshlole/society-maintenance-system',

    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',

    annotation: 'turning society chaos into structured workflows',
    accentColor: '#ea580c'
  },
  {
  id: 'projecthub',
  number: '05',
  title: 'ProjectHub',
  subtitle: 'Collaborative Project Management & Team Productivity Platform',
  category: 'Full Stack',
  year: '2026',
  status: 'Completed',
  summary: 'A full-stack project management platform designed to help teams organize projects, manage tasks, collaborate through comments, handle team invitations, and track project activity from a centralized workspace.',
  description: 'ProjectHub is a collaborative project management system built to streamline team workflows and project coordination. It provides secure authentication, project creation and management, role-based project membership, task assignment and tracking, project and task-specific discussions, invitation management, and notification infrastructure. The platform is designed around a RESTful backend architecture with a modern Next.js frontend and PostgreSQL database.',
  technologies: [
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'Prisma ORM',
    'JWT',
    'Tailwind CSS',
    'REST API'
  ],
  architecture: [
    'Frontend: Next.js application using React and TypeScript with dynamic project and task interfaces',
    'Backend Core: Node.js and Express.js REST API organized into routes, controllers, services, and middleware layers',
    'Database: PostgreSQL relational database managed through Prisma ORM with structured project, member, task, comment, invitation, and notification models',
    'Security: JWT-based authentication with protected API routes and project-level access control for owners and members',
    'Collaboration: Project membership and invitation system with role-based permissions for ADMIN, MEMBER, and VIEWER users',
    'Comments: Project-level and task-specific commenting with author-based edit and delete authorization',
    'Notifications: Notification infrastructure for project membership, task activity, comments, and invitation events'
  ],
  challenges: [
    'Designing a relational data model connecting users, projects, memberships, tasks, comments, invitations, and notifications while maintaining referential integrity.',
    'Implementing project-level authorization so users can access projects only when they are owners or authorized members.',
    'Ensuring comment editing and deletion are restricted to the original comment author rather than allowing other project members to modify them.',
    'Handling authentication consistently between the Next.js frontend and Express.js backend using JWT tokens and protected API requests.',
    'Building separate project-level and task-specific comment flows while keeping the frontend state synchronized with the backend.',
    'Managing role-based project membership and invitation workflows without compromising access control.'
  ],
  keyFeatures: [
    'JWT-based user authentication and protected API endpoints',
    'Project creation, editing, status management, and project details dashboard',
    'Role-based project membership with ADMIN, MEMBER, and VIEWER permissions',
    'Project invitation system with invitation status and expiration handling',
    'Task creation, assignment, priority, status, and due-date management',
    'Project-level comments and task-specific comments',
    'Author-only comment editing and deletion',
    'RESTful backend architecture with controllers, services, routes, and middleware',
    'PostgreSQL database with Prisma ORM and relational data modeling',
    'Notification system for project, task, comment, and invitation activities'
  ],
  githubUrl: 'https://github.com/Prathamesh-lole',
  liveUrl: 'https://github.com/prathameshlole/projecthub',
  image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80',
  annotation: 'from scattered team workflows to one centralized project workspace',
  accentColor: '#4F46E5'
}
];

export const SKILLS: SkillItem[] = [
  // Languages
  { name: 'Java', category: 'Languages', wittyNote: 'where robust backend logic and strict types live', experienceLevel: 'Core / Daily', highlight: true },
  { name: 'Python', category: 'Languages', wittyNote: 'my favorite playground for rapid prototyping & AI experiments', experienceLevel: 'Core / Daily', highlight: true },
  { name: 'TypeScript', category: 'Languages', wittyNote: 'because undefined is not a function in production', experienceLevel: 'Core / Daily', highlight: true },
  { name: 'JavaScript (ES6+)', category: 'Languages', wittyNote: 'the lingua franca of modern web interactions', experienceLevel: 'Core / Daily' },
  { name: 'C / C++', category: 'Languages', wittyNote: 'pointers, memory layouts, and algorithmic foundation', experienceLevel: 'Proficient' },
  { name: 'SQL', category: 'Languages', wittyNote: 'crafting relational joins and indexing plans with care', experienceLevel: 'Core / Daily' },

  // Backend
  { name: 'Spring Boot', category: 'Backend', wittyNote: 'enterprise-grade dependency injection, REST APIs & security', experienceLevel: 'Core / Daily', highlight: true },
  { name: 'Node.js / Express', category: 'Backend', wittyNote: 'event-driven, fast I/O asynchronous micro-services', experienceLevel: 'Core / Daily', highlight: true },
  { name: 'RESTful API Design', category: 'Backend', wittyNote: 'clean resource contracts, idempotency & status codes', experienceLevel: 'Core / Daily' },
  { name: 'WebSockets & Socket.io', category: 'Backend', wittyNote: 'instant bi-directional pipes for real-time collaboration', experienceLevel: 'Advanced' },
  { name: 'Microservices Architecture', category: 'Backend', wittyNote: 'splitting monoliths into decoupled, resilient services', experienceLevel: 'Proficient' },

  // Frontend
  { name: 'React 18 / 19', category: 'Frontend', wittyNote: 'turning state blueprints into fluid human interfaces', experienceLevel: 'Core / Daily', highlight: true },
  { name: 'Tailwind CSS', category: 'Frontend', wittyNote: 'utility-first aesthetic design without writing messy CSS blobs', experienceLevel: 'Core / Daily', highlight: true },
  { name: 'Framer Motion', category: 'Frontend', wittyNote: 'making pixels feel weightful, natural, and alive', experienceLevel: 'Advanced' },
  { name: 'HTML5 / Semantic Web', category: 'Frontend', wittyNote: 'accessible, screen-reader friendly markup hierarchy', experienceLevel: 'Core / Daily' },

  // AI / ML
  { name: 'OpenCV', category: 'AI / ML', wittyNote: 'teaching machines to see matrices of light and pixels', experienceLevel: 'Advanced', highlight: true },
  { name: 'TensorFlow & Keras', category: 'AI / ML', wittyNote: 'training CNNs and LSTMs on multimodal datasets', experienceLevel: 'Proficient' },
  { name: 'Dlib', category: 'AI / ML', wittyNote: 'precision facial landmark points and biometric vectors', experienceLevel: 'Proficient' },
  { name: 'NumPy & Pandas', category: 'AI / ML', wittyNote: 'vectorized matrix math and exploratory data analysis', experienceLevel: 'Core / Daily' },

  // Databases
  { name: 'MySQL', category: 'Databases', wittyNote: 'relational ACID transactions and schema normalization', experienceLevel: 'Core / Daily', highlight: true },
  { name: 'MongoDB', category: 'Databases', wittyNote: 'flexible document trees for evolving schemaless data', experienceLevel: 'Core / Daily' },
  { name: 'PostgreSQL', category: 'Databases', wittyNote: 'rock-solid relational engine with JSONB superpowers', experienceLevel: 'Advanced' },
  { name: 'Redis', category: 'Databases', wittyNote: 'sub-millisecond in-memory caching and session queues', experienceLevel: 'Proficient' },

  // DevOps & Tools
  { name: 'Git & GitHub', category: 'DevOps & Tools', wittyNote: 'atomic commits, branch hygiene, and clean pull requests', experienceLevel: 'Core / Daily', highlight: true },
  { name: 'Docker', category: 'DevOps & Tools', wittyNote: 'it works on my machine... and now in any container', experienceLevel: 'Advanced', highlight: true },
  { name: 'Linux / Bash', category: 'DevOps & Tools', wittyNote: 'terminal terminal terminal, grep, piping and shell scripts', experienceLevel: 'Core / Daily' },
  { name: 'Postman', category: 'DevOps & Tools', wittyNote: 'API contract testing, mocks, and payload validation', experienceLevel: 'Core / Daily' }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    year: '2023',
    title: 'The Beginning & Building the Foundation',
    subtitle: 'Starting my Computer Science journey and learning how to think like a programmer',

    description:
      'Started my B.Tech journey in Computer Science and began exploring programming beyond classroom theory. Built my foundation in C/C++, Object-Oriented Programming, Data Structures, algorithms, databases, and Git. My early experiments with small programs and web applications taught me that good software starts with good problem-solving.',

    quote:
      'Every small program I built made the next problem feel a little less intimidating.',

    handwrittenNote:
      'this is where the curiosity started →',

    badge: 'Foundation',

    tags: [
      'C / C++',
      'OOP',
      'Data Structures',
      'Algorithms',
      'DBMS',
      'Git',
      'Web Development'
    ]
  },

  {
    year: '2024',
    title: 'From Learning to Building',
    subtitle: 'Turning programming concepts into real-world applications',

    description:
      'Moved from learning individual concepts to building complete applications. Explored Java, Spring Boot, React, MySQL, Python, and machine learning while developing projects such as the Cab Booking System, Society Management System, and AI Caption Generator. This was the stage where backend logic, databases, APIs, and frontend interfaces started coming together.',

    quote:
      'Things started making sense when I stopped building examples and started building solutions.',

    handwrittenNote:
      'okay... now things are getting serious →',

    badge: 'Expansion',

    tags: [
      'Java',
      'Spring Boot',
      'React',
      'Python',
      'MySQL',
      'REST APIs',
      'Machine Learning'
    ]
  },

  {
    year: '2025',
    title: 'AI, Real-Time Systems & Bigger Challenges',
    subtitle: 'Exploring systems that can see, learn, communicate and collaborate',

    description:
      'Started pushing beyond conventional CRUD applications into more challenging engineering problems. Built a facial-recognition Attendance Management System using Python, OpenCV and Dlib, developed an AI Caption Generator using CNN and LSTM models, and created a real-time collaborative code editor using React, Node.js, Socket.io and WebRTC. These projects taught me about computer vision, deep learning, real-time communication, synchronization and the challenges of building interactive systems.',

    quote:
      'The more complex the system became, the more I realized that engineering is about handling what happens when things go wrong.',

    handwrittenNote:
      'debugging became a full-time personality trait →',

    badge: 'Exploration',

    tags: [
      'OpenCV',
      'Dlib',
      'TensorFlow',
      'Keras',
      'CNN',
      'LSTM',
      'Node.js',
      'Socket.io',
      'WebRTC'
    ]
  },

  {
    year: '2026',
    title: 'From Projects to Professional Engineering',
    subtitle: 'Applying everything I have learned to real products and industry workflows',

    description:
      'Entered the final phase of my B.Tech journey with a stronger focus on becoming industry-ready. Worked on real-world web development and CMS tasks, continued building full-stack applications, explored AWS, Docker, GitLab, Next.js and modern development workflows, and started shaping my work into a professional portfolio. The focus shifted from simply making applications work to understanding maintainability, deployment, collaboration, usability and production-ready development.',

    quote:
      'Building projects taught me how to code. Building for real users is teaching me how to engineer.',

    handwrittenNote:
      'from college projects → real-world development',

    badge: 'Industry Ready',

    tags: [
      'Full-Stack Development',
      'Next.js',
      'Docker',
      'AWS',
      'GitLab',
      'Spring Boot',
      'React',
      'CMS',
      'Deployment'
    ]
  },

  {
    year: '2026+',
    title: 'The Next Chapter',
    subtitle: 'Becoming a better engineer, one difficult problem at a time',

    description:
      'Now focused on turning my academic knowledge and project experience into meaningful software engineering experience. I am continuing to strengthen system design, backend development, cloud technologies, DevOps and scalable application architecture while looking for opportunities where I can learn from experienced engineers, contribute to real products, and keep building things that matter.',

    quote:
      'I am not finished learning. I have just reached the point where the interesting problems begin.',

    handwrittenNote:
      'the real journey starts here →',

    badge: 'Next Chapter',

    tags: [
      'System Design',
      'Backend Engineering',
      'Cloud',
      'DevOps',
      'Scalable Systems',
      'Software Engineering',
      'Continuous Learning'
    ]
  }
];


export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-java-fullstack-vedant',
    title: 'Master in Full Stack Web Development with Java',
    issuer: 'I.T. Vedant',
    issueDate: '2026',
    credentialId: 'ITV-FSJ-A-Grade',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Frontend Integration', 'Full Stack Architecture'],
    verifyUrl: '/certificates/cce_certificate30186___1787049446.jpg',
    annotation: 'graded A, end-to-end from backend logic to deployed UI',
    badgeColor: '#1D4ED8',
  },
  {
    id: 'cert-sql-deepdive',
    title: 'SQL Deep Dive',
    issuer: 'I.T. Vedant',
    issueDate: '2025',
    credentialId: 'ITV6953f213d6601',
    skills: ['SQL', 'Joins', 'Query Writing', 'Database Fundamentals'],
    verifyUrl: '/certificates/sqldeepdive_275_1787049478__1787049483.jpg',
    annotation: 'sharpened raw query intuition beyond just syntax',
    badgeColor: '#D97706',
  },
  {
    id: 'cert-deep-learning-skillsoft',
    title: 'Deep Learning with Certification',
    issuer: 'Skillsoft',
    issueDate: '2025',
    credentialId: 'SKS-DL-PL-2025',
    skills: ['Neural Networks', 'Deep Learning', 'Model Training', 'AI Fundamentals'],
    verifyUrl: '/certificates/Deep Learning with Certification.pdf',
    annotation: 'the leap from perceptrons to trainable networks',
    badgeColor: '#E11D48',
  },
  {
    id: 'cert-hpgg01-esports-management',
    title: 'HPGG01: The What and How of Esports Management',
    issuer: 'HP (via edX)',
    issueDate: '2025',
    credentialId: '0780aa16c7ec4df199484ebfb90d3fe7',
    skills: ['Esports Operations', 'Event Management', 'Gaming Industry Strategy'],
    verifyUrl: '/certificates/Prathamesh Lole Esports certificate  (1).pdf',
    annotation: 'first look behind the curtain of competitive gaming ops',
    badgeColor: '#7C3AED',
  },
  {
    id: 'cert-hpgg02-game-design',
    title: 'HPGG02: A Complete Guide to Game Design',
    issuer: 'HP (via edX)',
    issueDate: '2025',
    credentialId: 'b9d9477e0f5849179e6c0da4e81d7ed1',
    skills: ['Game Design', 'Level Design', 'Player Experience', 'Game Mechanics'],
    verifyUrl: 'https://courses.edx.org/certificates/b9d9477e0f5849179e6c0da4e81d7ed1',
    annotation: 'thinking in mechanics, loops, and player motivation',
    badgeColor: '#059669',
  },
  {
    id: 'cert-artificial-intelligence-certiport',
    title: 'Artificial Intelligence',
    issuer: 'Certiport (IT Specialist)',
    issueDate: '2025',
    credentialId: 'ITS-47873621',
    skills: ['AI Problem Definition', 'Data Engineering', 'AI Algorithms', 'AI Deployment & Monitoring'],
    verifyUrl: '/certificates/AI.pdf',
    annotation: 'scored 816/1000, from problem framing to production monitoring',
    badgeColor: '#65A30D',
  },
];

