import { SearchIcon } from '@heroicons/react/outline';
import { FunctionComponent } from 'react';
import UseSearchHook from './useSearchHook';

const SearchBar: FunctionComponent = () => {
  const { search, handleSearchChange, onFormSubmit } = UseSearchHook();

  return (
    <form onSubmit={onFormSubmit}>
      <label
        htmlFor="search"
        className="relative block text-gray-400 focus-within:text-gray-600"
      >
        <SearchIcon className="absolute w-5 h-5 -translate-y-1/2 top-1/2 right-2 z-99" />
        <input
          type="search"
          name="search"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search Game"
          className="py-2 pl-4 pr-8 bg-white rounded-sm border-[1px] border-base-100/40 focus:border-base-100/80 input-sm outline-none"
        />
      </label>
    </form>
  );
};
export default SearchBar;