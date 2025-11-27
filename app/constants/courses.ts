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
        mdxPages: [
          "/docs/blockchain/smart-contract-security-audit/01-overview.mdx",
          "/docs/blockchain/smart-contract-security-audit/02-common-vulnerabilities.mdx",
          "/docs/blockchain/smart-contract-security-audit/03-audit-process.mdx"
        ]
      },
      {
        id: 2,
        title: "DeFi Protocol Development",
        image: "/images/image1.jpg",
        mdxPages: [
          "/docs/blockchain/defi-protocol-development/01-overview.mdx"
        ]
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
        mdxPages: [
          "/docs/games/2d-platformer-mechanics/01-overview.mdx"
        ]
      },
      {
        id: 2,
        title: "AI Enemy Behavior System",
        image: "/images/image2.png",
        mdxPages: [
          "/docs/games/ai-enemy-behavior-system/01-overview.mdx"
        ]
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
        mdxPages: [
          "/docs/software/cli-tool-development/01-overview.mdx"
        ]
      },
      {
        id: 2,
        title: "API Documentation Generator",
        image: "/images/image3.jpg",
        mdxPages: [
          "/docs/software/api-documentation-generator/01-overview.mdx"
        ]
      }
    ]
  }
];
