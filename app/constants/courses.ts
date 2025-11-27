import { Course } from "../types/course";

export const courses: Course[] = [
  {
    id: 1,
    image: "/images/image1.jpg",
    title: "Blockchain",
    description: "Vibe-coding smart contracts",
    prompts: [
      {
        id: 1,
        title: "Smart Contract Security Audit",
        image: "/images/image1.jpg"
      },
      {
        id: 2,
        title: "DeFi Protocol Development",
        image: "/images/image1.jpg"
      }
    ]
  },
  {
    id: 2,
    image: "/images/image2.png",
    title: "Games",
    description: "Gameplays",
    prompts: [
      {
        id: 1,
        title: "2D Platformer Mechanics",
        image: "/images/image2.png"
      },
      {
        id: 2,
        title: "AI Enemy Behavior System",
        image: "/images/image2.png"
      }
    ]
  },
  {
    id: 3,
    image: "/images/image3.jpg",
    title: "Software Tools",
    description: "Worflows",
    prompts: [
      {
        id: 1,
        title: "CLI Tool Development",
        image: "/images/image3.jpg"
      },
      {
        id: 2,
        title: "API Documentation Generator",
        image: "/images/image3.jpg"
      }
    ]
  }
];
