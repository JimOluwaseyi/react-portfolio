import Portfolio from './components/Portfolio';

const portfolioConfig = {
  fullName: "Jimoh Oluwaseyi Mayowa",
  title: "Full Stack Developer — React · Tailwind CSS · Accessibility · Ruby on Rails",
  bio: "Hi — I'm Jimoh, a full stack developer who builds fast, accessible, and maintainable web interfaces. I focus on React, Tailwind CSS, and Ruby on Rails, creating experiences that work beautifully on both mobile and desktop. I'm available for remote work and collaborations.",
  skills: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "TypeScript",
    "Accessibility",
    "Performance",
    "Web3",
    "Ruby on Rails",
  ],
  workExperience: [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Upwey Global — Contract",
      location: "Remote",
      duration: "3 months",
      bullets: [
        "Developed referral tracking features including upline/downline hierarchy.",
        "Built realtor code generation and admin view/edit functionalities.",
        "Converted Figma designs into pixel-perfect, accessible components.",
      ],
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Green Africa Initiative — Contract",
      location: "Remote",
      duration: "2 months",
      bullets: [
        "Created and maintained responsive pages for a non-profit organization.",
        "Built responsive user interfaces using React, Tailwind CSS and Ruby on Rails.",
        "Integrated RESTful APIs for real-time data handling.",
        "Improved performance, reducing Time-to-Interactive for end-users.",
        "Implemented accessibility best practices for wider audience reach.",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Upwey.ng — Real Estate Platform",
      desc: "A real estate platform with referral tracking (uplines/downlines), realtor code generation, and admin management tools.",
      tech: ["React", "Redux", "Tailwind CSS", "Ruby on Rails", "Nginx"],
      url: "https://upwey.com.ng/",
    },
    {
      id: 2,
      title: "Green Africa Initiative",
      desc: "Nutrition-focused non-profit initiative tackling hunger, food waste, and malnutrition among pregnant women and infants.",
      tech: ["React", "Tailwind CSS", "Rails API"],
      url: "https://greenafricainitiative.org",
    },
    {
      id: 3,
      title: "Modern E-Commerce Dashboard",
      desc: "High-performance dashboard with real-time analytics, inventory management, and customer insights using latest React patterns.",
      tech: ["React 19", "Tailwind CSS", "TypeScript", "Server Components"],
      url: "#",
    },
    {
      id: 4,
      title: "AI-Powered Content Creator",
      desc: "Interactive web app leveraging AI APIs with streaming responses, modern animations, and responsive design.",
      tech: ["React", "Vercel AI SDK", "Next.js", "Tailwind CSS"],
      url: "#",
    },
  ],
  email: "oluwaseyijimoh128@gmail.com",
  location: "Lagos, Nigeria",
};

function App() {
  return (
    <Portfolio {...portfolioConfig} />
  );
}

export default App;
