import { Category } from 'mock/types';
import { FunctionComponent } from 'react';

interface CategoriesProps {
  categories: Category[];
}

const Categories: FunctionComponent<CategoriesProps> = ({ categories }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-zinc-900 ">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li
            className="py-1 font-bold no-underline link text-zinc-900 link-primary"
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
