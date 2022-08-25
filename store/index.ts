/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { Game, Player } from 'mock/types';
import { useEffect, useState } from 'react';
import { getAllGames } from 'utils/apiHelpers';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  player: Player | undefined;
  games: Game[];
  setLoginStatus: (isLoggedIn: boolean) => void;
  setPlayer: (player: Player | undefined) => void;
  setGames: (games: Game[]) => void;
}

export const authStore = create<AuthState>()(
  persist(
    devtools((set) => ({
      isLoggedIn: false,
      player: undefined,
      games: [],
      setLoginStatus: (isLoggedIn) => set(() => ({ isLoggedIn })),
      setPlayer: async (player) => {
        set(() => ({ player }));
        if (player === undefined) {
          set(() => ({ games: [] }));
        } else {
          const games = await getAllGames();
          set(() => ({ games }));
        }
      },
      setGames: (games) => set(() => ({ games })),
    })),
    {
      name: 'auth',
    }
  )
);

export const useStore = ((selector, compare) => {
  const store = authStore(selector, compare);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  return hydrated ? store : selector({} as AuthState);
}) as typeof authStore;
