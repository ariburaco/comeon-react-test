import { Player } from 'mock/types';

export type LoginData = {
  status: string;
  error?: string;
  player?: Player;
};
