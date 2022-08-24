import { players } from 'mock/mock-data';
import { Player } from 'mock/types';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  status: string;
  error?: string;
  player?: Player;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const userName: string = req.body.userName as string;
  const password: string = req.body.password as string;

  const player: Player | undefined = players.find(
    (p) => p.name === userName && p.password === password
  );

  if (player === undefined) {
    res.status(200).json({
      status: 'error',
      error: 'Invalid username or password',
    });
  }

  res.status(200).json({
    status: 'success',
    player,
  });
}
