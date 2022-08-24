/* eslint-disable react/button-has-type */
import Header from 'components/Header';
import UseLoginHook from 'components/LoginForm/useAuthHook';
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { initializeStore, useStore } from 'store';
import shallow from 'zustand/shallow';

const Home: NextPage = () => {
  const { isLoggedIn, player } = useStore(
    (store) => ({
      isLoggedIn: store.isLoggedIn,
      player: store.player,
    }),
    shallow
  );

  const router = useRouter();
  const { logoutHandler } = UseLoginHook();

  useEffect(() => {
    if (!isLoggedIn || !player) {
      router.push('/login');
    }
  }, [isLoggedIn, player]);

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
      <div className="container flex flex-col items-center justify-start gap-2 px-5 mx-auto">
        <Header />
        {isLoggedIn && (
          <div className="flex flex-col items-start justify-start w-full p-6 bg-white rounded-md">
            <div className="flex flex-col items-start justify-start w-full gap-4">
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    priority
                    className="rounded-full"
                    src={player!.avatar}
                    alt={player!.name}
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col items-start justify-start text-base-300">
                    <h1 className="font-bold text-md">{player!.name}</h1>
                    <p className="text-sm font-semibold text-gray-500">
                      {player!.event}
                    </p>
                  </div>
                  <button
                    onClick={() => logoutHandler()}
                    className="btn btn-secondary"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async () => {
  const zustandStore = initializeStore();
  const initialState = JSON.parse(JSON.stringify(zustandStore.getState()));

  console.log(
    '🚀 ~ file: index.tsx ~ line 79 ~ constgetServerSideProps:GetServerSideProps= ~ initialState',
    initialState
  );
  return {
    props: {
      // the "stringify and then parse again" piece is required as next.js
      // isn't able to serialize it to JSON properly
      initialZustandState: initialState,
    },
  };
};
