import { Project } from "~/data";

const PROJECTS: Project[] = [
  {
    name: "index network",
    description: "Index is a discovery protocol on web3.0 that allows you to create truly personalized and autonomous discovery experiences across the web.    ",
    url: "https://index.network/",
    github: "indexnetwork/index",
    note: "recieved grant of $200.000",
  },
  {
    name: "stableai",
    description: "a deep learning project that uses text-to-image, image-to-image, and style-transfer features to provide high-quality image synthesis",
    url: "https://github.com/furkanozelge/stableai",
    github: "https://github.com/furkanozelge/stableai",
  },
  {
    name: "syngo carbon space",
    description: "product that provides access to all imaging data, diagnostic software elements and tools",
    url: "https://www.siemens-healthineers.com/de/digital-health-solutions/syngo-carbon-space",
    note:"contributor at siemens"
  },
  {
    name: "enhencer product & landing",
    description: "shopify & e-commerce ads platform that uses ai",
    url: "https://enhencer.com/",
  },
  {
    name: "date night mobile app",
    description: "mobile app that gives date night ideas",
    github: "furkanozelge/date-night",
  },
  {
    name: "dill's landing",
    description: "landing page for dill startup - backend and frontend",
    url:"https://dillsuite.com/",
  },
  {
    name: "smartest co. landing",
    description: "landing page and all product's page for smartest co.",
    url:"https://www.smartestcompany.co/",
  },
  {
    name: "shell petrol office product ",
    description: "frontend and backend of the camera tracking system product used in Shell Petrol offices",
    url:"https://www.shell.com/"
  },
  {
    name: "vinn",
    description: "a startup that initiative that will create one-to-one and definitive solutions to urban transportation problems",
  },

  {
    name: "http protocol web server",
    description: "my own http web server",
    url: "https://github.com/furkanozelge/HTTP-Protocol-Web-Server",
    github: "furkanozelge/HTTP-Protocol-Web-Server",
  },
  {
    name: "web3.0 note app",
    description: "note app using metamask to login and works on web3.0",
    url: "https://github.com/furkanozelge/metamask-notepad-app",
    github: "furkanozelge/metamask-notepad-app",
  },
  {
    name: "unix shell",
    description: "my own unix shell",
    url: "https://github.com/furkanozelge/UnixShell",
    github: "furkanozelge/UnixShell",
  },
  {
    name: "portfolio",
    description: "where you are now",
    url:"https://ozelge.com",
    github: "furkanozelge/ozelge.com",
  },

  {
    name: "delancer - freelance platform on web3.0",
    description: "freelance platform for web3.0",
  },

];

export default defineEventHandler(() => {
  return PROJECTS;
});
