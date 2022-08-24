import { games } from 'mock/mock-data';
import { Game } from 'mock/types';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  games: Game[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    games,
  });
}
