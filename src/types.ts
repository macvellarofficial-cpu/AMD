export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  specs: {
    purity: string;
    weight: string;
    origin: string;
    form: string;
    packaging: string;
  };
  features: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface ProcedureStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
  status: string;
}

export interface ExportDoc {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  requiredFor: string;
  authority: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  focusKeyword: string;
}
