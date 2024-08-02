import { Icons } from "@/components/ui/magicui/icons";

export const DATA = {
  name: "Sai Deepak Perumbudur",
  firstname: "Sai Deepak",
  lastname: "Perumbudur",
  about: "Software Developer",
  description: "Full Stack Developer",
  interests: ["Music", "Games", "Meditation"],
  bio: "",
  skills: [
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Flask Web Framework",
    "SQL",
    "NoSQL (MongoDB)",
    "AWS",
    "Git",
    "Github",
    "Windows",
    "Linux",
    "VS Code",
    "PyCharm",
    "IntelliJ IDEA",
    "Jupyter Notebook",
    "Google Colab",
  ],

  contact: {
    email: "psaideepak1@gmail.com",
    social: {
      GitHub: {
        url: "https://github.com/Sai-Deepak-1",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/sai-deepak-perumbudur/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://www.x.com/SaiDeepak1323",
        icon: Icons.x,
      },
    },
  },
  projects: [
    {
      href : "https://github.com/Sai-Deepak-1/Unstructured-Document-Insights-on-AWS",
      title: "Unstructured Documents Chatbot in AWS",
      description: "Developed a full-stack LLM Chatbot using NextJS and FastAPI on AWS. The Chatbot extracts text from unstructured documents, processes it into embeddings, and provides accurate responses to user queries using OpenAI's 'gpt-3.5-turbo' model. Led a team of three individuals, serving as the Team Lead, and deployed the solution on an AWS EC2 instance.",
      dates: "",
      technologies: ["NextJS", "FastAPI", "Python", "LlamaIndex", "OpenAI", "AWS EC2"],
      image: "https://placehold.co/800x600",
      links: [
        {
          type: "GitHub",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/Sai-Deepak-1/Unstructured-Document-Insights-on-AWS",
        },
        {
          type: "Source",
          icon: <Icons.globe className="size-3" />,
          href: "https://github.com/Sai-Deepak-1/Unstructured-Document-Insights-on-AWS",
        },
      ],
      video:"",
    },
    {
      href : "https://github.com/Sai-Deepak-1/BiometricVoterIdentificatinSystem",
      title: "Biometric Voter Identification System Using Face Recognition",
      description: "Developed a biometric voter identification system using the face_recognition library and Flask framework. The system authenticates voters using facial recognition technology, with a user-friendly web interface for voter registration and authentication. Utilized OpenCV for face detection and recognition from images and live video streams.",
      dates: "",
      technologies: ["Flask", "HTML", "CSS", "Bootstrap", "Python", "OpenCV", "face_recognition"],
      image: "https://placehold.co/800x600",
      links: [
        {
          type: "GitHub",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/Sai-Deepak-1/BiometricVoterIdentificatinSystem",
        },
        {
          type: "Source",
          icon: <Icons.globe className="size-3" />,
          href: "https://github.com/Sai-Deepak-1/BiometricVoterIdentificatinSystem",
        },
      ],
      video:"",
    },
  ],
};
