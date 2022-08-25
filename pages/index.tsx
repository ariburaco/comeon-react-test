/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import Games from 'components/Games';
import Header from 'components/Header';
import Logout from 'components/Logout';
import SearchBar from 'components/SearchBar';
import Playerinfo from 'components/Playerinfo';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useStore } from 'store';

const Home: NextPage = () => {
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
          <div className="flex flex-col items-start justify-start w-full p-6 bg-white rounded-md">
            <div className="flex flex-col items-start justify-start w-full gap-4">
              <div className="flex flex-row items-center justify-between w-full">
                <Playerinfo player={player} />
                <SearchBar />
                <Logout />
              </div>
            </div>

            <div className="flex flex-row items-start justify-start">
              <Games games={games} />
              <div className="flex">sdada</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
