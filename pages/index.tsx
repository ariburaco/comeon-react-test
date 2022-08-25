/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import Categories from 'components/Categories';
import Games from 'components/Games';
import Header from 'components/Header';
import LoginForm from 'components/LoginForm';
import Playerinfo from 'components/Playerinfo';
import SearchBar from 'components/SearchBar';
import { Category, Game } from 'mock/types';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useStore } from 'store';
import { getAllCategories, getAllGames } from 'utils/apiHelpers';

interface IndexProps {
  categories: Category[];
  games: Game[];
}

// eslint-disable-next-line react/prop-types
const Home: NextPage<IndexProps> = ({ categories, games: allGames }) => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const player = useStore((state) => state.player);
  const searchedGames = useStore((state) => state.games);

  const [games, setGames] = useState<Game[]>(allGames);

  useEffect(() => {
    if (searchedGames) {
      setGames(searchedGames);
    }
  }, [searchedGames]);

  return (
    <>
      <Head>
        <title>Home | Comeon Group</title>
        <meta
          name="description"
          content="Comeon group assignment submission by ali burak ozden"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-start gap-2 px-4 mx-auto md:px-10">
        <Header />
        {isLoggedIn === true ? (
          <div className="flex flex-col items-start justify-start w-full gap-10 p-6 rounded-md bg-neutral text-base-300 ">
            <div className="flex flex-col items-start justify-start w-full gap-4 pb-6 border-b-2">
              <div className="flex flex-col items-center justify-between w-full gap-6 md:flex-row">
                <Playerinfo player={player} />
                <SearchBar />
              </div>
            </div>

            <div className="grid w-full gap-10 md:grid-cols-4">
              <div className="md:col-span-3">
                <Games games={games} />
              </div>
              <div className="md:col-span-1">
                <Categories categories={categories} />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center w-full py-20 mx-auto bg-white rounded-lg md:w-3/4">
            <LoginForm />
          </div>
        )}
      </div>
    </>
  );
};

Home.getInitialProps = async () => {
  const categories = await getAllCategories();
  const games = await getAllGames();
  return {
    games,
    categories,
  };
};

export default Home;
