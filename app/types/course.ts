export interface Prompt {
  id: number;
  title: string;
  image: string;
  mdxPath: string;
}

export interface Course {
  id: number;
  image: string;
  title: string;
  description: string;
  prompts: Prompt[];
  category: "blockchain" | "games" | "software";
}
