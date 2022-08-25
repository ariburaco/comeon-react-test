/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import Categories from 'components/Categories';
import Games from 'components/Games';
import Header from 'components/Header';
import Playerinfo from 'components/Playerinfo';
import SearchBar from 'components/SearchBar';
import { Category } from 'mock/types';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useStore } from 'store';
import { getAllCategories } from 'utils/apiHelpers';

interface IndexProps {
  categories: Category[];
}

// eslint-disable-next-line react/prop-types
const Home: NextPage<IndexProps> = ({ categories }) => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const player = useStore((state) => state.player);
  const games = useStore((state) => state.games);

  // const router = useRouter();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.push('/login');
  //   }
  // }, [isLoggedIn]);

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
      <div className="container flex flex-col items-center justify-start gap-2 px-10 mx-auto">
        <Header />
        {isLoggedIn && (
          <div className="flex flex-col items-start justify-start w-full gap-10 p-6 rounded-md bg-neutral text-base-300">
            <div className="flex flex-col items-start justify-start w-full gap-4">
              <div className="flex flex-col items-center justify-between w-full gap-6 md:flex-row">
                <Playerinfo player={player} />
                <SearchBar />
              </div>
            </div>

            <div className="grid w-full grid-rows-2 gap-10 md:grid-cols-4">
              <div className="row-span-1 md:col-span-3">
                <Games games={games} />
              </div>
              <div className="row-span-1 md:col-span-1">
                <Categories categories={categories} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

Home.getInitialProps = async () => {
  const categories = await getAllCategories();
  return {
    categories,
  };
};

export default Home;
