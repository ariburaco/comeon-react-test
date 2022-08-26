import { useStore } from 'store';

const UseHomeHook = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const player = useStore((state) => state.player);
  const searchResult = useStore((state) => state.games);

  return { player, isLoggedIn, searchResult };
};

export default UseHomeHook;
