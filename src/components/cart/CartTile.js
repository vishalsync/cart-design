const CartTile = (props) => {

    const { title, price, quantity, unitPrice, imageUrl, alt } = props;



    return (
        <div className="border-b border-gray-100 py-8 grid grid-cols-12 place-items-centers ">
            <div className="col-span-7 flex items-center space-x-4">
                <div>
                    <button className="shadow text-red-800 h-6 w-6 rounded-full flex justify-center items-center bg-white">x</button>
                </div>
                <img 
                    src={imageUrl} 
                    alt={alt} 
                    className="w-32"
                    />
                <p className="font-semibold w-full pl-16">{title}</p>
            </div>

            <div className="col-span-5">
                <div className="flex justify-between items-center mt-5">
                    <p>${price}</p>
                    <div className="bg-gray-100 rounded">
                        <button className="px-3 py-1  font-semibold text-blue-500 text-lg">-</button>
                        <span className="px-3 py-1">{quantity}</span>
                        <button className="px-3 py-1 font-semibold text-blue-500 text-lg">+</button>
                    </div>
                    <p>${unitPrice}</p>
                </div>
            </div>
        </div>
    );

}// End of CartTile component

export default CartTile;