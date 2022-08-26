import { Game, Player } from 'types';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  player: Player | undefined;
  games: Game[];
  setPlayer: (player: Player | undefined, isLoggedIn: boolean) => void;
  setGames: (games: Game[]) => void;
}

export const useStore = create<AuthState>()(
  persist(
    devtools((set) => ({
      isLoggedIn: false,
      player: undefined,
      games: [],
      setPlayer: async (player, isLoggedIn) => {
        set(() => ({ player, isLoggedIn }));
      },
      setGames: (games) => set(() => ({ games })),
    })),
    {
      name: 'auth',
    }
  )
);

export default useStore;
