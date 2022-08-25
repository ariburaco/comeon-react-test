/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import { ChevronRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { GamesProps } from './games.type';

const Games: FunctionComponent<GamesProps> = ({ games }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-start justify-start w-full gap-10">
        {games.length > 0 ? (
          games.map((game) => (
            <div
              key={game.code}
              className="grid items-center gap-2 md:grid-cols-5"
            >
              <div className="flex justify-center col-span-1">
                <Image
                  priority
                  src={game!.icon}
                  alt={game!.name}
                  width={144}
                  height={144}
                />
              </div>
              <div className="flex flex-col items-end justify-between col-span-4 gap-6">
                <div className="flex flex-col items-start justify-start gap-2">
                  <h1 className="text-base font-bold text-base-300">
                    {game.name}
                  </h1>
                  <p className="text-xs font-semibold text-justify text-gray-500 md:text-sm">
                    {game.description}
                  </p>
                </div>
                <Link href={`/game?code=${game.code}`}>
                  <a className="flex items-center font-bold text-white btn btn-primary">
                    <span>Play</span>
                    <ChevronRightIcon className="w-6 h-6" />
                  </a>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <h1> No games found </h1>
        )}
      </div>
    </div>
  );
};
export default Games;
