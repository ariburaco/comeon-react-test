import { SearchData } from 'pages/api/search/search.type';
import { useState } from 'react';
import { useStore } from 'store';

const UseSearchHook = () => {
  const [search, setSearch] = useState('');
  const setGames = useStore((state) => state.setGames);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchRequest = await fetch(`/api/search?game=${search}`);
    const searchResponse = (await searchRequest.json()) as SearchData;

    setGames(searchResponse.games);
  };

  return { search, handleSearchChange, onFormSubmit };
};

export default UseSearchHook;
