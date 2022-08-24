import { players } from 'mock/mock-data';
import { Player } from 'mock/types';
import type { NextApiRequest, NextApiResponse } from 'next';
import { LoginData } from './login.type';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginData>
) {
  const { username, password } = JSON.parse(req.body) as {
    username: string;
    password: string;
  };

  const player: Player | undefined = players.find(
    (p) => p.username === username && p.password === password
  );

  if (player === undefined) {
    return res.status(400).json({
      status: 'error',
      error: 'Invalid username or password',
    });
  }

  return res.status(200).json({
    status: 'success',
    player,
  });
}
