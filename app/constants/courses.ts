import { Course } from "../types/course";

export const courses: Course[] = [
  {
    id: 1,
    image: "/images/image1.jpg",
    title: "Blockchain",
    description: "Vibe-coding smart contracts",
    category: "blockchain",
    prompts: []
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
          title: "Build a basic 2D Game",
          description: "Create a simple 2D action game that integrates on-chain rewards, where every jump, coin pickup, and level completion can trigger secure smart contract interactions."
        }
      },
      {
        id: 2,
        title: "Game + Custom Private Token",
        image: "/images/image2.png",
        mdxPages: [
          "/docs/games/2d-custom-game/01-create-private-custom-token.mdx",
          "/docs/games/2d-custom-game/02-setup-game.mdx",
          "/docs/games/2d-custom-game/03-intregration.mdx"
        ],
        tutorialUrl: "https://www.youtube.com/@COTIGroup",
        repositoryUrl: "https://github.com/coti-io",
        demoUrl: "https://coti.io",
        recommendedAI: ["cotiMcp", "v0"],
        difficulty: "beginner",
        welcome: {
          title: "Building a Basic 2D Game with Custom Smart Contracts",
          description: "Learn how to build a basic 2D game from scratch and seamlessly connect it to your own custom smart contracts."
        }
      },
      {
        id: 3,
        title: "3D Custom Game",
        image: "/images/image2.png",
        mdxPages: [
          "/docs/games/3d-custom-game/01-create-smart-contract.mdx",
          "/docs/games/3d-custom-game/02-setup-game.mdx",
          "/docs/games/3d-custom-game/03-integration.mdx"
        ],
        tutorialUrl: "https://www.youtube.com/@COTIGroup",
        repositoryUrl: "https://github.com/coti-io",
        demoUrl: "https://coti.io",
        recommendedAI: ["cotiMcp", "v0"],
        difficulty: "advance",
        welcome: {
          title: "Begin Your Journey Inside Your Custom 3D World",
          description: "Create Immersive 3D Games with Advanced Rendering and Interaction"
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
        title: "Build a crypto Mobile App",
        image: "/images/image3.jpg",
        mdxPages: [
          "/docs/software/crypto-mobile-app/01-setup-mobile-environment.mdx",
          "/docs/software/crypto-mobile-app/02-create-wallet-integration.mdx",
          "/docs/software/crypto-mobile-app/03-build-ui.mdx"
        ],
        tutorialUrl: "https://www.youtube.com/@COTIGroup",
        repositoryUrl: "https://github.com/coti-io",
        demoUrl: "https://coti.io",
        recommendedAI: ["cotiMcp", "v0"],
        difficulty: "absolute-beginner",
        welcome: {
          title: "Build Your First Crypto Mobile App",
          description: "Learn how to create a mobile application with cryptocurrency wallet integration and blockchain interactions from scratch."
        }
      }
    ]
  }
];
