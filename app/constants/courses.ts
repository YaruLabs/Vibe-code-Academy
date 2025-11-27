import { Course } from "../types/course";

export const courses: Course[] = [
  {
    id: 1,
    image: "/images/image1.jpg",
    title: "Blockchain",
    description: "Vibe-coding smart contracts",
    category: "blockchain",
    prompts: [
      {
        id: 1,
        title: "Smart Contract Security Audit",
        image: "/images/image1.jpg",
        mdxPath: "/docs/blockchain/smart-contract-security-audit.mdx"
      },
      {
        id: 2,
        title: "DeFi Protocol Development",
        image: "/images/image1.jpg",
        mdxPath: "/docs/blockchain/defi-protocol-development.mdx"
      }
    ]
  },
  {
    id: 2,
    image: "/images/image2.png",
    title: "Games",
    description: "Gameplays",
    category: "games",
    prompts: [
      {
        id: 1,
        title: "2D Platformer Mechanics",
        image: "/images/image2.png",
        mdxPath: "/docs/games/2d-platformer-mechanics.mdx"
      },
      {
        id: 2,
        title: "AI Enemy Behavior System",
        image: "/images/image2.png",
        mdxPath: "/docs/games/ai-enemy-behavior-system.mdx"
      }
    ]
  },
  {
    id: 3,
    image: "/images/image3.jpg",
    title: "Software Tools",
    description: "Worflows",
    category: "software",
    prompts: [
      {
        id: 1,
        title: "CLI Tool Development",
        image: "/images/image3.jpg",
        mdxPath: "/docs/software/cli-tool-development.mdx"
      },
      {
        id: 2,
        title: "API Documentation Generator",
        image: "/images/image3.jpg",
        mdxPath: "/docs/software/api-documentation-generator.mdx"
      }
    ]
  }
];
