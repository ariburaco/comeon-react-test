import {
  GameData,
  Game,
  CategoriesData,
  Category,
  GetGamesByCategoryData,
  LoginData,
  Player,
  SearchData,
} from 'types';

const API_URL = process.env.NEXT_PUBLIC_URL || '';

export const getAllGames = async () => {
  const request = await fetch(`${API_URL}/api/games`);
  const response = (await request.json()) as GameData;
  return (response.games as Game[]) || [];
};

export const getAllCategories = async () => {
  const request = await fetch(`${API_URL}/api/categories`);
  const response = (await request.json()) as CategoriesData;
  return (response.categories as Category[]) || [];
};

export const getGamesByCategory = async (id: number) => {
  const request = await fetch(
    `${API_URL}/api/getGamesByCategory?categoryId=${id}`
  );
  const response = (await request.json()) as GetGamesByCategoryData;
  return (response.games as Game[]) || [];
};

export const loginCall = async (username: string, password: string) => {
  const loginRequest = await fetch(`${API_URL}/api/login`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const loginResponse = (await loginRequest.json()) as LoginData;
  return loginResponse;
};

export const logoutCall = async (player: Player) => {
  const logoutRequest = await fetch(`${API_URL}/api/logout`, {
    method: 'POST',
    body: JSON.stringify({
      username: player!.username,
    }),
  });

  const logoutResponse = (await logoutRequest.json()) as LoginData;
  return logoutResponse;
};

export const searchGame = async (gameName: string) => {
  const searchRequest = await fetch(`${API_URL}/api/search?game=${gameName}`);
  const searchResponse = (await searchRequest.json()) as SearchData;
  return (searchResponse.games as Game[]) || [];
};
