const Button = (props) => {
  return (
    <button
      className={`px-6 py-2  ${props.className}`}
      label={props.label}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
    >
      <div>{props.label}</div>
    </button>
  );
};
export default Button;
