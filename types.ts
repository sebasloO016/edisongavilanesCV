export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  size: 'small' | 'medium' | 'large'; // For Bento Grid
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillItem {
  name: string;
  color: string;
  level: number;
}