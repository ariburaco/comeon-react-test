import { Category } from 'mock/types';
import { FunctionComponent } from 'react';
import UseGamesByCategoryHook from './useGamesByCategoryHook';

interface CategoriesProps {
  categories: Category[];
}

const Categories: FunctionComponent<CategoriesProps> = ({ categories }) => {
  const { getGamesByCategoryHandler } = UseGamesByCategoryHook();

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-zinc-900">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li
            className="py-2 font-bold no-underline link text-zinc-900 link-primary"
            key={category.id}
          >
            <button
              type="button"
              className="w-full h-full text-start"
              onClick={() => getGamesByCategoryHandler(category.id)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
