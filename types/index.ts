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
  username: string;
  avatar: string;
  event: string;
  password: string;
}

export type SearchData = {
  games: Game[] | [];
};

export type LogoutData = {
  status: string;
  error?: string;
};

export type LoginData = {
  status: string;
  error?: string;
  player?: Player;
};

export type GetGamesByCategoryData = {
  games: Game[] | [];
};

export type GameData = {
  games: Game[];
};

export type CategoriesData = {
  categories: Category[] | [];
};
