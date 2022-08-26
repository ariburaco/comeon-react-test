import Categories from 'components/Categories';
import Games from 'components/Games';
import Header from 'components/Header';
import LoginForm from 'components/LoginForm';
import Playerinfo from 'components/Playerinfo';
import SearchBar from 'components/SearchBar';
import useHomeHook from 'hooks/useHomeHook';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Category, Game } from 'types';
import { getAllCategories, getAllGames } from 'utils/apiHelpers';

interface HomeProps {
  categories: Category[];
  allGames: Game[];
}

const Home: NextPage<HomeProps> = ({ categories, allGames }: HomeProps) => {
  const { player, isLoggedIn, searchResult } = useHomeHook();
  const [games, setGames] = useState<Game[]>(searchResult || allGames);

  useEffect(() => {
    if (searchResult) {
      setGames(searchResult);
    }
  }, [searchResult]);

  if (!isLoggedIn && !player) {
    return <LoginForm />;
  }

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
      <div className="flex flex-col items-center justify-start gap-2 px-4 mx-auto mb-10 md:px-10">
        <Header />
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
      </div>
    </>
  );
};

Home.getInitialProps = async () => {
  const categories = await getAllCategories();
  const allGames = await getAllGames();
  return {
    allGames,
    categories,
  };
};

export default Home;
