import { players } from 'mock/mock-data';
import { Player } from 'mock/types';
import type { NextApiRequest, NextApiResponse } from 'next';
import { LogoutData } from './logout.type';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LogoutData>
) {
  const { username } = JSON.parse(req.body) as { username: string };

  const player: Player | undefined = players.find(
    (p) => p.username === username
  );

  if (player === undefined) {
    return res.status(400).json({
      status: 'error',
      error: 'Username do not match!',
    });
  }

  return res.status(200).json({
    status: 'success',
  });
}
