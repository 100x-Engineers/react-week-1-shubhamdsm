const Input = ({ placeholder, disabled, handler, type, value }) => {
  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        disabled={disabled}
        onChange={handler}
        type={type}
        value={value}
        id={placeholder}
        className={`px-2.5 pb-2.5 pt-4 w- text-sm 
        text-neutral-500 bg-neutral-1000  border border-solid  border-neutral-500 rounded-lg focus:outline-none focus:ring-0 focus:border-twitter-blue focus:text-neutral-50 peer`}
      />
      <label
        htmlFor={placeholder}
        className="absolute text-sm text-neutral-500 dark:text-neutral-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-1000 dark:bg-neutral-900 px-2 peer-focus:px-2 peer-focus:text-twitter-blue peer-focus:dark:text-twitter-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        {placeholder}
      </label>
    </div>
  );
};
export default Input;
