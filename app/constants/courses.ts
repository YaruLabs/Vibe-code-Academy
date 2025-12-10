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
        title: "Staking System Smart Contract",
        image: "/images/image1.jpg",
        mdxPages: [
          "/docs/blockchain/staking-system/01-setup-project.mdx",
          "/docs/blockchain/staking-system/02-implement-staking-logic.mdx",
          "/docs/blockchain/staking-system/03-rewards-system.mdx",
          "/docs/blockchain/staking-system/04-deploy-verify.mdx"
        ],
        tutorialUrl: "https://www.youtube.com/@COTIGroup",
        repositoryUrl: "https://github.com/coti-io/coti-contracts",
        demoUrl: "https://docs.coti.io",
        recommendedAI: ["cotiMcp", "claude"],
        difficulty: "advance",
        welcome: {
          title: "Build a Privacy-Preserving Staking System",
          description: "Master advanced blockchain development by creating a production-grade staking smart contract with complete privacy using COTI's MPC technology. Learn to implement encrypted staking, time-based rewards, and secure fund management on-chain."
        }
      },
      {
        id: 2,
        title: "Privacy-First DAO Governance Platform",
        image: "/images/image1.jpg",
        mdxPages: [
          "/docs/blockchain/dao-system/01-setup-project.mdx",
          "/docs/blockchain/dao-system/02-implement-governance-logic.mdx",
          "/docs/blockchain/dao-system/03-voting-system.mdx",
          "/docs/blockchain/dao-system/04-deploy-verify.mdx"
        ],
        tutorialUrl: "https://www.youtube.com/@COTIGroup",
        repositoryUrl: "https://github.com/coti-io/coti-contracts",
        demoUrl: "https://docs.coti.io",
        recommendedAI: ["cotiMcp", "claude"],
        difficulty: "advance",
        welcome: {
          title: "Build a Privacy-Preserving DAO Governance Platform",
          description: "Master advanced blockchain governance by creating a production-grade DAO with complete privacy using COTI's MPC technology. Learn to implement encrypted voting, confidential proposals, secure vote tallying, and transparent execution while keeping individual votes private."
        }
      },
      {
        id: 3,
        title: "Private Token Faucet",
        image: "/images/image1.jpg",
        mdxPages: [
          "/docs/blockchain/token-faucet/01-setup-project.mdx",
          "/docs/blockchain/token-faucet/02-implement-faucet-logic.mdx",
          "/docs/blockchain/token-faucet/03-deploy-verify.mdx"
        ],
        tutorialUrl: "https://www.youtube.com/@COTIGroup",
        repositoryUrl: "https://github.com/coti-io/coti-contracts",
        demoUrl: "https://docs.coti.io",
        recommendedAI: ["cotiMcp", "claude"],
        difficulty: "beginner",
        welcome: {
          title: "Build Your First Private Token Faucet",
          description: "Perfect for beginners! Learn blockchain privacy fundamentals by building a token faucet that distributes tokens with encrypted amounts. Understand MPC basics, encrypted data types, and deploy your first privacy-preserving smart contract on COTI."
        }
      },
      {
        id: 4,
        title: "NFT Royalties System (ERC721)",
        image: "/images/image1.jpg",
        mdxPages: [
          "/docs/blockchain/nft-royalties/01-setup-project.mdx",
          "/docs/blockchain/nft-royalties/02-implement-erc721.mdx",
          "/docs/blockchain/nft-royalties/03-royalties-logic.mdx",
          "/docs/blockchain/nft-royalties/04-marketplace-integration.mdx",
          "/docs/blockchain/nft-royalties/05-deploy-verify.mdx"
        ],
        tutorialUrl: "https://www.youtube.com/@COTIGroup",
        repositoryUrl: "https://github.com/coti-io/coti-contracts",
        demoUrl: "https://docs.coti.io",
        recommendedAI: ["cotiMcp", "claude"],
        difficulty: "advance",
        welcome: {
          title: "Build a Privacy-Preserving NFT Royalties System",
          description: "Learn to create a complete ERC721-based NFT royalties system with COTI's privacy features. Implement on-chain royalty tracking, automatic creator payments on secondary sales, and encrypted royalty amounts using MPC technology."
        }
      },
      {
        id: 5,
        title: "Real World Assets (RWA) Tokenization",
        image: "/images/image1.jpg",
        mdxPages: [
          "/docs/blockchain/rwa-tokenization/01-setup-project.mdx",
          "/docs/blockchain/rwa-tokenization/02-asset-token-contract.mdx",
          "/docs/blockchain/rwa-tokenization/03-compliance-kyc.mdx",
          "/docs/blockchain/rwa-tokenization/04-dividend-distribution.mdx",
          "/docs/blockchain/rwa-tokenization/05-marketplace-trading.mdx",
          "/docs/blockchain/rwa-tokenization/06-deploy-verify.mdx"
        ],
        tutorialUrl: "https://www.youtube.com/@COTIGroup",
        repositoryUrl: "https://github.com/coti-io/coti-contracts",
        demoUrl: "https://docs.coti.io",
        recommendedAI: ["cotiMcp", "claude"],
        difficulty: "advance",
        welcome: {
          title: "Build a Privacy-Preserving RWA Tokenization Platform",
          description: "Master real-world asset tokenization by building a complete RWA platform with COTI's privacy features. Learn to tokenize physical assets (real estate, commodities, art), implement compliant transfers with encrypted KYC, distribute dividends privately, and enable secure secondary market trading."
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
      },
      {
        id: 2,
        title: "Build a Crypto E-Commerce iOS App",
        image: "/images/image3.jpg",
        mdxPages: [
          "/docs/software/crypto-ecommerce-ios/01-project-architecture-setup.mdx",
          "/docs/software/crypto-ecommerce-ios/02-smart-contracts-deployment.mdx",
          "/docs/software/crypto-ecommerce-ios/03-product-catalog-ui.mdx",
          "/docs/software/crypto-ecommerce-ios/04-wallet-integration.mdx",
          "/docs/software/crypto-ecommerce-ios/05-payment-flow.mdx",
          "/docs/software/crypto-ecommerce-ios/06-order-management.mdx"
        ],
        tutorialUrl: "https://www.youtube.com/@COTIGroup",
        repositoryUrl: "https://github.com/coti-io",
        demoUrl: "https://coti.io",
        recommendedAI: ["cotiMcp", "claude"],
        difficulty: "advance",
        welcome: {
          title: "Build a Production-Ready Crypto E-Commerce Platform",
          description: "Master the complete development of a professional iOS e-commerce app with COTI blockchain payments, smart contracts, and enterprise-grade architecture."
        }
      },
      {
        id: 3,
        title: "DeFi Swap Mobile App (Uniswap-Style)",
        image: "/images/image3.jpg",
        mdxPages: [
          "/docs/software/defi-swap-app/01-project-architecture.mdx",
          "/docs/software/defi-swap-app/02-amm-smart-contracts.mdx",
          "/docs/software/defi-swap-app/03-liquidity-pools.mdx",
          "/docs/software/defi-swap-app/04-swap-interface.mdx",
          "/docs/software/defi-swap-app/05-wallet-integration.mdx",
          "/docs/software/defi-swap-app/06-analytics-dashboard.mdx"
        ],
        tutorialUrl: "https://www.youtube.com/@COTIGroup",
        repositoryUrl: "https://github.com/coti-io/coti-contracts",
        demoUrl: "https://docs.coti.io",
        recommendedAI: ["cotiMcp", "claude"],
        difficulty: "advance",
        welcome: {
          title: "Build a Privacy-Preserving DEX Mobile App",
          description: "Master DeFi development by building a complete Uniswap-style decentralized exchange with privacy features. Create AMM smart contracts, liquidity pools, and a professional iOS app with WalletConnect integration, all powered by COTI's MPC technology for encrypted swaps and balances."
        }
      }
    ]
  }
];
