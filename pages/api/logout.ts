import { players } from 'mock/mock-data';
import { Player } from 'mock/types';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  status: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const userName: string = req.body.userName as string;

  const player: Player | undefined = players.find((p) => p.name === userName);

  if (player === undefined) {
    res.status(200).json({
      status: 'error',
      error: 'Username do not match!',
    });
  }

  res.status(200).json({
    status: 'success',
  });
}
