import { useStore } from 'store';
import { getGamesByCategory } from 'utils/apiHelpers';

const UseGamesByCategoryHook = () => {
  const setGames = useStore((state) => state.setGames);

  const getGamesByCategoryHandler = async (id: number) => {
    const games = await getGamesByCategory(id);
    setGames(games);
  };

  return { getGamesByCategoryHandler };
};

export default UseGamesByCategoryHook;
