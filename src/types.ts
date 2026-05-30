import { LucideIcon } from 'lucide-react';

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Benefit {
  title: string;
  icon: LucideIcon;
}

export interface Device {
  name: string;
  icon: LucideIcon;
}

export interface Library {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Advantage {
  text: string;
}
