import { Icons } from "@/components/ui/magicui/icons";

export const DATA = {
  name: "Sai Deepak Perumbudur",
  firstname : "Sai Deepak",
  lastname : "Perumbudur",
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
  services : [
    {
      id: '01',
      title: 'Next.js React Development',
      description: 'Develop modern, high-performance web applications using Next.js and React. We create responsive, server-side rendered applications with optimized user experiences.',
      color: 'blue'
    },
    {
      id: '02',
      title: 'Full Stack Development',
      description: 'Comprehensive full-stack solutions using various technologies. From front-end React applications to robust back-end systems, we cover all aspects of your development needs.',
      color: 'green',
    },
    {
      id: '03',
      title: 'Machine Learning and LLM Integration',
      description: 'Integrate cutting-edge Machine Learning and Large Language Models into your applications. We help you leverage AI to enhance functionality and user experience.',
      color: 'purple',
    },
    {
      id: '04',
      title: 'Java Spring and Spring Boot Development',
      description: 'Build enterprise-grade applications with Java Spring and Spring Boot. We offer scalable, secure, and efficient back-end solutions for your business needs.',
      color: 'red'
    }
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
  project : [
    {
      title: "Unstructured Documents Chatbot in AWS",
      description: "Developed a full-stack LLM Chatbot using NextJS and FastAPI on AWS. The Chatbot extracts text from unstructured documents, processes it into embeddings, and provides accurate responses to user queries using OpenAI's 'gpt-3.5-turbo' model. Led a team of three individuals, serving as the Team Lead, and deployed the solution on an AWS EC2 instance.",
      tags: ["NextJS", "FastAPI", "Python", "LlamaIndex", "OpenAI", "AWS EC2"],
      links: {
        github: "https://github.com/Sai-Deepak-1/Unstructured-Document-Insights-on-AWS",
        external: "https://github.com/Sai-Deepak-1/Unstructured-Document-Insights-on-AWS"
      },
      imgSrc: "https://placehold.co/800x600" // Placeholder for project image
    },
    {
      title: "Biometric Voter Identification System Using Face Recognition",
      description: "Developed a biometric voter identification system using the face_recognition library and Flask framework. The system authenticates voters using facial recognition technology, with a user-friendly web interface for voter registration and authentication. Utilized OpenCV for face detection and recognition from images and live video streams.",
      tags: ["Flask", "HTML", "CSS", "Bootstrap", "Python", "OpenCV", "face_recognition"],
      links: {
        github: "https://github.com/Sai-Deepak-1/BiometricVoterIdentificatinSystem",
        external: "https://github.com/Sai-Deepak-1/BiometricVoterIdentificatinSystem"
      },
      imgSrc: "https://placehold.co/800x600" // Placeholder for project image
    }
  ]
};
