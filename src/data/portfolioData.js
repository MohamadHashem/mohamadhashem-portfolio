export const portfolioData = {
  personalInfo: {
    name: "Mohamad Hashem",
    logoText: "Mohamad", // This controls the name in the Navbar and Footer
    title: "Web & Mobile Developer",
    location: "Beirut, Lebanon",
    imagePath: "src/assets/profile.jpg",
    email: "mohamad.hashem.cs@gmail.com", // Replace with actual email
    phone: "+961 76869319", // Replace with actual phone
    github: "https://github.com/MohamadHashem", // Replace with actual GitHub
    linkedin: "https://www.linkedin.com/in/mohamad-hashem1/", // Replace with actual LinkedIn
    website: "", // Replace with actual website
  },
  hero: {
    typingRoles: ["React Developer", "Mobile Developer", "AI Enthusiast"],
  },
  about: {
    summary: "A passionate and driven Web & Mobile Developer with a solid foundation in Computer Science. I specialize in building modern, responsive, and user-centric applications using technologies like React, Flutter, and Kotlin. Always eager to learn new technologies and apply them to solve real-world problems. My goal is to build impactful software that delivers exceptional user experiences.",
  },
  skills: [
    { name: "React", level: 90 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "Flutter", level: 85 },
    { name: "Kotlin", level: 80 },
    { name: "Python", level: 75 },
    { name: "Matlab", level: 70 },
    { name: "Linux", level: 85 },
  ],
  experience: [
    {
      id: 3,
      role: "Software Support Specialist",
      company: "Reflection Solution Company (Tayouneh)",
      period: "Present",
      description: "Providing technical support for various software solutions including ERP systems, POS systems, and mobile applications. Assisting clients with troubleshooting and ensuring smooth system operations.",
    },
    {
      id: 1,
      role: "Web & WordPress Developer",
      company: "Rimex",
      period: "2022 - Present",
      description: "Developed and managed WordPress sites for more than 5 different companies. Responsible for maintaining responsive designs, ensuring optimal site performance, implementing security measures, and performing regular updates.",
    },
    {
      id: 2,
      role: "Junior Mobile Developer",
      company: "LWAH",
      period: "2021 - 2022",
      description: "Assisted in the development of mobile applications for both iOS and Android platforms. Implemented new features, fixed bugs, and participated in code reviews.",
    }
  ],
  projects: [
    {
      id: 1,
      title: "Football Player Rank Prediction",
      description: "An AI-powered application that predicts the performance and ranking of football players based on historical data and current statistics.",
      technologies: ["Python", "Machine Learning", "React"],
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop", // placeholder
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 2,
      title: "Face Recognition Attendance",
      description: "A smart attendance tracking system utilizing facial recognition technology to automate logging and improve security measures.",
      technologies: ["Python", "OpenCV", "Flutter", "Firebase"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop", // placeholder
      githubLink: "#",
      liveLink: "#"
    }
  ],
  education: [
    {
      id: 1,
      degree: "BS in Computer Science",
      institution: "Phoenicia University",
      period: "2017 - 2022",
      description: "Graduated with a solid understanding of software engineering principles, algorithms, and data structures."
    }
  ],
  certificates: [
    {
      id: 1,
      title: "Advanced React Patterns",
      issuer: "Udemy",
      date: "2023"
    },
    {
      id: 2,
      title: "Flutter Development Bootcamp",
      issuer: "App Brewery",
      date: "2022"
    }
  ]
};
