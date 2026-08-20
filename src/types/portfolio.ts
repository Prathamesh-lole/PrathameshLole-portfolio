export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'AI & Vision' | 'AI & Computer Vision' | 'AI & Machine Learning' | 'Full Stack' | 'Distributed / Real-Time' | 'Backend Systems' | (string & {});
  year: string;
  status: 'Production' | 'Featured' | 'Experimental' | 'Completed';
  summary: string;
  description: string;
  technologies: string[];
  architecture: string[];
  challenges: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  annotation: string;
  accentColor: string;
}

export interface SkillItem {
  name: string;
  category: 'Languages' | 'Backend' | 'Frontend' | 'AI / ML' | 'Databases' | 'DevOps & Tools';
  wittyNote: string;
  experienceLevel: 'Core / Daily' | 'Advanced' | 'Proficient' | 'Exploring';
  iconName?: string;
  highlight?: boolean;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  quote?: string;
  handwrittenNote: string;
  badge?: string;
  tags: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  skills: string[];
  verifyUrl: string;
  annotation: string;
  badgeColor: string;
}

export interface ExperimentItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  annotation: string;
  type: 'synth' | 'gravity' | 'regex' | 'pixel';
}

export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  icon: string;
  handwrittenNote?: string;
}
