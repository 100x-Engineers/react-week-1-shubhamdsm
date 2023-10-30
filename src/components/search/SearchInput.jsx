const SearchInput = ({ type, placeholder, value, handler }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handler}
      className="px-2.5 pb-2.5 pt-4 border-2 bg-search-bar-fill border-neutral-600 text-neutral-600 rounded-full focus:text-neutral-50 focus:border-twitter-blue focus:outline-none focus:ring-0  "
    />
  );
};
export default SearchInput;
