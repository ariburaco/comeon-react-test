export interface Category {
  id: number;
  name: string;
}

export interface Game {
  name: string;
  description: string;
  code: string;
  icon: string;
  categoryIds: number[];
}

export interface Player {
  name: string;
  slug: string;
  avatar: string;
  event: string;
  password: string;
}
