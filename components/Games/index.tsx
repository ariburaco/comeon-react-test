/* eslint-disable react/no-array-index-key */
import { FunctionComponent } from 'react';
import { GamesProps } from './games.type';

const Games: FunctionComponent<GamesProps> = ({ games }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-start justify-start w-full gap-4">
        {games.length > 0 ? (
          games.map((game, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-start w-full gap-4"
            >
              {game.name}
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
