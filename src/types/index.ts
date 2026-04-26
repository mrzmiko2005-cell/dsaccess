export type PageId = 'home' | 'about' | 'products' | 'news' | 'contacts';

export interface NewsItem {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Project {
  id: number;
  image: string;
  title: string;
  category: string;
  location: string;
}

export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
}

export interface Partner {
  id: number;
  name: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}
