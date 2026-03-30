const experienceData = [
    {
        title: "PHP Developer",
        period: "March 2025 - Feb 2026",
        company: "CMP Techsseract LLP, LUCKNOW",
        tasks: [
            "Developing and maintaining robust backend components and RESTful APIs using PHP and MySQL.",
            "Integrating frontend frameworks with PHP backends to deliver dynamic content and scalable solutions."
        ]
    },
    {
        title: "PHP Developer",
        period: "Oct 2024 – March 2025",
        company: "Miso",
        tasks: [
            "Developed and optimized PHP backend logic, ensuring high performance and security for web applications.",
            "Integrated PHP services with MySQL databases for seamless and efficient data management."
        ]
    },
    {
        title: "PHP Developer Intern",
        period: "Apr 2024 – Sept 2024",
        company: "Cognifyz Technology",
        tasks: [
            "Assisted in backend development using PHP to implement business logic and connect to MySQL databases.",
            "Collaborated with the development team to deploy and optimize dynamic, database-driven web platforms."
        ]
    },
    {
        title: "PHP Developer Intern",
        period: "Sept 2023 – March 2024",
        company: "Softpro India",
        tasks: [
            "Built and tested functional modules utilizing PHP and SQL for internal management applications.",
            "Completed intensive professional training with an emphasis on backend development using PHP and MySQL."
        ]
    }
];

const projectsData = [
    {
        title: "Sasta Print",
        badge: "Live Project",
        techStack: "PHP • MySQL • MVC",
        description: "Developed a secure and robust online printing platform enabling customers to seamlessly place, track, and review orders.",
        highlights: [
            "Built complex database models and optimized MySQL queries for efficient order processing and data flow.",
            "Developed a full-featured admin dashboard with real-time analytics, secure review moderation, and order management.",
            "Engineered using a structured MVC architecture, ensuring a secure, scalable, and production-ready environment."
        ]
    },
    {
        title: "Agentic Honeypot",
        badge: "Hackathon Runnerup",
        techStack: "Python • FastAPI • OpenAI API",
        description: "Designed an AI-powered honeypot system to detect, lure, and analyze malicious attackers using autonomous agents.",
        highlights: [
            "Implemented risk scoring and signal extraction.",
            "Maintained structured intelligence logging for evidence."
        ]
    },
    {
        title: "Grievance Redressal Portal",
        badge: "Intership Project",
        techStack: "PHP • MySQL • Full Stack",
        description: "Developed a platform for complaint submission and tracking with an admin dashboard for efficient resolution management."
    },
    {
        title: "E-Health Care System",
        badge: "Major college project",
        techStack: "PHP • MySQL",
        description: "Built a patient management system for appointment scheduling, record keeping, and optimized history retrieval."
    },
    {
        title: "Online Voting System",
        badge: "Minor college project",
        techStack: "PHP • Security",
        description: "Created a secure voting interface ensuring data integrity with real-time result tallying and reporting features."
    }
];

const skillsData = [
    {
        category: "Backend & Database",
        skills: ["PHP", "MySQL", "Python", "MongoDB"]
    },
    {
        category: "Frontend",
        skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Responsive Design"]
    },
    {
        category: "Tools",
        skills: ["Git", "GitHub", "WordPress", "VS Code", "Postman", "Composer"]
    }
];

const educationData = [
    {
        degree: "Bachelor of Computer Applications (BCA)",
        period: "2025 - 2028 (Pursuing)",
        institution: "IGNOU"
    },
    {
        degree: "Diploma in Computer Science",
        period: "2024",
        institution: "Government Polytechnic Unnao | Score: 75%"
    },
    {
        degree: "Intermediate",
        period: "2021",
        institution: "Gurukul Mission senior secondary school | Score: 65%"
    }
];

const achievementsData = [
    {
        icon: "fas fa-trophy",
        title: "Gold Medalist:",
        description: "Shot Put (College Sports Fest)"
    },
    {
        icon: "fas fa-certificate",
        title: "Certified:",
        description: "Web Development Training (Softpro India)"
    },
    {
        icon: "fas fa-certificate",
        title: "Certified:",
        description: "Internship Completion (Cognifyz Technology)"
    }
];

// Function to render Experience
function renderExperience() {
    const container = document.getElementById('experience-list');
    if (!container) return;

    container.innerHTML = experienceData.map(item => `
        <div class="list-item">
            <div class="item-header">
                <h3>${item.title}</h3>
                <span class="meta">${item.period}</span>
            </div>
            <div class="item-subheader">${item.company}</div>
            <ul>
                ${item.tasks.map(task => `<li>${task}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Function to render Projects
function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    container.innerHTML = projectsData.map(item => `
        <div class="project-item">
            <h3>${item.title} ${item.badge ? `<span class="badge">${item.badge}</span>` : ''}</h3>
            <div class="project-meta">${item.techStack}</div>
            <p>${item.description}</p>
            ${item.highlights ? `
                <ul>
                    ${item.highlights.map(hl => `<li>${hl}</li>`).join('')}
                </ul>
            ` : ''}
        </div>
    `).join('');
}

// Function to render Skills
function renderSkills() {
    const container = document.getElementById('skills-grid');
    if (!container) return;

    container.innerHTML = skillsData.map(cat => `
        <div class="skill-category">
            <h3>${cat.category}</h3>
            <div class="skill-tags">
                ${cat.skills.map(skill => `<span>${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Function to render Education
function renderEducation() {
    const container = document.getElementById('education-list');
    if (!container) return;

    container.innerHTML = educationData.map(item => `
        <div class="list-item">
            <div class="item-header">
                <h3>${item.degree}</h3>
                <span class="meta">${item.period}</span>
            </div>
            <div class="item-subheader">${item.institution}</div>
        </div>
    `).join('');
}

// Function to render Achievements
function renderAchievements() {
    const container = document.getElementById('achievement-list');
    if (!container) return;

    container.innerHTML = achievementsData.map(item => `
        <li>
            <i class="${item.icon}"></i> 
            <strong>${item.title}</strong> ${item.description}
        </li>
    `).join('');
}

// Initialize and Render All
document.addEventListener('DOMContentLoaded', () => {
    renderExperience();
    renderProjects();
    renderSkills();
    renderEducation();
    renderAchievements();

    // Re-initialize Scroll Reveal after dynamic content load
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(sec => observer.observe(sec));
});
