import { games } from 'mock/mock-data';
import type { NextApiRequest, NextApiResponse } from 'next';
import { GetGamesByCategoryData } from './getGamesByCategory.type';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetGamesByCategoryData>
) {
  const { categoryId } = req.query as { categoryId: string };

  const categoryGames = games.filter((game) =>
    game.categoryIds.includes(+categoryId)
  );

  res.status(200).json({
    games: categoryGames,
  });
}
