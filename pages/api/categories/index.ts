import { categories } from 'mock-data';
import type { NextApiRequest, NextApiResponse } from 'next';
import { CategoriesData } from 'types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CategoriesData>
) {
  res.status(200).json({
    categories,
  });
}
