import { ProjectType } from "@/types/projects";
import { SiAmazonec2, SiAmazonwebservices, SiBootstrap, SiCss3, SiFastapi, SiFlask, SiJavascript, SiLinux, SiNextdotjs, SiNginx, SiOpenai, SiPython, SiShadcnui, SiTailwindcss } from '@icons-pack/react-simple-icons';

export const projects: ProjectType[] = [
  {
    icon: <SiNextdotjs />,
    title: "Unstructured Documents Chatbot in AWS",
    subtitle: "LLM Chatbot using NextJS and FastAPI",
    technologies: [
      <SiNextdotjs key="nextjs" />,
      <SiPython key="python" />,
      <SiFastapi key="fastapi" />,
      <SiShadcnui key="shadcnui" />,
      <SiTailwindcss key="tailwindcss" />,
      <SiOpenai key="openai" />,
      <SiAmazonec2 key="amazonec2" />,
      <SiNginx key="nginx" />,
      <SiLinux key="linux" />,
      <SiAmazonwebservices key="aws" />
    ],
    description: "Developed a full-stack LLM Chatbot using NextJS and FastAPI on AWS. The Chatbot extracts text from unstructured documents, processes it into embeddings, and provides accurate responses to user queries using OpenAI's 'gpt-3.5-turbo' model. Led a team of three individuals, serving as the Team Lead, and deployed the solution on an AWS EC2 instance.",
    imgUrl: "https://placehold.co/800x600",
    videoUrl: "",
    githubUrl: "https://github.com/Sai-Deepak-1/Unstructured-Document-Insights-on-AWS",
    websiteUrl: "https://github.com/Sai-Deepak-1/Unstructured-Document-Insights-on-AWS"
  },
  {
    icon: <SiPython />,
    title: "Biometric Voter Identification System Using Face Recognition",
    subtitle: "Voter Identification System with Flask & OpenCV",
    technologies: [
      <SiPython key="python" />,
      <SiCss3 key="css3" />,
      <SiJavascript key="javascript" />,
      <SiFlask key="flask" />,
      <SiBootstrap key="bootstrap" />,
    ],
    description: "Developed a biometric voter identification system using the face_recognition library and Flask framework. The system authenticates voters using facial recognition technology, with a user-friendly web interface for voter registration and authentication. Utilized OpenCV for face detection and recognition from images and live video streams.",
    imgUrl: "https://placehold.co/800x600",
    videoUrl: "",
    githubUrl: "https://github.com/Sai-Deepak-1/BiometricVoterIdentificatinSystem",
    websiteUrl: "https://github.com/Sai-Deepak-1/BiometricVoterIdentificatinSystem"
  }
];
