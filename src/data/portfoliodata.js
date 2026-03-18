const portfoliodata = {
  personal: {
    name: "Pratik Baburao Ghuge", // Replace with your name
    title: "Software Engineer",
    email: "ghugepratik80@gmail.com",
    phone: "+7875987861",
    location: "Hadapsar Pune",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    bio: "Software Engineer specializing in full-stack development with expertise in Java, Python, and modern JavaScript frameworks. Experienced in ERP systems (Frappe, Openbravo) and database management (MySQL, MariaDB)."
  },
  
  education: [
    {
      id: 1,
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Savitribai Phule Pune University",
      location: "Rajuri, Junnar, Pune",
      period: "2020 - 2024",
      description: "Specialized in Software Engineering and Database Systems.",
      achievements: [
        "Developed major projects using Java and Python",
        "Participated in hackathons"
      ]
    }
  ],
  
  experience: [
    {
      id: 1,
      title: "Software Engineer",
      company: "Your Company",
      location: "Your Location",
      period: "20XX - Present",
      description: "Working on full-stack development and ERP systems",
      responsibilities: [
        "Develop and maintain applications using Java Spring Boot and React.js",
        "Work with Frappe and Openbravo ERP systems",
        "Manage MySQL and MariaDB databases",
        "Implement data visualization using D3.js and 3D graphics with Three.js"
      ]
    }
  ],
  
  skills: {
    frontend: [
      { name: "React.js", level: 90, icon: "FaReact" },
      { name: "JavaScript", level: 95, icon: "FaJs" },
      { name: "D3.js", level: 85, icon: "FaChartLine" },
      { name: "Three.js", level: 80, icon: "FaCube" },
      { name: "HTML5/CSS3", level: 90, icon: "FaHtml5" }
    ],
    backend: [
      { name: "Java", level: 95, icon: "FaJava" },
      { name: "Spring Boot", level: 90, icon: "FaLeaf" },
      { name: "Python", level: 90, icon: "FaPython" },
      { name: "Frappe", level: 85, icon: "FaCode" },
      { name: "Openbravo", level: 80, icon: "FaShoppingCart" }
    ],
    databases: [
      { name: "MySQL", level: 95, icon: "FaDatabase" },
      { name: "MariaDB", level: 90, icon: "FaDatabase" },
      { name: "MongoDB", level: 85, icon: "FaLeaf" }
    ],
    tools: [
      { name: "Git", level: 90, icon: "FaGitAlt" },
      { name: "Docker", level: 85, icon: "FaDocker" },
      { name: "VS Code", level: 95, icon: "FaCode" }
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "ERP System with Frappe",
      description: "Custom ERP solution built with Frappe framework for business management",
      image: "/assets/projects/erp-system.jpg",
      technologies: ["Frappe", "Python", "MariaDB", "JavaScript"],
      github: "https://github.com/yourusername/erp-system",
      live: "https://yourproject.com",
      featured: true
    },
    {
      id: 2,
      title: "Openbravo Customization",
      description: "Custom modules and extensions for Openbravo ERP",
      image: "/assets/projects/openbravo.jpg",
      technologies: ["Openbravo", "Java", "Spring Boot", "MySQL"],
      github: "https://github.com/yourusername/openbravo-modules",
      live: "https://yourproject.com",
      featured: true
    },
    {
      id: 3,
      title: "3D Data Visualization",
      description: "Interactive 3D data visualization using Three.js and D3.js",
      image: "/assets/projects/3d-viz.jpg",
      technologies: ["Three.js", "D3.js", "React", "JavaScript"],
      github: "https://github.com/yourusername/3d-viz",
      live: "https://yourproject.com",
      featured: true
    }
  ]
};

export default portfoliodata;