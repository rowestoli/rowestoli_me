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
