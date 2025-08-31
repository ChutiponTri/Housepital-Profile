import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Housepital",
  lastName: "Care",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Bringing Healthcare to the Home",
  avatar: "/images/avatar/avatar.jpg",
  email: "Housepitalcaree@gmail.com",
  location: "Asia/Bangkok", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Thai"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName} {person.lastName}</>,
  description: (
    <>
      We occasionally write about healthcare innovation, med-tech, and share
      insights on the intersection of compassionate care and smart technology.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ChutiponTri",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/tinpawee-thongkongthun-25bb351a9/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}`,
  description: `Portfolio website showcasing ${person.role}`,
  headline: <>Housepital Care</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Housepital</strong></>,
    href: "/work/company-reg",
  },
  subline: (
    <>
      Transform patients and <strong>caregivers</strong> experience.
      <br /> Delivering comfort, dignity, and advanced healthcare—right at home.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Housepital Care is a med-tech startup revolutionizing home healthcare by
        combining innovative medical technologies with compassionate patient care.
        Dedicated to transforming the way patients and caregivers experience at-home
        medical services, Housepital Care leverages cutting-edge solutions to deliver personalized,
        dignified, and efficient care—extending the benefits of hospital-grade treatment beyond the traditional healthcare setting.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Timeline",
    experiences: [
      {
        company: "Ideation Phase",
        timeframe: "October - December 2022",
        role: "Brainstorming innovative solutions",
        achievements: [
          <>
            Identification of major caregiver pain points from national data
            (18.1 million caregivers, 4.25 million burdened).
          </>,
          <>
            Problem validation conducted via early interviews and case scenarios
            (e.g., Ms.Somsri's caregiver story).
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Founding Phase",
        timeframe: "January - March 2024",
        role: "Team formation and early planning",
        achievements: [
          <>
            Formation of the Housepital Care founding team: Assembled a multidisciplinary team of medical,
            design, and technology professionals to drive innovation in home healthcare delivery.
          </>,
          <>
            Technology scoping and AI feature brainstorming initiated: Identified core technical requirements
            and explored AI applications such as symptom screening, caregiver stress analysis, and smart tracking
            systems to guide prototype development.
          </>,
        ],
        images: [],
      },
      {
        company: "Prototype Phase",
        timeframe: "April - June 2024",
        role: "Initial Prototype Development Highlights",
        achievements: [
          <>
            Developed first prototype with bedsore detection (Grade 2–3), daily checklist tracking,
            and AI chatbot for symptom screening.
          </>,
          <>
            Released caregiver-focused tools including self-assessment modules, stress evaluation (Zarit),
            and educational wound care videos.
          </>,
        ],
        images: [],
      },
      {
        company: "Competitive Phase",
        timeframe: "July - September 2024",
        role: "Early Achievements & Milestones",
        achievements: [
          <>
            🥈 HackMed IFMSA: 1st Runner-Up at Chulalongkorn Hospital
          </>,
          <>
            🤝 ThaiHealth Collaboration: Initiated talks for public sector partnership
          </>,
          <>
            🚀 Startup Support Secured: Joined TED Youth Program; won 1.5M THB incubation grant
          </>
        ],
        images: [],
      },
      {
        company: "AI Development & Collaboration Phase",
        timeframe: "October - December 2024",
        role: "Develop AI Model and Looking for Collaborations",
        achievements: [
          <>
            AI Modules for Health Analysis: Bedsore, urinary analysis, and prescreening chatbot
          </>,
          <>
            Community & Health Education: Designed features for support and education
          </>,
          <>
            Collaborated with Thammasat Hospital: Conducted OPD trial for application
          </>
        ],
        images: [],
      },
      {
        company: "Funding & Company Registration Phase",
        timeframe: "January - April 2025",
        role: "Housepital Care Company officially applied for registration.",
        achievements: [
          <>
            TED Fund Submission & Acceptance: Secured 1.5M Baht from TED Fund Prove of Concept (POC)
          </>,
          <>
            Housepital Care Company Registration: Applied for official company registration
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Team Members",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Market Expansion",
    skills: [
      {
        title: "Meeting the Market",
        description: <>Direct Outreach to Caregivers.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-03.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-04.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Partnership",
        description: <>Collaborations with Nursing Homes and Caregiver Providers.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Housepital Blog",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/team",
  label: "Team",
  title: `${person.name} ${person.lastName} Team Members`,
  description: `Team members of ${person.name} ${person.lastName}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      name: "Tinpawee Thongkongthun",
      degree: "6th year Medical Student SME and Med-Tech Startups Founder",
      role: "Chief Executive Officer",
      src: "/images/avatar/avatar-vv.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      name: "Chutipon Trirattananurak, B.Eng.",
      degree: "1st year AIoT TAIST-Science Tokyo",
      role: "Full-stack AI Engineer",
      src: "/images/avatar/avatar-ton.png",
      alt: "image",
      orientation: "vertical",
    },
    // {
    //   name: "Natchalin Kenthaworn",
    //   degree: "4th year BBA, Chulalongkorn University",
    //   role: "Chief Financial Officer",
    //   src: "/images/avatar/avatar-sunny.png",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    {
      name: "Sirinya Jirasit",
      degree: "3rd year  Digital Engineering Sirindhorn International Institute of Technology",
      role: "Business Analyst",
      src: "/images/avatar/avatar-fanta.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      name: "Pakarn Pahulo",
      degree: "2nd year Computer Engineering and Digital Technology, Chulalongkorn University",
      role: "Developer",
      src: "/images/avatar/avatar-fai.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      name: "Supreeya Patchanon",
      degree: "1st year BBA in Management Information Systems, Thammasat University",
      role: "Business Development",
      src: "/images/avatar/avatar-dora.png",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
