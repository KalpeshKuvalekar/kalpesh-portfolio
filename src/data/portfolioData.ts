import { PortfolioData } from '../types';

import profileImg from '../assets/images/Kalpesh_kuvalekar_image.webp';
import cashewImg from '../assets/images/cashew_store_mockup_1785064448727.jpg';
import kidsAcademyImg from '../assets/images/kids_academy_mockup_1785064460860.jpg';
import bookstoreImg from '../assets/images/bookstore_mockup_1785064475783.jpg';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Kalpesh Bhanudas Kuvalekar',
    firstName: 'Kalpesh',
    title: 'Full-Stack Software Engineer',
    headline: 'Building Robust Full-Stack Applications with Java, React & ASP.NET Core',
    subHeadline: 'Computer Engineering Graduate (8.1 CGPI) specializing in Java Spring Boot, React, and RESTful API architecture. Passionate about clean code, intuitive UI/UX, and high-performance backend systems.',
    email: 'Kalpeshkuvalekar02@gmail.com',
    phone: '+91 9503792865',
    location: 'Mumbai, Maharashtra, India 400612',
    availability: 'Immediate / Open for Full-Time & Internship Roles',
    profileImage: profileImg,
    resumeUrl: '#resume',
    aboutBio: [
      'I am a Computer Engineering graduate from Rajendra Mane College of Engineering & Technology with an 8.1 CGPI. My passion lies in engineering robust full-stack software solutions that bridge scalable backend microservices with sleek, intuitive front-end user experiences.',
      'Throughout my academic journey and professional industry training at Symbiosis Skill Center Pune and Exposys Data Labs, I have mastered the complete Software Development Life Cycle (SDLC) — from designing database schemas in SQL Server and MySQL to implementing backend RESTful APIs in Spring Boot and ASP.NET Core, and delivering responsive UIs in React and Bootstrap.',
      'I thrive in fast-paced environments where I can apply my problem-solving skills, learn emerging technologies rapidly, and collaborate with cross-functional development teams to deliver enterprise-ready software.'
    ],
    strengths: [
      'Full-Stack Web Development (Java & .NET Ecosystems)',
      'REST API Design, CRUD Systems & Data Modeling',
      'Modern Responsive Frontend Engineering (React, HTML/CSS, JavaScript)',
      'Database Administration (SQL Server, MySQL, MongoDB, Oracle)',
      'Object-Oriented Programming (OOP) & Clean Architecture Principles'
    ],
    careerObjective: 'To work in an innovative tech environment that encourages continuous learning and professional growth, where I can leverage my technical expertise in Java, Spring Boot, React, and .NET to engineer impactful software products.'
  },

  heroTitles: [
    'Full-Stack Java Developer',
    'Spring Boot & React Specialist',
    'ASP.NET Core & C# Engineer',
    'Computer Engineering Graduate'
  ],

  socials: [
    {
      platform: 'LinkedIn',
      url: 'https://in.linkedin.com/in/kalpeshkuvalekar-kk02',
      iconName: 'Linkedin'
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/kalpeshkuvalekar',
      iconName: 'Github'
    },
    {
      platform: 'Email',
      url: 'mailto:Kalpeshkuvalekar02@gmail.com',
      iconName: 'Mail'
    },
    {
      platform: 'Phone',
      url: 'tel:+919503792865',
      iconName: 'Phone'
    }
  ],

  stats: [
    {
      label: 'Academic CGPI',
      value: 8.1,
      suffix: ' CGPI',
      description: 'First Class Distinction in Computer Engineering'
    },
    {
      label: 'Full-Stack Projects',
      value: 3,
      suffix: '+',
      description: 'Production-ready web platforms deployed'
    },
    {
      label: 'Internships & Training',
      value: 2,
      suffix: ' Roles',
      description: 'Hands-on industry exposure in Pune & Mumbai'
    },
    {
      label: 'Tech Stack Skills',
      value: 12,
      suffix: '+',
      description: 'Languages, frameworks & databases mastered'
    }
  ],

  skillCategories: [
    {
      id: 'languages',
      name: 'Languages & Core',
      icon: 'Code2',
      skills: [
        { name: 'Java', level: 90, iconName: 'Coffee', description: 'Core Java, OOPs, Multithreading, Collections' },
        { name: 'C#', level: 82, iconName: 'FileCode', description: 'C# .NET, LINQ, Async/Await' },
        { name: 'JavaScript (ES6+)', level: 88, iconName: 'Js', description: 'Async JS, DOM Manipulation, ES2022' },
        { name: 'Python', level: 75, iconName: 'Terminal', description: 'Scripting, Data Structures, OOPs' },
        { name: 'OOPs Concepts', level: 92, iconName: 'Boxes', description: 'Encapsulation, Inheritance, Polymorphism' }
      ]
    },
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: 'Layout',
      skills: [
        { name: 'React', level: 85, iconName: 'Atom', description: 'Hooks, State Management, Router, Virtual DOM' },
        { name: 'HTML5 & CSS3', level: 92, iconName: 'FileHtml', description: 'Flexbox, Grid, Semantic Markup, CSS Animations' },
        { name: 'Bootstrap', level: 88, iconName: 'Palette', description: 'Responsive Layouts, Component Styling' },
        { name: 'Tailwind CSS', level: 86, iconName: 'Sparkles', description: 'Utility-first CSS, Custom Themes, Responsive Design' },
        { name: 'UI/UX Usability', level: 85, iconName: 'Eye', description: 'User-centric layouts, Mobile responsiveness' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend & Frameworks',
      icon: 'Server',
      skills: [
        { name: 'Spring Boot', level: 88, iconName: 'Layers', description: 'REST APIs, Dependency Injection, Spring Data JPA' },
        { name: 'ASP.NET Core MVC', level: 84, iconName: 'Cpu', description: 'MVC Pattern, Razor Views, Controller Logic' },
        { name: 'Entity Framework Core', level: 82, iconName: 'DatabaseZap', description: 'ORM, Migrations, LINQ queries' },
        { name: 'RESTful Web APIs', level: 90, iconName: 'Globe', description: 'API Design, JSON Serialization, HTTP Statuses' }
      ]
    },
    {
      id: 'database',
      name: 'Databases & ORM',
      icon: 'Database',
      skills: [
        { name: 'SQL Server', level: 86, iconName: 'Table', description: 'Stored Procedures, Triggers, Views, Indexing' },
        { name: 'MySQL', level: 88, iconName: 'Server', description: 'Relational Schemas, Complex Joins, Queries' },
        { name: 'MongoDB', level: 78, iconName: 'Leaf', description: 'NoSQL collections, Aggregation pipelines' },
        { name: 'Oracle DB', level: 76, iconName: 'HardDrive', description: 'SQL Queries, Relational Table Management' }
      ]
    },
    {
      id: 'tools',
      name: 'Developer Tools & Systems',
      icon: 'Wrench',
      skills: [
        { name: 'GitHub & Git', level: 88, iconName: 'GitBranch', description: 'Version Control, Branching, Commits, PRs' },
        { name: 'Microsoft Visual Studio', level: 85, iconName: 'Monitor', description: 'C# & .NET Development Environment' },
        { name: 'Eclipse IDE', level: 85, iconName: 'Code', description: 'Java & Spring Boot Workspace' },
        { name: 'MS Office & Tools', level: 90, iconName: 'FileText', description: 'Documentation, Technical Presentation' }
      ]
    }
  ],

  projects: [
    {
      id: 'cashew-store',
      title: 'Cashew Store E-Commerce Platform',
      subtitle: 'Full-Stack E-Commerce & Inventory Management Web Application',
      category: 'ASP.NET Core',
      description: 'Enhanced a full-stack cashew product selling web application with a secure admin management portal, automated pricing, and stock controls.',
      fullDescription: 'Cashew Store is a full-featured web-based e-commerce platform built for high-volume cashew retail. The platform provides seamless product browsing for customers and an executive administrative panel for store managers to control product catalogs, pricing tiers, stock availability, and image assets stored directly via Entity Framework Core into SQL Server.',
      image: cashewImg,
      featured: true,
      role: 'Full-Stack Developer',
      features: [
        'Secure Executive Admin Panel with comprehensive CRUD product controls',
        'Real-time inventory and stock tracking with automated price calculators',
        'Entity Framework Core integration for efficient image and binary data storage',
        'Mobile-friendly responsive UI created using Bootstrap and custom CSS',
        'Robust SQL Server database architecture for customer orders and product catalog'
      ],
      techStack: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'Entity Framework Core', 'Bootstrap', 'HTML5/CSS3'],
      githubUrl: 'https://github.com/kalpeshkuvalekar',
      liveUrl: 'https://cashew-store-demo.vercel.app',
      architectureHighlights: [
        'MVC Architecture for strict separation of UI views, controllers, and data models',
        'Repository Pattern using Entity Framework Core for database abstraction',
        'Role-based access control for public shoppers vs admin store managers'
      ]
    },
    {
      id: 'bright-kids-academy',
      title: 'Bright Kids Academy Learning Platform',
      subtitle: 'Interactive Educational Web Application for Young Learners',
      category: 'Full Stack',
      description: 'An engaging, child-friendly learning portal featuring colorful interactive quizzes, progress tracking, and RESTful Java backend communication.',
      fullDescription: 'Bright Kids Academy is an interactive e-learning platform specifically designed to make early education fun and intuitive for young children. The platform features colorful visual modules, interactive quizzes, step-by-step learning paths, and robust RESTful API integration for recording user scores and progress.',
      image: kidsAcademyImg,
      featured: true,
      role: 'Full-Stack Engineer & UI Specialist',
      features: [
        'Vibrant, child-friendly user interface with intuitive navigation and engaging visuals',
        'Interactive learning activities, quiz modules, and immediate feedback systems',
        'RESTful API integration connecting frontend JavaScript handlers with backend Java logic',
        'Real-time user progress management and session persistence',
        'Fully responsive design ensuring seamless experience across tablets, mobile, and desktops'
      ],
      techStack: ['Java', 'REST APIs', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
      githubUrl: 'https://github.com/kalpeshkuvalekar',
      liveUrl: 'https://bright-kids-academy.vercel.app',
      architectureHighlights: [
        'Asynchronous JavaScript (Fetch API) for smooth quiz rendering without page reloads',
        'Decoupled Java REST architecture for reliable score saving and module tracking',
        'Child-accessible UX design certified for high contrast and large touch targets'
      ]
    },
    {
      id: 'bookstore-management',
      title: 'Book Store Management System',
      subtitle: 'Enterprise Bookstore Operations & Inventory Management Platform',
      category: 'Java / Spring Boot',
      description: 'Comprehensive bookstore management web app powering daily operational workflows, book records, sales data, and automated CRUD actions.',
      fullDescription: 'A streamlined web application built using Java, Spring Boot, and MySQL to digitize bookstore operations. It enables bookstore staff to register new titles, adjust price tags, search inventory by author or genre, record sales transactions, and generate inventory summaries through a clean web interface.',
      image: bookstoreImg,
      featured: true,
      role: 'Java Backend & Frontend Developer',
      features: [
        'Complete CRUD operations for book titles, authors, pricing, and stock levels',
        'Spring Boot backend processing with Spring Data JPA & MySQL storage',
        'Fast inventory filtering, search indexing, and real-time record lookup',
        'Streamlined interface designed to reduce cashier and manager overhead',
        'Secure transactional API handling for inventory updates'
      ],
      techStack: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com/kalpeshkuvalekar',
      liveUrl: 'https://bookstore-system-demo.vercel.app',
      architectureHighlights: [
        'Spring Boot REST architecture with JPA ORM mapping to MySQL',
        'Clean controller-service-repository layered architectural pattern',
        'Optimized SQL queries for fast searching across thousands of catalog items'
      ]
    }
  ],

  experiences: [
    {
      id: 'symbiosis-training',
      title: 'Java Full Stack Developer - Industry Training',
      roleType: 'Training',
      company: 'Symbiosis Skill Center, Pune',
      location: 'Pune, Maharashtra',
      period: 'June 2024 – August 2024',
      description: 'Intensive full-stack Java engineering program focused on modern enterprise architecture, Spring Boot REST services, microservice concepts, and SQL database management.',
      responsibilities: [
        'Architected and deployed a full-stack Java enterprise web platform utilizing Spring Boot, Java, and MySQL.',
        'Engineered responsive user interfaces with HTML5, CSS3, JavaScript, and Bootstrap to enhance user engagement.',
        'Designed and integrated RESTful APIs enabling smooth asynchronous data transfer between frontend modules and backend services.',
        'Optimized MySQL relational database queries and applied JPA ORM mapping for transactional operations.'
      ],
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'JavaScript', 'HTML5/CSS3', 'Bootstrap'],
      achievements: [
        'Successfully completed hands-on capstone project with 100% test coverage.',
        'Earned official Full-Stack Java Certification from Symbiosis Skill Center Pune.'
      ]
    },
    {
      id: 'exposys-internship',
      title: 'Web Developer Intern',
      roleType: 'Internship',
      company: 'Exposys Data Labs',
      location: 'Remote / Mumbai',
      period: 'November 2023 – January 2024',
      description: 'Worked directly on client frontend projects to build responsive, user-friendly layouts and optimize web usability.',
      responsibilities: [
        'Created responsive, cross-browser web pages using HTML, CSS, and modern JavaScript.',
        'Transformed complex UI/UX designs into structured, mobile-first web layouts.',
        'Enforced interactive client-side features, DOM manipulations, and form validation to maximize usability.',
        'Collaborated with senior engineers in code reviews and usability testing sessions.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'UI/UX Design'],
      achievements: [
        'Improved page load performance and responsiveness across mobile devices.',
        'Received positive feedback from mentorship leads for clean HTML/CSS code structure.'
      ]
    },
    {
      id: 'engineering-journey',
      title: 'Hands-on Software Development & Academic Journey',
      roleType: 'Hands-on Practice',
      company: 'Rajendra Mane College of Engineering & Technology',
      location: 'Devrukh, Maharashtra',
      period: '2021 – 2025',
      description: 'Four years of rigorous Computer Engineering coursework combining computer science theory, algorithms, object-oriented software development, and project building.',
      responsibilities: [
        'Mastered core computer science subjects: Data Structures, OOPs, Database Management Systems, Software Engineering, and Operating Systems.',
        'Built 3 major full-stack capstone projects in .NET and Java Spring Boot.',
        'Maintained a high academic standing with an 8.1 CGPI.'
      ],
      technologies: ['C#', '.NET Core', 'Java', 'SQL Server', 'Data Structures', 'OOPs'],
      achievements: [
        'Maintained First Class Distinction (8.1 CGPI) throughout B.E. Computer Engineering.'
      ]
    }
  ],

  education: [
    {
      id: 'be-computer',
      degree: 'Bachelor of Computer Engineering (B.E.)',
      institution: 'Rajendra Mane College of Engineering & Technology',
      location: 'Devrukh (Ambav), Maharashtra',
      period: '2021 – 2025',
      result: '8.1 CGPI',
      scoreType: 'CGPI',
      highlights: [
        'Specialized in Software Engineering, Web Technologies, Database Systems & Java Programming.',
        'Graduated with First Class Distinction (8.1 CGPI).',
        'Active member of the Computer Engineering Student Association.'
      ]
    },
    {
      id: 'hsc',
      degree: 'Higher Secondary Certificate (HSC Class XII)',
      institution: 'Navjeevan Junior College',
      location: 'Rajapur, Maharashtra',
      period: '2021',
      result: '72.67 %',
      scoreType: 'Percentage',
      highlights: [
        'Stream: Science (Physics, Chemistry, Mathematics & Information Technology)',
        'Built strong foundation in analytical problem solving and mathematics.'
      ]
    },
    {
      id: 'ssc',
      degree: 'Secondary School Certificate (SSC Class X)',
      institution: 'Rajapur High School',
      location: 'Rajapur, Maharashtra',
      period: '2019',
      result: '85.80 %',
      scoreType: 'Percentage',
      highlights: [
        'Achieved Distinction with 85.80% score.',
        'Excelled in Science and Mathematics.'
      ]
    }
  ],

  certificates: [
    {
      id: 'symbiosis-cert',
      title: 'Java Full Stack Development Certification',
      issuer: 'Symbiosis Skill Center, Pune',
      date: 'August 2024',
      credentialId: 'SSC-JFS-2024-88',
      skills: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Bootstrap'],
      description: 'Comprehensive industry certification validating expertise in Java full stack architecture, Spring Boot API development, and MySQL persistence.'
    },
    {
      id: 'exposys-cert',
      title: 'Web Developer Internship Completion Certificate',
      issuer: 'Exposys Data Labs',
      date: 'January 2024',
      credentialId: 'EDL-WD-2024-1042',
      skills: ['Frontend Development', 'HTML5/CSS3', 'JavaScript', 'UI/UX Usability'],
      description: 'Official certificate awarded for successfully completing the 2-month Web Development internship and delivering client frontend interfaces.'
    },
    {
      id: 'oops-java-cert',
      title: 'Object Oriented Programming in Java',
      issuer: 'Udemy',
      date: 'July 2024',
      credentialId: 'OOP-JAVA-2024',
      skills: ['Core Java', 'OOP Principles', 'Inheritance', 'Polymorphism', 'Encapsulation'],
      description: 'Certification covering advanced object-oriented design patterns, abstraction, and memory management in Java.'
    },
    
  ],

  achievements: [
    {
      id: 'academic-cgpi',
      title: 'First Class Distinction in Computer Engineering',
      category: 'Academic Excellence',
      description: 'Secured an outstanding 8.1 CGPI in Bachelor of Computer Engineering at Rajendra Mane College of Engineering & Technology.',
      date: '2021 – 2025',
      icon: 'Award'
    },
    {
      id: 'fullstack-deployment',
      title: 'Built & Deployed 3 Enterprise Web Applications',
      category: 'Technical Achievement',
      description: 'Independently designed, developed, and connected full-stack web platforms spanning both Java Spring Boot and Microsoft ASP.NET Core stacks.',
      date: '2023 – 2024',
      icon: 'Code'
    },
    {
      id: 'industry-training',
      title: 'Dual Industry Training & Internship Completion',
      category: 'Professional Experience',
      description: 'Successfully completed software engineering training at Symbiosis Skill Center Pune and a Web Developer internship at Exposys Data Labs.',
      date: '2023 – 2024',
      icon: 'Briefcase'
    },
    {
      id: 'continuous-learning',
      title: 'Continuous Tech Stack Advancement',
      category: 'Skill Mastery',
      description: 'Mastered 12+ programming languages, frameworks, and database engines including Java, Spring Boot, C#, ASP.NET Core, React, and SQL Server.',
      date: '2021 – Present',
      icon: 'Zap'
    }
  ]
};
