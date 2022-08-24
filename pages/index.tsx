/* eslint-disable react/button-has-type */
import Header from 'components/Header';
import UseLoginHook from 'components/LoginForm/useAuthHook';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAuthState from 'store';

const Home: NextPage = () => {
  const isLoggedIn = useAuthState((state) => state.isLoggedIn);
  const player = useAuthState((state) => state.player);
  const router = useRouter();
  const { logoutHandler } = UseLoginHook();

  useEffect(() => {
    if (!isLoggedIn || !player) {
      router.push('/login');
    }
  }, [isLoggedIn, player, router]);

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
