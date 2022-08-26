import { players } from 'mock-data';
import type { NextApiRequest, NextApiResponse } from 'next';
import { LogoutData, Player } from 'types';

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
