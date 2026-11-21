export const profile = {
  name: 'Ziad Hatem',
  fullName: 'Ziad Hatem Abdel Moneim Ali',
  title: 'Backend & Full Stack Developer',
  headline: 'Backend & Full Stack Developer | Building Reliable APIs, Scalable Systems & Modern Web Applications',
  location: 'Cairo, Egypt',
  email: 'ziadhatemali@gmail.com',
  github: 'https://github.com/ziadhatem',
  linkedin: 'https://www.linkedin.com/in/ziad-hatem-ali-elrwany',
  resume: '/ziad-hatem-resume.pdf',
  introduction: 'Backend & Full Stack Developer specializing in NestJS, Node.js, TypeScript, Laravel, and scalable application architecture.',
  about: [
    'I’m a Backend & Full Stack Developer based in Cairo, Egypt. I turn business requirements into maintainable services, REST APIs, and web applications using NestJS, Node.js, TypeScript, Laravel, and relational databases.',
    'At ShineUp, a Saudi car-care marketplace, I contribute to the backend for bookings, payments, and real-time updates. I enjoy working through how those pieces fit together, from domain rules and data models to asynchronous jobs and client-facing APIs.',
  ],
  availability: 'I’m open to conversations about backend and full-stack roles, product teams, and collaborations.',
}

export const skills = [
  { label: 'Backend & APIs', icon: 'server', items: ['NestJS', 'Node.js', 'Express.js', 'Laravel', 'REST APIs', 'JWT Authentication'] },
  { label: 'Languages', icon: 'code', items: ['PHP', 'JavaScript', 'TypeScript'] },
  { label: 'Databases & data stores', icon: 'database', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { label: 'Frontend', icon: 'panels', items: ['React.js', 'Next.js', 'Livewire', 'Blade', 'HTML5', 'CSS3', 'Bootstrap'] },
  { label: 'Real-time & async', icon: 'activity', items: ['Socket.IO', 'WebSockets', 'BullMQ'] },
  { label: 'ORMs', icon: 'layers', items: ['Prisma ORM', 'Eloquent ORM'] },
  { label: 'Developer tools', icon: 'terminal', items: ['Git', 'GitHub', 'Postman', 'VS Code'] },
]

export const shineupExperience = {
  role: 'Backend Developer',
  company: 'ShineUp',
  period: 'June 2026 – Present',
  location: 'Saudi Arabia · Remote',
  stack: ['NestJS', 'TypeScript', 'Node.js', 'Prisma ORM', 'PostgreSQL', 'Redis', 'BullMQ', 'Socket.IO', 'WebSockets', 'Moyasar'],
  contributions: [
    'Develop and maintain NestJS backend modules in TypeScript with Prisma ORM and PostgreSQL.',
    'Implement REST APIs and domain logic for customer, provider, booking, and payment workflows.',
    'Integrate and maintain payment flows with Moyasar.',
    'Contribute to real-time features using Socket.IO and WebSockets.',
    'Use Redis and BullMQ to support asynchronous processing.',
    'Contribute to validation, debugging, production feature delivery, and automated backend test coverage.',
  ],
}

export const credentials = [
  { title: 'MERN Stack Development Certificate', organization: 'Digilians Initiative', period: '2026', icon: 'award' },
  { title: 'Bachelor of Science in Computer Science', organization: 'Obour Higher Institute', period: '2023', detail: 'Grade Very Good. School Management System graduation project graded Excellent.', icon: 'graduation' },
  { title: 'Full Stack PHP Diploma', organization: 'CLS Learning Solutions', period: 'August–December 2021', icon: 'award' },
]

export const approach = [
  { title: 'Model the domain first', icon: 'database', detail: 'Start with business rules and relationships. Give each module a clear responsibility and express data constraints where they belong.' },
  { title: 'Design predictable APIs', icon: 'braces', detail: 'Use consistent contracts, explicit validation, and access checks at the right boundaries. Make failure cases clear to clients.' },
  { title: 'Plan for failure and recovery', icon: 'shield', detail: 'Consider retries, duplicate events, and partial failures in payments and asynchronous jobs. Test critical paths and debug with reproducible examples.' },
]
