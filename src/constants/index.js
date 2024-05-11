import project2 from "../assets/projects/1.png";
import project1 from "../assets/projects/2.png";
import project3 from "../assets/projects/3.png";
import project4 from "../assets/projects/4.png";
import project5 from "../assets/projects/5.png";

export const ABOUT_TEXT = `Hello! I'm Nikunj Sonigara, a dynamic software engineer with a keen interest in innovation and problem-solving. With a degree in IT Engineering from Uka Tarsadia University and a TFWS scholarship recipient, I've participated in five hackathons, led teams to top-30 finishes, and tackled over 2000 DSA problems across platforms like GeeksforGeeks and LeetCode, earning a 2-star rating on CodeChef. From internships at GeeksforGeeks to exploring Blockchain and Flutter-based applications, I've embraced diverse tech realms. Currently interning as an SDE 1 at Propelius Technology, I leverage my expertise in full-stack development, blockchain, and Flutter to drive innovation. I've also attended the ACM Summer School in 2023, deepening my understanding of algorithms in data science. Passionate about leveraging technology for tangible change, I'm eager to collaborate on projects that push the boundaries of innovation.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Engineer Internship",
    company: "Propelius Technologies",
    description: `Engineered a PERN stack project using TypeScript and Tailwind CSS, integrating Firebase backend with Next.js frontend. completed 5+ complex learning projects to enhance technical proficiency`,
    technologies: ["React.js", "Next.js", "PostgreSQL", "Express.js", "Node.js", "Firebase"],
  },
  {
    year: "2023 - 2024",
    role: "Content Writer Internship",
    company: "Geeks For Geeks",
    description: `Authored 68 articles and enhanced 187 others at GeeksforGeeks, demonstrating diverse technical expertise and meticulous attention to detail.`,
    technologies: ["C/C++", "TypeScript", "Python", "Blockchain", 'Solidity', 'Java', 'Python'],
    link: 'https://media.geeksforgeeks.org/certificates/1698949830/08b358bc39c90242e7e55dbfb8c67d7a.pdf',
  },
  {
    year: "2023 - 2023",
    role: "Research Internship",
    company: "Uka Tarsadia University",
    description: `Engineered an educational Decentralized Messaging Application (DApp), creating 3 smart contracts and 12+ screens. Enabled secure multilevel authentication and seamless academic staff-student communication. Used advanced cryptography and secure image storage on IPFS via Web3.storage for enhanced data security. Led the successful project completion, leveraging Blockchain, Flutter, encryption methods and decentralized storage, achieving a 30% security enhancement.`,
    technologies: ["Flutter", "Blockchain", "Cryptography", "Web3 Storage", "Solidity"],
    link: 'https://drive.google.com/file/d/1ydwtPaH81relz8IheyMv9gMjTLEDEUKV/view',
  },
];

export const PROJECTS = [
  {
    title: "DMApp for Education Institute",
    image: project1,
    description:
      "Led the creation of a secure messaging app for educational institutions, leveraging cryptography, blockchain, IPFS, and Flutter. Developed 3 smart contracts and over 12 screens for a decentralized messaging platform. Ensured secure communication between faculty and students with advanced encryption and IPFS image storage. Achieved a 30% security boost. Supports 6 key entities: dean, HOD, staff, student, class rep, and IT head.",
    technologies: ["Cryptography", "Blockchain", "IPFS", "Flutter"],
  },
  {
    title: "Restaurant Reservation System",
    image: project2,
    description:
      "Created a table reservation app with online payment integration, cutting restaurant wait times by 30-45 minutes. Implemented secure authentication for restaurant menu and ad management, showcasing full-stack expertise.",
    technologies: ["Flutter", "Firebase"],
  },
  {
    title: "Greenity App",
    image: project3,
    description:
      "Led front-end development for Greenity, connecting citizens and municipalities through event-based tree planting for urban greenery. Designed 15+ screens and managed front-end and back-end tasks, including CRUD operations in Firebase, QR code generation, data retrieval via QR scanning and bug resolution. Presented the app with a team of 5 at the SSIP-Gujarat Hackathon, advancing to the Final round.",
    technologies: ["Flutter", "Firebase"],
  },
  {
    title: "Doc-GPT",
    image: project4,
    description:
      "Created Doc-GPT where users can upload a document file and ask questions related to the document. The system provides answers based on the content of the document.",
    technologies: ["Flutter", "Firebase", "Python", "Machine Learning"],
  },
  {
    title: "Noodletown - Food Delivery Application",
    image: project5,
    description:
      "Developed a full-stack React app for food delivery. Features include user/admin authentication, Add to cart, forgot/reset password, OTP email verification, order management, restaurant management, change password, and responsive design.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "TypeScript"],
  },
];

export const CONTACT = {
  address: "Surat, Gujarat, India - 395006",
  email: "nikunjsonigara987@gmail.com",
};
