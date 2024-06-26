import { type ProjectCardProps } from "@/components/layout/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/layout/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Chat with AWS Docs",
    href: "https://github.com/Sai-Deepak-1/Unstructured-Document-Insights-on-AWS",
    tags: ["Nextjs", "TailwindCSS", "FastAPI", "AWS EC2", "OpenAI"],
    image: {
      LIGHT: "",
      DARK: "",
    },
  },
  {
    index: 1,
    title: "Voter Identification System",
    href: "https://github.com/Sai-Deepak-1/BiometricVoterIdentificatinSystem",
    tags: ["Flask", "HTML", "CSS", "Bootstrap", "Python", "OpenCV"],
    image: {
      LIGHT: "",
      DARK: "",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Unstructured Documents Chatbot in AWS",
    favicon: "",
    imageUrl: [
      "",
      "",
    ],
    description:
      "Created a Full Stack LLM Chatbot using NextJS and FastAPI on AWS. Deployed the chatbot on an EC2 instance, utilizing OpenAI's 'gpt-3.5-turbo' model for processing text from unstructured documents and providing accurate responses.",
    sourceCodeHref: "https://github.com/Sai-Deepak-1/Unstructured-Document-Insights-on-AWS",
  },
  {
    name: "Biometric Voter Identification System Using Face Recognition",
    favicon: "",
    imageUrl: [
      "",
      "",
    ],
    description:
      "Developed a biometric voter identification system using the face_recognition library and Flask framework. Implemented facial recognition technology for voter authentication.",
    sourceCodeHref: "https://github.com/Sai-Deepak-1/BiometricVoterIdentificatinSystem",
  },
];
