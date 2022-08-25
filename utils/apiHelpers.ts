import { Category, Game, Player } from 'mock/types';
import { CategoriesData } from 'pages/api/categories/categories.type';
import { GameData } from 'pages/api/games/games.type.';
import { LoginData } from 'pages/api/login/login.type';

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
