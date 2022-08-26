import { useState } from 'react';
import { useStore } from 'store';
import { searchGame } from 'utils/apiHelpers';

const UseSearchHook = () => {
  const [search, setSearch] = useState('');
  const setGames = useStore((state) => state.setGames);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onFormSubmit = async () => {
    const searchResponse = await searchGame(search);
    setGames(searchResponse);
  };

  return { search, handleSearchChange, onFormSubmit };
};

export default UseSearchHook;
