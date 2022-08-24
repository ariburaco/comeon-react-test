/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { Player } from 'mock/types';
import create, { StoreApi, UseBoundStore } from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';
import createContext from 'zustand/context';
import { useLayoutEffect } from 'react';

let store: any;
type InitialState = AuthState;
type UseStoreState = typeof initializeStore extends (
  ...args: never
) => UseBoundStore<infer T>
  ? T
  : never;

interface AuthState {
  isLoggedIn: boolean;
  player: Player | undefined;
}

const getDefaultInitialState = () =>
  ({
    isLoggedIn: false,
    player: {},
  } as AuthState);

const zustandContext = createContext<UseStoreState>();

export const { Provider, useStore } = zustandContext;

export const initializeStore = (preloadedState = {}) => {
  return create(
    persist(
      combine(
        { ...getDefaultInitialState(), ...preloadedState },
        (set, get) => ({
          isLoggedIn: false,
          player: {} as Player,
          setLoginStatus: (isLoggedIn: boolean) => set(() => ({ isLoggedIn })),
          setPlayer: (player: Player | undefined) => set(() => ({ player })),
        })
      ),
      {
        name: 'auth',
      }
    )
  );
};

export const useCreateStore = (serverInitialState: InitialState) => {
  // For SSR & SSG, always use a new store.
  if (typeof window === 'undefined') {
    return () => initializeStore(serverInitialState);
  }

  const isReusingStore = Boolean(store);
  // For CSR, always re-use same store.
  store = store ?? initializeStore(serverInitialState);
  // And if initialState changes, then merge states in the next render cycle.
  //
  // eslint complaining "React Hooks must be called in the exact same order in every component render"
  // is ignorable as this code runs in same order in a given environment
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    // serverInitialState is undefined for CSR pages. It is up to you if you want to reset
    // states on CSR page navigation or not. I have chosen not to, but if you choose to,
    // then add `serverInitialState = getDefaultInitialState()` here.
    if (serverInitialState && isReusingStore) {
      store.setState(
        {
          // re-use functions from existing store
          ...store.getState(),
          // but reset all other properties.
          ...serverInitialState,
        },
        true // replace states, rather than shallow merging
      );
    }
  });

  return () => store;
};

export default initializeStore;
