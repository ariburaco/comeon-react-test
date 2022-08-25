import { Category } from 'mock/types';
import { FunctionComponent } from 'react';

interface CategoriesProps {
  categories: Category[];
}

const Categories: FunctionComponent<CategoriesProps> = ({ categories }) => {
  // const [categories, setCategories] = useState<Category[]>([]);

  // useEffect(() => {
  //   getAllCategories().then((result) => setCategories(result));
  // }, []);

  return (
    <div className="prose max-w-none">
      <h2 className="!text-zinc-900">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li
            className="font-bold no-underline link text-zinc-900 link-primary"
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
