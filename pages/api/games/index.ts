import { games } from 'mock/mock-data';
import type { NextApiRequest, NextApiResponse } from 'next';
import { GameData } from './games.type.';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GameData>
) {
  res.status(200).json({
    games,
  });
}
