import { games } from 'mock/mock-data';
import type { NextApiRequest, NextApiResponse } from 'next';
import { SearchData } from './search.type';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchData>
) {
  const q = req.query.game as string;

  const filteredGames = q
    ? games.filter((game) => game.name.toLowerCase().includes(q.toLowerCase()))
    : games;

  return res.status(200).json({
    games: filteredGames,
  });
}
