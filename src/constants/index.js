import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    meta,
    threejs,
} from '../assets'

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
]

const services = [
    {
        title: 'Web Developer',
        icon: web,
    },
    {
        title: 'Quick Thinker',
        icon: mobile,
    },
    {
        title: 'Problem Solver',
        icon: backend,
    },
    {
        title: 'Team Player',
        icon: creator,
    },
]

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Redux Toolkit',
        icon: redux,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'MongoDB',
        icon: mongodb,
    },
    {
        name: 'Three JS',
        icon: threejs,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'docker',
        icon: docker,
    },
]

const experiences = [
    {
        title: 'Software Developer',
        company_name: 'Cognizant Technology Solutions india Pvt Ltd.',
        icon: meta,
        iconBg: '#383E56',
        date: 'Aug 2022 - Aug 2023',
        points: [
            'Customizing Teamcenter server-side and Active Workspace client-side',
            'Expertise in Google Cloud Platform (GCP) for infrastructure and CI/CD',
            'Client interaction and requirement analysis with business analysts',
            'User interface development using JavaFX for intuitive designs',
        ],
    },
    {
        title: 'software Intern',
        company_name: 'Cognizant Technology Solutions india Pvt Ltd.',
        icon: meta,
        iconBg: '#383E56',
        date: 'Mar 2022 - Aug 2022',
        points: [
            'Assisted in developing and maintaining web applications using modern technologies.',
            'Collaborated closely with cross-functional teams, including designers and developers, to support project goals.',
            'Contributed to responsive design and ensured compatibility across various web browsers.',
            'Participated in code reviews, gaining insights and providing feedback to improve code quality.',
        ],
    },
]

const testimonials = [
    {
        testimonial:
            'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
        name: 'Sara Lee',
        designation: 'CFO',
        company: 'Acme Co',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: 'Chris Brown',
        designation: 'COO',
        company: 'DEF Corp',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: 'Lisa Wang',
        designation: 'CTO',
        company: '456 Enterprises',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
]

const projects = [
    {
        name: 'Github App',
        description: 'Web-based platform used to manage and search github records',
        tags: [
            {
                name: 'Git',
                color: 'blue-text-gradient',
            },
            {
                name: 'Javascript',
                color: 'green-text-gradient',
            },
            {
                name: 'CSS',
                color: 'pink-text-gradient',
            },
            {
                name: 'HTML',
                color: 'blue-text-gradient',
            },
            {
                name: 'React',
                color: 'blue-text-gradient',
            },
            {
                name: 'Tailwind',
                color: 'blue-text-gradient',
            },
            {
                name: 'NodeJS',
                color: 'green-text-gradient',
            },
            {
                name: 'MongoDB',
                color: 'green-text-gradient',
            },
        ],
        image: 'https://dungpv-api.vercel.app/assets/images/github-app.png',
        source_code_link: 'https://github.com/phamdung2209/mern-github.git',
        demo: 'https://github.dungpv.id.vn/',
    },
    {
        name: 'Chat App',
        description:
            'Web application that allows users to log in and register an account to use real-time messaging functions',
        tags: [
            {
                name: 'Javascript',
                color: 'green-text-gradient',
            },
            {
                name: 'CSS',
                color: 'pink-text-gradient',
            },
            {
                name: 'HTML',
                color: 'blue-text-gradient',
            },
            {
                name: 'React',
                color: 'blue-text-gradient',
            },
            {
                name: 'Redux',
                color: 'blue-text-gradient',
            },
            {
                name: 'Zustand',
                color: 'green-text-gradient',
            },
            {
                name: 'Socket.io',
                color: 'pink-text-gradient',
            },
            {
                name: 'Tailwind',
                color: 'blue-text-gradient',
            },
            {
                name: 'NodeJS',
                color: 'green-text-gradient',
            },
            {
                name: 'MongoDB',
                color: 'green-text-gradient',
            },
        ],
        image: 'https://dungpv-api.vercel.app/assets/images/chat-app.png',
        source_code_link: 'https://github.com/phamdung2209/chat-app.git',
        demo: 'https://chat.dungpv.id.vn/',
    },
    {
        name: 'Snap Chat Next',
        description:
            'Snapchat clone with Next JS and Next Auth. Web application can send and receive messages and images.',
        tags: [
            {
                name: 'React',
                color: 'blue-text-gradient',
            },
            {
                name: 'NextJS',
                color: 'green-text-gradient',
            },
            {
                name: 'Next-auth',
                color: 'green-text-gradient',
            },
            {
                name: 'Javascript',
                color: 'green-text-gradient',
            },
            {
                name: 'Typescript',
                color: 'green-text-gradient',
            },
            {
                name: 'Tailwind',
                color: 'green-text-gradient',
            },
            {
                name: 'CSS',
                color: 'pink-text-gradient',
            },
            {
                name: 'HTML',
                color: 'blue-text-gradient',
            },
            {
                name: 'MongoDB',
                color: 'green-text-gradient',
            },
        ],
        image: 'https://res.cloudinary.com/den0awox0/image/upload/v1709350854/wzuva1tgyw8q536sfqwp.png',
        source_code_link: 'git@github.com:phamdung2209/snap-next.git',
        demo: 'https://snapchat.dungpv.id.vn/',
    },
    {
        name: 'TikTok Clone',
        description: 'TikTok clone with React JS and laravel. Upload videos and watch them.',
        tags: [
            {
                name: 'React',
                color: 'blue-text-gradient',
            },
            {
                name: 'SCSS',
                color: 'pink-text-gradient',
            },
            {
                name: 'HTML',
                color: 'blue-text-gradient',
            },
            {
                name: 'Javascript',
                color: 'green-text-gradient',
            },
        ],
        image: 'https://res.cloudinary.com/den0awox0/image/upload/v1709350109/qkaxk6xcztpxp8q95qt2.png',
        source_code_link: 'https://github.com/phamdung2209/tiktok.git',
        demo: 'https://tiktok.dungpv.id.vn/',
    },
    {
        name: 'Protech',
        description:
            'Protech is a website that laptop sellers can post their products and customers can buy them.',
        tags: [
            {
                name: 'html',
                color: 'blue-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
            {
                name: 'laravel',
                color: 'green-text-gradient',
            },
            {
                name: 'PHP',
                color: 'green-text-gradient',
            },
        ],
        image: 'https://res.cloudinary.com/den0awox0/image/upload/v1709797991/yhyrrwhheomjzmzffqtq.png',
        source_code_link: 'https://github.com/abhishekHegde2000/yt-clone',
    },
]

export { services, technologies, experiences, testimonials, projects }
