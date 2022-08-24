import { categories } from 'mock/mock-data';
import { Category } from 'mock/types';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  categories: Category[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    categories,
  });
}
