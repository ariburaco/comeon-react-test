/* eslint-disable jsx-a11y/anchor-is-valid */
import { ChevronLeftIcon } from '@heroicons/react/outline';
import LaunchGame from 'components/LaunchGame';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import launchGame from 'utils/comeonGames';

const GamePage: NextPage = () => {
  const router = useRouter();
  const { code } = router.query as { code: string };
  const source = launchGame(code);
  return (
    <>
      <Head>
        <title>{code} | Comeon Group</title>
        <meta
          name="description"
          content="Comeon group assignment submission by ali burak ozden"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center w-full gap-4 m-2 mx-auto my-4">
        <div className="flex">
          <Link href="/">
            <a className="flex items-center px-10 font-bold text-white btn btn-primary ">
              <ChevronLeftIcon className="w-6 h-6" />
              <span>Back</span>
            </a>
          </Link>
        </div>
        {source ? (
          <div className="flex justify-center w-full px-4 h-96 ">
            <LaunchGame src={source} />
          </div>
        ) : (
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold text-center">
              Please enter a valid game code
            </h1>
          </div>
        )}
      </div>
    </>
  );
};
export default GamePage;
