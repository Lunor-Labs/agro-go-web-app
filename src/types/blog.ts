export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string;
    author: {
      name: string;
      avatar: string;
    };
    date: string;
    readTime: string;
    category: string;
    tags: string[];
  }