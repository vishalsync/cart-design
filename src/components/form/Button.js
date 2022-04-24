
const Button = (props) => {
  return (
    <button 
      className={`h-[40px] px-4 bg-blue-500 rounded text-white text-xs ${props.className}`}
      >
      {props.children}
    </button>
  );
}


export default Button;