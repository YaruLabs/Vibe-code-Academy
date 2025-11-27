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
        content: `You are an expert smart contract security auditor specializing in Solidity and EVM-based blockchains. Your task is to conduct a comprehensive security audit of the provided smart contract code.

Please analyze the contract for:
- Common vulnerabilities (reentrancy, overflow/underflow, access control issues)
- Gas optimization opportunities
- Best practices and code quality
- Logic errors and edge cases
- Integration risks with other contracts

Provide a detailed report with severity levels (Critical, High, Medium, Low) and specific recommendations for remediation.`
      },
      {
        id: 2,
        title: "DeFi Protocol Development",
        image: "/images/image1.jpg",
        content: `You are a DeFi protocol architect with deep knowledge of decentralized finance mechanisms, tokenomics, and smart contract development.

Design and implement a DeFi protocol that includes:
- Token mechanics and distribution model
- Liquidity provision and farming strategies
- Governance structure
- Risk management and security measures
- Integration with existing DeFi protocols

Ensure the protocol is gas-efficient, secure, and provides clear value to users.`
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
        content: `You are a game developer specializing in 2D platformer mechanics and player controls.

Create a responsive 2D platformer movement system with:
- Smooth character movement and jumping physics
- Variable jump height based on input duration
- Coyote time and jump buffering for better feel
- Wall sliding and wall jumping mechanics
- Ground detection and slope handling
- Momentum-based movement for satisfying controls

Implement using a physics-based approach with proper collision detection and response.`
      },
      {
        id: 2,
        title: "AI Enemy Behavior System",
        image: "/images/image2.png",
        content: `You are an AI programmer focused on creating engaging enemy behaviors for games.

Design and implement an AI behavior system featuring:
- State machine for enemy behaviors (patrol, chase, attack, flee)
- Pathfinding using A* or similar algorithms
- Dynamic difficulty adjustment based on player performance
- Group tactics and coordination between enemies
- Perception system (sight, hearing) with realistic detection
- Performance optimization for multiple AI agents

Make the AI challenging but fair, with clear telegraph of actions.`
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
        content: `You are a developer tools specialist with expertise in building developer-friendly CLI applications.

Create a powerful CLI tool with:
- Intuitive command structure and subcommands
- Rich help documentation and examples
- Interactive prompts for complex operations
- Progress indicators and colored output
- Configuration file support
- Error handling with helpful messages
- Auto-completion for shells (bash, zsh)

Use modern CLI frameworks and follow Unix philosophy principles.`
      },
      {
        id: 2,
        title: "API Documentation Generator",
        image: "/images/image3.jpg",
        content: `You are a technical documentation expert specializing in API documentation generation.

Build an automated API documentation generator that:
- Parses code and extracts API endpoints, parameters, and responses
- Generates interactive documentation (like Swagger/OpenAPI)
- Includes code examples in multiple languages
- Provides live API testing interface
- Supports versioning and changelog tracking
- Generates both static HTML and interactive sites
- Integrates with CI/CD pipelines

Ensure documentation is always in sync with code.`
      }
    ]
  }
];
