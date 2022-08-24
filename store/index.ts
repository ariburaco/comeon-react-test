/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { Player } from 'mock/types';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  setLoginStatus: (isLoggedIn: boolean) => void;
  player: Player | undefined;
  setPlayer: (player: Player | undefined) => void;
}

const useAuthState = create<AuthState>()(
  persist(
    devtools((set) => ({
      isLoggedIn: false,
      player: undefined,
      setLoginStatus: (isLoggedIn) => set(() => ({ isLoggedIn })),
      setPlayer: (player) => set(() => ({ player })),
    })),
    {
      name: 'auth',
    }
  )
);

export default useAuthState;
