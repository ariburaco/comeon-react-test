import { SearchIcon } from '@heroicons/react/outline';
import { FunctionComponent } from 'react';
import UseSearchHook from './useSearchHook';

const SearchBar: FunctionComponent = () => {
  const { search, handleSearchChange, onFormSubmit } = UseSearchHook();

  return (
    <form
      className="flex items-center w-full gap-2 md:w-fit"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label
        htmlFor="search"
        className="relative block w-full text-gray-400 focus-within:text-gray-600 md:w-fit"
      >
        <SearchIcon className="absolute w-5 h-5 -translate-y-1/2 top-1/2 right-2 z-99" />
        <input
          type="search"
          name="search"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search Game"
          className="w-full md:w-fit py-2 pl-4 pr-8 bg-white rounded-sm border-[1px] border-base-100/40 focus:border-base-100/80 input-sm outline-none"
        />
      </label>
      <button
        type="submit"
        className="text-white  btn btn-primary btn-sm"
        onClick={() => onFormSubmit()}
      >
        Search
      </button>
    </form>
  );
};
export default SearchBar;
