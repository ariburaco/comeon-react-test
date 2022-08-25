import { categories } from 'mock/mock-data';
import type { NextApiRequest, NextApiResponse } from 'next';
import { CategoriesData } from './categories.type';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CategoriesData>
) {
  res.status(200).json({
    categories,
  });
}
