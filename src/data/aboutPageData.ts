export type HighlightContentsType = {
    number: number;
    content: string;
};

export const highlightContentsData: HighlightContentsType[] = [
    {
        number: 50,
        content: 'satisfied clients',
    },
    {
        number: 40,
        content: 'projects completed',
    },
    {
        number: 3,
        content: 'years of experience',
    },
];

export const biographyContentsData: string[] = [
    `Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion
   for creating beautiful, functional, and user-centered digital
   experiences. With 4 years of experience in the field. I am always
   looking for new and innovative ways to bring my clients' visions to
   life.`,
    `I believe that design is about more than just making things look
  pretty – it's about solving problems and creating intuitive,
  enjoyable experiences for users.`,
    `
  Whether I'm working on a website, mobile app, or other digital
  product, I bring my commitment to design excellence and
  user-centered thinking to every project I work on. I look forward to
  the opportunity to bring my skills and passion to your next project. 
  `,
];

export type BackgroundDetailType = {
    title: string;
    subTitle?: string;
    subtitleLink?: string;
    time: string;
    address: string;
    description: string;
};
export const experiences: BackgroundDetailType[] = [
    {
        title: 'Software Engineer',
        subTitle: 'Google',
        time: '2022-Present',
        address: 'Mountain View, CA',
        description:
            "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
        subtitleLink: 'www.google.com',
    },
    {
        title: 'Intern',
        subTitle: 'Facebook',
        time: 'Summer 2021',
        address: 'Menlo Park, CA.',
        description:
            'Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.',
        subtitleLink: 'www.google.com',
    },
    {
        title: 'Software Developer',
        subTitle: 'Amazon',
        time: '2020-2021',
        address: 'Seattle, WA.',
        description:
            "Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability.",
        subtitleLink: 'www.google.com',
    },
    {
        title: 'Software Developer Intern',
        subTitle: 'Microsoft',
        time: 'Summer 2019',
        address: 'Redmond, WA.',
        description:
            "Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component.",
        subtitleLink: 'www.google.com',
    },
    {
        title: 'Teaching Assistant',
        subTitle: 'MIT',
        time: 'Fall 2018',
        address: 'Massachusetts Ave, Cambridge, MA.',
        description:
            'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
        subtitleLink: 'www.google.com',
    },
];

export const educations: BackgroundDetailType[] = [
    {
        title: 'Bachelor Of Science In Computer Science',
        time: '2016-2020',
        address: 'Massachusetts Institute Of Technology (MIT)',
        description:
            'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.',
    },

    {
        title: 'Master Of Computer Science',
        time: '2020-2022',
        address: 'Stanford University',
        description:
            "Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding.",
    },
    {
        title: 'Online Coursework',
        time: '2016-2020',
        address: 'Coursera And EdX',
        description:
            'Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering.',
    },
];
