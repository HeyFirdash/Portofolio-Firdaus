
export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl: string;
};

export type Skill = {
  name: string;
  category: string;
};

export const projects: Project[] = [
  {
    id: "c++-learning",
    title: "C++ Learning",
    description:
      "Dokumentasi pembelajaran dasar C++.",
    technologies: ["C++"],
    category: "Language",
    githubUrl: "https://github.com/HeyFirdash/Learn-CPP",
  },
  {
    id: "ml-nilaiku",
    title: "Machine Learning NilaiKu",
    description:
      "Model prediksi yang digunakan untuk memprediksi nilai ujian user pada web NilaiKu.",
    technologies: ["Python", "Machine Learning"],
    category: "Machine Learning",
    githubUrl: "https://github.com/HeyFirdash/ML-Nilaiku",
  },
];

export const skills: Skill[] = [
  { name: "Python", category: "Programming" },
  { name: "C++", category: "Programming" },
  { name: "C", category: "Programming"},
  { name: "Git", category: "Tools" },
];
