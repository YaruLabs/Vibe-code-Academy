export interface Prompt {
  id: number;
  title: string;
  image: string;
  mdxPages: string[];
  tutorialUrl?: string;
  repositoryUrl?: string;
  demoUrl?: string;
  recommendedAI: string[];
  difficulty: "absolute-beginner" | "beginner" | "advance";
  welcome: {
    title: string;
    description: string;
  };
}

export interface Course {
  id: number;
  image: string;
  title: string;
  description: string;
  prompts: Prompt[];
  category: "blockchain" | "games" | "software";
}
