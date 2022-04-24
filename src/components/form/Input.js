
const Input = (props) => {
  return (
    <input 
        className={`border p-3 outline-none ${props.className}`} 
        placeholder="Voucher code"
        />
  );
}


export default Input;