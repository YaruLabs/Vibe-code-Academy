export interface Prompt {
  id: number;
  title: string;
  image: string;
  mdxPages: string[];
  tutorialUrl: string;
  repositoryUrl: string;
  recommendedAI: string[];
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
