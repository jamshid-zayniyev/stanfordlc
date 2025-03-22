export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  image: string;
}

export interface News {
  id: string;
  title: string;
  content: string;
  date: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
}