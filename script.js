const experienceData = [
    {
        title: "Web Developer",
        period: "March 2025 - Present",
        company: "CMP Techsseract LLP, LUCKNOW",
        tasks: [
            "Developing and maintaining responsive web pages using React.js, HTML, CSS, and JavaScript.",
            "Supporting backend integration with Python, MongoDB, and MySQL for dynamic content delivery."
        ]
    },
    {
        title: "Web Developer",
        period: "Oct 2024 – March 2025",
        company: "Miso",
        tasks: [
            "Developed responsive web interfaces ensuring cross-browser compatibility.",
            "Integrated PHP backend services with MySQL databases for seamless data management."
        ]
    },
    {
        title: "Web Developer Intern",
        period: "Apr 2024 – Sept 2024",
        company: "Cognifyz Technology",
        tasks: [
            "Designed UI components using Bootstrap and JavaScript to enhance user experience.",
            "Collaborated with the development team to deploy and optimize WordPress websites."
        ]
    },
    {
        title: "Web Developer Intern",
        period: "Sept 2023 – March 2024",
        company: "Softpro India",
        tasks: [
            "Built and tested functional modules for internal web applications.",
            "Completed intensive professional training in full-stack web development."
        ]
    }
];

const projectsData = [
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
        category: "Frontend",
        skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Responsive Design"]
    },
    {
        category: "Backend & Database",
        skills: ["PHP", "Python", "MySQL", "MongoDB"]
    },
    {
        category: "Tools",
        skills: ["Git", "GitHub", "WordPress", "VS Code", "Postman"]
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
