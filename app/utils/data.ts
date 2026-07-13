export const company = [
  { url: "/Company1.svg" },
  { url: "/Company2.svg" },
  { url: "/Company3.svg" },
  { url: "/Company4.svg" },
  { url: "/Company5.svg" },
  { url: "/Company6.svg" },
]

export type ServiceTheme = "light" | "green" | "dark"

export type Service = {
  id: number
  titleLines: string[]
  image: string
  theme: ServiceTheme
}

export const services: Service[] = [
  {
    id: 0,
    titleLines: ["Search engine", "optimization"],
    image: "/service1.svg",
    theme: "light",
  },
  {
    id: 1,
    titleLines: ["Pay-per-click", "advertising"],
    image: "/service2.svg",
    theme: "green",
  },
  {
    id: 2,
    titleLines: ["Social Media", "Marketing"],
    image: "/service3.svg",
    theme: "dark",
  },
  {
    id: 3,
    titleLines: ["Email", "Marketing"],
    image: "/service4.svg",
    theme: "light",
  },
  {
    id: 4,
    titleLines: ["Content", "Creation"],
    image: "/service5.svg",
    theme: "green",
  },
  {
    id: 5,
    titleLines: ["Analytics and", "Tracking"],
    image: "/service6.svg",
    theme: "dark",
  },
]

export const studies = [
  {
    content:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    content:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    content:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
]

export const process = [
  {
    id: "1",
    name: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "2",
    name: "Research and Strategy Development",
    description:
      "We conduct thorough market and competitor research, then craft a data-driven strategy aligned with your goals — defining the channels, messaging, and milestones that will move your business forward.",
  },
  {
    id: "3",
    name: "Implementation",
    description:
      "Our team brings the strategy to life, setting up campaigns, optimizing your presence across channels, and launching the initiatives designed to reach and convert your target audience.",
  },
  {
    id: "4",
    name: "Monitoring and Optimization",
    description:
      "We continuously track performance against your KPIs, testing and refining campaigns to maximize results and ensure every dollar of your budget works as hard as possible.",
  },
  {
    id: "5",
    name: "Reporting and Communication",
    description:
      "You receive clear, regular reports on progress and results, with a dedicated point of contact keeping you informed and aligned every step of the way.",
  },
  {
    id: "6",
    name: "Continual Improvement",
    description:
      "Marketing never stands still. We keep learning from the data, exploring new opportunities, and evolving your strategy to sustain long-term growth.",
  },
]

export const teams = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    exp: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    img: "/team1.svg",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    exp: "17+ years of experience in project management and team leadership. Strong organizational and communication skills.",
    img: "/team2.svg",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    exp: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.",
    img: "/team3.svg",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    exp: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.",
    img: "/team4.svg",
  },
]
