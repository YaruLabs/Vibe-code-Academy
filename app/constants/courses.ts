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
        ],
        recommendedAI: ["claude", "openai"],
        welcome: {
          title: "Welcome to Smart Contract Security Audit",
          description: "Learn how to identify and prevent common vulnerabilities in smart contracts to build secure decentralized applications.",
          agenda: [
            "Understanding common smart contract vulnerabilities",
            "Security audit methodology and best practices",
            "Tools and techniques for security testing",
            "Real-world case studies and examples"
          ]
        }
      },
      {
        id: 2,
        title: "DeFi Protocol Development",
        image: "/images/image1.jpg",
        mdxPages: [
          "/docs/blockchain/defi-protocol-development/01-overview.mdx"
        ],
        recommendedAI: ["claude", "gemini", "openai"],
        welcome: {
          title: "Welcome to DeFi Protocol Development",
          description: "Master the fundamentals of building decentralized finance protocols from scratch.",
          agenda: [
            "DeFi architecture and design patterns",
            "Liquidity pools and AMM mechanisms",
            "Yield farming strategies",
            "Testing and deployment best practices"
          ]
        }
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
        ],
        recommendedAI: ["claude", "gemini"],
        welcome: {
          title: "Welcome to 2D Platformer Mechanics",
          description: "Build engaging 2D platformer games with smooth physics and responsive controls.",
          agenda: [
            "Character movement and physics",
            "Jump mechanics and air control",
            "Collision detection and response",
            "Level design principles"
          ]
        }
      },
      {
        id: 2,
        title: "AI Enemy Behavior System",
        image: "/images/image2.png",
        mdxPages: [
          "/docs/games/ai-enemy-behavior-system/01-overview.mdx"
        ],
        recommendedAI: ["gemini", "openai"],
        welcome: {
          title: "Welcome to AI Enemy Behavior System",
          description: "Create intelligent and challenging enemy AI for your games using behavior trees and state machines.",
          agenda: [
            "Behavior tree fundamentals",
            "State machine patterns",
            "Pathfinding and navigation",
            "AI perception and decision making"
          ]
        }
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
        ],
        recommendedAI: ["claude"],
        welcome: {
          title: "Welcome to CLI Tool Development",
          description: "Build powerful and user-friendly command-line tools that developers love to use.",
          agenda: [
            "CLI architecture and design patterns",
            "Argument parsing and validation",
            "Interactive prompts and progress indicators",
            "Testing and distribution strategies"
          ]
        }
      },
      {
        id: 2,
        title: "API Documentation Generator",
        image: "/images/image3.jpg",
        mdxPages: [
          "/docs/software/api-documentation-generator/01-overview.mdx"
        ],
        recommendedAI: ["openai", "gemini"],
        welcome: {
          title: "Welcome to API Documentation Generator",
          description: "Automate API documentation generation from code annotations and OpenAPI specifications.",
          agenda: [
            "OpenAPI specification and standards",
            "Code annotation parsing",
            "Documentation generation pipelines",
            "Interactive API explorers"
          ]
        }
      }
    ]
  }
];
