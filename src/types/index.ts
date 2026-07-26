export interface PersonalInfo {
  name: string;
  firstName: string;
  title: string;
  headline: string;
  subHeadline: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  profileImage: string;
  resumeUrl: string;
  aboutBio: string[];
  strengths: string[];
  careerObjective: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 0-100
    iconName?: string;
    description?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string; // 'Full Stack' | 'Frontend' | 'Java / Spring Boot' | 'ASP.NET Core'
  description: string;
  fullDescription: string;
  image: string;
  featured: boolean;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureHighlights: string[];
  role: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  roleType: 'Internship' | 'Training' | 'Hands-on Practice' | 'Self-Learning';
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  result: string;
  scoreType: 'CGPI' | 'Percentage';
  highlights: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  description: string;
  verifyUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  icon: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  socials: SocialLink[];
  heroTitles: string[];
  stats: StatItem[];
  skillCategories: SkillCategory[];
  projects: Project[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
  achievements: AchievementItem[];
}
