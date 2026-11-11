// One place for personal details used across the site.
export const site = {
  name: 'Rowe Stodolnic',
  title: 'Rowe Stodolnic — product, program and software',
  description:
    'Brown CS and Business Economics student who builds products end to end, from user research to the App Store.',
  email: 'EMAIL_HERE@example.com', // TODO: replace with the address you want public
  linkedin: 'https://www.linkedin.com/in/rowe-stodolnic',
  github: 'https://github.com/rowestoli',
  sourceRepo: 'https://github.com/rowestoli/rowestoli_me',
};

export const experience = [
  {
    company: 'Okta',
    role: 'IT Security, Program Manager Intern',
    when: '2026', // TODO: confirm exact months
    place: 'San Francisco, CA',
    points: [
      'Built the root-cause-analysis process (wiki, templates, automation, P0–P2 SLAs), saving about 2 hours per incident; recognized by a security director.',
      'Took an MVP vendor-assessment tool to Okta’s security requirements for the 400-person IT org, cutting 2+ hours of manual vetting per assessment.',
      'Ran a secrets inventory across ~50 applications and 600+ secrets.',
    ],
  },
  {
    company: 'Kindred Motorworks',
    role: 'SCM + TechOps Intern',
    when: 'May – Aug 2025',
    place: 'Vallejo, CA',
    points: [
      'Automated four weekly and monthly spend and inventory reports with SQL and Retool.',
      'Ran stakeholder meetings with finance, technicians and engineers to replace legacy blueprint software with workflows in the inventory system.',
    ],
  },
  {
    company: 'Get With Wendy',
    role: 'Automation Contractor',
    when: 'Jan – Mar 2025',
    place: 'San Francisco, CA',
    points: ['Wrote Python automations that saved about 10 hours a week of manual emailing.'],
  },
];

export const categoryLabels = { app: 'App', ai: 'AI', web: 'Web & data', design: 'Design' } as const;

// Coursework at Brown. `projects` are slugs in src/content/projects built from that course.
type Course = { code: string; name: string; projects?: string[] };
export const coursework: { area: string; courses: Course[] }[] = [
  {
    area: 'Computer science and data',
    courses: [
      { code: 'CSCI 0111', name: 'Computing Foundations: Data' },
      { code: 'CSCI 0200', name: 'Program Design with Data Structures and Algorithms' },
      { code: 'CSCI 0220', name: 'Discrete Structures and Probability' },
      { code: 'CSCI 0320', name: 'Introduction to Software Engineering', projects: ['redline-viewer', 'nba-predictor'] },
      { code: 'CSCI 0410', name: 'Foundations of AI and Machine Learning', projects: ['go-ai', 'ai-playground'] },
      { code: 'CSCI 0500', name: 'Data Structures, Algorithms, and Intractability' },
      { code: 'CSCI 1290', name: 'Computational Photography', projects: ['photo-lab'] },
      { code: 'CSCI 1300', name: 'Interactive Design', projects: ['design-process'] },
      { code: 'DATA 0080', name: 'Data, Ethics, and Society' },
    ],
  },
  {
    area: 'Economics and finance',
    courses: [
      { code: 'ECON 0110', name: 'Principles of Economics' },
      { code: 'ECON 0710', name: 'Financial Accounting' },
      { code: 'ECON 1090', name: 'Introduction to Game Theory' },
      { code: 'ECON 1110', name: 'Intermediate Microeconomics' },
      { code: 'ECON 1210', name: 'Intermediate Macroeconomics' },
      { code: 'ECON 1420', name: 'Industrial Organization' },
      { code: 'ECON 1629', name: 'Applied Research Methods for Economists' },
      { code: 'ECON 1710', name: 'Investments I' },
      { code: 'ECON 1720', name: 'Corporate Finance' },
      { code: 'ECON 1820', name: 'Behavioral Economics' },
      { code: 'ECON 1850', name: 'Theory of Economic Growth' },
      { code: 'ENGN 0090', name: 'Management of Industrial and Nonprofit Organizations' },
    ],
  },
  {
    area: 'Math and statistics',
    courses: [
      { code: 'MATH 0100', name: 'Single Variable Calculus, Part II' },
      { code: 'MATH 0520', name: 'Linear Algebra' },
      { code: 'APMA 1650', name: 'Statistical Inference' },
    ],
  },
];
