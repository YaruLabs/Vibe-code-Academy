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
          "/docs/blockchain/01-overview.mdx"
        ],
        tutorialUrl: "https://www.youtube.com/@COTIGroup",
        repositoryUrl: "https://github.com/coti-io",
        demoUrl: "https://coti.io",
        recommendedAI: ["claude", "openai", "cotiMcp"],
        difficulty: "advance",
        welcome: {
          title: "Welcome to Smart Contract Security Audit",
          description: "Learn how to identify and prevent common vulnerabilities in smart contracts to build secure decentralized applications."
        }
      },
      {
        id: 2,
        title: "DeFi Protocol Development",
        image: "/images/image1.jpg",
        mdxPages: [
          "/docs/blockchain/defi-protocol-development/01-overview.mdx"
        ],
        tutorialUrl: "https://www.youtube.com/@COTIGroup",
        repositoryUrl: "https://github.com/coti-io",
        demoUrl: "https://coti.io",
        recommendedAI: ["claude", "gemini", "openai", "cotiMcp"],
        difficulty: "advance",
        welcome: {
          title: "Welcome to DeFi Protocol Development",
          description: "Master the fundamentals of building decentralized finance protocols from scratch."
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
        title: "Game + Private Tokens",
        image: "/images/image2.png",
        mdxPages: [
          "/docs/games/2d-platformer-mechanics/01-create-private-token.mdx",
          "/docs/games/2d-platformer-mechanics/02-setup-game.mdx",
          "/docs/games/2d-platformer-mechanics/03-integration.mdx"
        ],
        tutorialUrl: "https://www.youtube.com/watch?v=WZZiXNV6AqQ",
        repositoryUrl: "https://github.com/coti-io",
        demoUrl: "https://v0-game-2-d-v2.vercel.app/",
        recommendedAI: ["cotiMcp", "v0"],
        difficulty: "absolute-beginner",
        welcome: {
          title: "Welcome to 2D Platformer Mechanics",
          description: "Build engaging 2D platformer games with smooth physics and responsive controls."
        }
      },
      {
        id: 2,
        title: "Game + Custom Private Token",
        image: "/images/image2.png",
        mdxPages: [
          "/docs/games/2d-custom-game/01-create-private-custom-token.mdx",
          "/docs/games/2d-custom-game/02-setup-game.mdx",
          "/docs/games/2d-custom-game/03-integration.mdx"
        ],
        tutorialUrl: "https://www.youtube.com/@COTIGroup",
        repositoryUrl: "https://github.com/coti-io",
        demoUrl: "https://coti.io",
        recommendedAI: ["gemini", "openai"],
        difficulty: "beginner",
        welcome: {
          title: "Welcome to AI Enemy Behavior System",
          description: "Create intelligent and challenging enemy AI for your games using behavior trees and state machines."
        }
      },
      {
        id: 3,
        title: "3D Custom Game",
        image: "/images/image2.png",
        mdxPages: [
          "/docs/games/3d-custom-game/01-create-smart-contract.mdx",
          "/docs/games/3d-custom-game/02-setup-game.mdx"
        ],
        tutorialUrl: "https://www.youtube.com/@COTIGroup",
        repositoryUrl: "https://github.com/coti-io",
        demoUrl: "https://coti.io",
        recommendedAI: ["claude", "v0"],
        difficulty: "advance",
        welcome: {
          title: "Welcome to 3D Custom Game",
          description: "Build immersive 3D gaming experiences with advanced rendering and interactive mechanics."
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
        tutorialUrl: "https://www.youtube.com/@COTIGroup",
        repositoryUrl: "https://github.com/coti-io",
        demoUrl: "https://coti.io",
        recommendedAI: ["claude"],
        difficulty: "absolute-beginner",
        welcome: {
          title: "Welcome to CLI Tool Development",
          description: "Build powerful and user-friendly command-line tools that developers love to use."
        }
      },
      {
        id: 2,
        title: "API Documentation Generator",
        image: "/images/image3.jpg",
        mdxPages: [
          "/docs/software/api-documentation-generator/01-overview.mdx"
        ],
        tutorialUrl: "https://www.youtube.com/@COTIGroup",
        repositoryUrl: "https://github.com/coti-io",
        demoUrl: "https://coti.io",
        recommendedAI: ["openai", "gemini"],
        difficulty: "beginner",
        welcome: {
          title: "Welcome to API Documentation Generator",
          description: "Automate API documentation generation from code annotations and OpenAPI specifications."
        }
      }
    ]
  }
];
