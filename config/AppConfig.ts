export const AppConfig = {
  //Site Info
  author: 'lsquantum',
  authorLink: 'https://github.com/lsquantum',
  site_name: 'Ahmet Umut Serefoglu',
  title: 'Serefoglu - Software Developer',
  description: 'Portfolio page for Ahmet Umut Şerefoğlu',
  locale: 'en',
  navBarLinks: [
    { text: 'Github', link: 'https://github.com/lsquantum' },
    { text: 'LinkedIn', link: 'https://linkedin.com/in/ahmet-umut-serefoglu' }
  ],

  //Base Info
  fullname: 'Ahmet Umut Serefoglu',
  firstname: 'Ahmet Umut',
  lastname: 'Şerefoğlu',
  jobTitle: 'Software Developer',
  email: 'ahmetumut@email.com',
  phone: '+90 (545) 510-1515',
  birthday: '18/06/1994',
  marriage: 'Married',
  info: [
    'Now this is a story all about how, my life got flipped turned upside down. Lorem ipsum dumy text.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    'Now this is a story all about how, my life got flipped turned upside down. Lorem ipsum dumy text.'
  ],
  location: 'Ankara, TURKEY, TR',
  totalExp: '5 years ',
  skills: ['React.js', 'React Native', 'JavaScript', 'TypeScript', '.NET Core'],

  //Timeline Info
  timeline: [
    { order: 1, company: 'Ventura Software Inc.', year: 'July 2017 - November 2018' },
    { order: 2, company: 'Turkish Armed Forces', year: 'November 2018 - October 2019' },
    { order: 3, company: 'Ventura Software Inc.', year: 'October 2019 - July 2021' },
    { order: 4, company: 'dias Technology', year: 'July 2021 - February 2022' },
    { order: 5, company: 'NETAS Telecommunication Inc.', year: 'February 2022 - Present' }
  ],

  //Experience Info
  experince: [
    { order: 1, company: 'NETAS Telecommunication Inc.', jobTitle: 'Software Developer', year: 'February 2022 - Present', jobInfo: ['Now this is a story all about how, my life got flipped turned upside down. Lorem ipsum dumy text.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Now this is a story all about how, my life got flipped turned upside down. Lorem ipsum dumy text.'] },
    { order: 2, company: 'dias Technology', jobTitle: 'Software Developer', year: 'July 2021 - February 2022', jobInfo: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'] },
    { order: 3, company: 'Ventura Software Inc.', jobTitle: 'Software Developer', year: 'October 2019 - July 2021', jobInfo: ['Now this is a story all about how, my life got flipped turned upside down. Lorem ipsum dumy text.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'] },
    { order: 4, company: 'Turkish Armed Forces', jobTitle: 'Officer', year: 'November 2018 - October 2019' },
    { order: 5, company: 'Ventura Software Inc.', jobTitle: 'Software Support Specialist', year: 'July 2017 - November 2018', jobInfo: ['Now this is a story all about how, my life got flipped turned upside down. Lorem ipsum dumy text.', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Now this is a story all about how, my life got flipped turned upside down. Lorem ipsum dumy text.'] }
  ],

  //Skills
  frontEndSkills: ['JavaScript', 'TypeScript', 'React.js', 'Nextjs', 'TailwindCSS', 'HTML', 'CSS'],
  backEndSkills: ['Nodejs', '.NET Core'],
  databaseSkills: ['Oracle', 'Microsoft SQL Server', 'MySQL', 'PostgresSQL', 'MongoDB'],
  miscSkills: ['Docker', 'Git', 'Scrum', 'TFS', 'Jira'],

  //Education
  education: [
    { order: 1, school: 'Iskenderun Technical University', class: 'Bachelor\'s Degree - Computer Engineering', year: '2012-2016', info: 'Graduated with a 2.52/4 GPA' },
    { order: 2, school: 'Haci Mehmet Kocarslan Anatolian High School', year: '2008-2012' }
  ],

  //TrainingCertification
  trainingCertification: [
    { order: 1, title: 'CCNA', year: '2019', info: 'Got it while serving military. It was only for 1 year.' }
  ],

  //SideProjects
  sideProjects: [
    {
      order: 1,
      title: 'QuantumCore',
      year: '2021',
      info: 'QuantumCore is a project for Startup companies to get start quickly without developing to much. Used .Net 6 and ASP.NET Core WebAPIs following Clean Architecture Principles. It has most of the things that you want from a WebAPI.',
      team: 'lsquantum',
      tools: ['.Net 6', '.Net Core', 'Entity Framework Core', 'MySQL', 'AutoMapper', 'CQRS', 'FluentValidation', 'Redis Caching', 'SeriLog', 'AuditLogs', 'Version', 'Swagger', 'HealthChecks']
    },
    {
      order: 2,
      title: 'QuantumCore Admin Dashboard',
      year: '2022',
      info: 'UI project for QuantumCore',
      team: 'lsquantum',
      tools: ['React.js', 'TypeScript', 'Material UI (MUI)', 'Git', 'Netlify']
    },
    {
      order: 3,
      title: 'Portfolio Page',
      year: '2022',
      info: 'My own portfolio page.',
      team: 'lsquantum',
      tools: ['Nextjs', 'TypeScript', 'TailwindCSS', 'Git', 'Vercel']
    }
  ],
};