import { games } from 'mock-data';
import type { NextApiRequest, NextApiResponse } from 'next';
import { GameData } from 'types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GameData>
) {
  res.status(200).json({
    games,
  });
}
