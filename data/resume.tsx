import { Icons } from "@/components/icons";

export const DATA = {
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
      title: "Unstructured Documents Chatbot in AWS",
      href: "https://github.com/Sai-Deepak-1/Unstructured-Document-Insights-on-AWS",
      dates: "January 2024 - April 2024",
      active: true,
      description:
        "Created a Full Stack LLM Chatbot using NextJS and FastAPI on AWS, extracting insights from Unstructured Documents. Led a team of three individuals, serving as the Team Lead. Deployed on an EC2 Instance, extracting text from Unstructured Documents, processing into Embeddings, and providing accurate responses to user queries using OpenAI's 'gpt-3.5-turbo' model.",
      technologies: [
        "Next.js",
        "FastAPI",
        "Python",
        "LlamaIndex",
        "OpenAI",
        "AWS EC2",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Sai-Deepak-1/Unstructured-Document-Insights-on-AWS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Biometric Voter Identification System Using Face Recognition",
      href: "https://github.com/Sai-Deepak-1/BiometricVoterIdentificatinSystem",
      dates: "April 2023 - May 2023",
      active: true,
      description:
        "Developed a mini project on Biometric Voter Identification System using the face_recognition library and Flask framework. Implemented a robust system that utilizes facial recognition technology to authenticate voters during elections. Integrated the system with Flask to create a user-friendly web interface for voter registration and authentication.",
      technologies: [
        "Flask",
        "HTML",
        "CSS",
        "Bootstrap",
        "Python",
        "OpenCV",
        "face_recognition",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Sai-Deepak-1/BiometricVoterIdentificatinSystem",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  education: [
    {
      title: "CVR College of Engineering",
      dates: "June 2020 - July 2024",
      location: "Hyderabad, Telangana, India",
      description:
        "Completed B.Tech in Computer Science and Engineering with a CGPA of 8.01",
      image: "/cvr_logo.png",
      mlh: "",
      links: [
        {
          title: "CVR Home Page",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.cvr.ac.in/",
        },
      ],
    },
    {
      title: "Sri Chaitanya Junior College",
      dates: "April 2018 - April 2020",
      location: "Hyderabad, Telangana, India",
      description:
        "Completed Intermediate (12th) with a total of 936/1000 or 93.6%.",
      image: "/sri_chaitanya_logo.png",
      mlh: "",
      links: [
        {
          title: "Sri Chaitanya Home Page",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://srichaitanya.net/",
        },
      ],
    },
    {
      title: "Sri Chaitanya Techno School",
      dates: "March 2017 - April 2018",
      location: "Hyderabad, Telangana, India",
      description: "Completed Tenth Standard (10th) with a total GPA of 9.5",
      image: "/sri_chaitanya_logo.png",
      links: [
        {
          title: "Sri Chaitanya Home Page",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://srichaitanya.net/",
        },
      ],
    },
  ],
} as const;
