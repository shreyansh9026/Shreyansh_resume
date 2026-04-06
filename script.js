const experienceData = [
    {
        title: "Web Developer",
        period: "March 2025 - Feb 2026",
        company: "CMP Techsseract LLP, LUCKNOW",
        tasks: [
            "Architected and maintained responsive, performance-optimized web interfaces using React.js and vanilla JavaScript.",
            "Integrated scalable backend services and APIs leveraging Python, MongoDB, and MySQL, ensuring seamless cross-stack data flow."
        ]
    },
    {
        title: "Web Developer",
        period: "Oct 2024 – March 2025",
        company: "Miso",
        tasks: [
            "Engineered dynamic, mobile-first web pages utilizing HTML5, CSS3, and React.js to improve user engagement.",
            "Designed and implemented robust backend logic using PHP and MySQL for secure, efficient data management."
        ]
    },
    {
        title: "Web Developer Intern",
        period: "Apr 2024 – Sept 2024",
        company: "Cognifyz Technology",
        tasks: [
            "Developed reusable UI components and interactive web elements using Bootstrap and JavaScript.",
            "Streamlined WordPress website deployments and customized plugin functionality for client projects."
        ]
    },
    {
        title: "Web Developer Intern",
        period: "Sept 2023 – March 2024",
        company: "Softpro India",
        tasks: [
            "Developed, tested, and optimized core feature modules for internal enterprise web applications.",
            "Completed an intensive two-month training program focused on modern web development practices."
        ]
    },
    {
        title: "Web Development Intern",
        period: "Jul 2023 – Aug 2023",
        company: "Bharat Intern",
        tasks: [
            "Designed interactive and user-friendly frontend layouts utilizing HTML, CSS, and modern JavaScript.",
            "Facilitated database connectivity and executed backend scripting to support core application functions."
        ]
    }
];

const projectsData = [
    {
        title: "Multi-Agent AI System",
        badge: "AI Application",
        techStack: "Python • OpenAI API • LLMs",
        description: "Developed a scalable multi-agent AI architecture blending LLM reasoning, structured memory, and modular tool execution.",
        highlights: [
            "Built three specialized agents (Ask Agent, Ask MCP, Ask AlloyDB) capable of dynamic task handling and workflow integration.",
            "Demonstrated database querying and autonomous command execution."
        ]
    },
    {
        title: "Agentic Honeypot",
        badge: "Hackathon Runner-up",
        techStack: "Python • FastAPI • OpenAI API",
        description: "Engineered an AI-powered honeypot system designed to autonomously detect, engage, and analyze malicious network attackers.",
        highlights: [
            "Implemented real-time risk scoring and interaction logging.",
            "Created threat intelligence extraction into JSON/CSV formats for security review."
        ]
    },
    {
        title: "ZenTask AI",
        badge: "AI Bot Tool",
        techStack: "Node.js/Python • AI Integration",
        description: "Created an AI-powered Discord bot facilitating task assistance, server automation, and command-driven workflows.",
        highlights: [
            "Architected modular command logic that allows seamless integration of new workflows.",
            "Enhances community utility without disrupting core operations."
        ]
    },
    {
        title: "Sasta Print",
        badge: "Live Project",
        techStack: "PHP • MySQL • MVC",
        description: "Engineered a robust e-commerce platform for printing services using a structured MVC architecture for scalability and security.",
        highlights: [
            "Built complex database models and optimized MySQL queries for efficient order processing.",
            "Developed an intuitive admin dashboard for real-time analytics and seamless product discovery."
        ]
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
        category: "AI & Automation",
        skills: ["OpenAI API", "Agent Workflows", "Prompt Design", "Structured Reasoning"]
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
        institution: "Gurukul Mission Senior Secondary School | Score: 65%"
    }
];

const achievementsData = [
    {
        icon: "fas fa-trophy",
        title: "Participant:",
        description: "India AI Impact Buildathon 2026 (40,000+ peers)"
    },
    {
        icon: "fas fa-robot",
        title: "Google Hack2Skill:",
        description: "Built 3 AI agents for the competition."
    },
    {
        icon: "fas fa-certificate",
        title: "Certified:",
        description: "Two-Month Web Development Training (Softpro India)"
    },
    {
        icon: "fas fa-medal",
        title: "Gold Medalist:",
        description: "Shot Put (College Sports Fest)"
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
