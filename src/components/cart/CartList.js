// components
import CartTile from "./CartTile"


const CartList = (props) => {

    const { carts } = props;

    return (
        <div>
        <div className="grid grid-cols-12 border-b py-4">
          <p className="font-bold col-span-7 ml-16">PRODUCT</p> 
          <div className="col-span-5 flex justify-between">
            <p className="font-bold">PRICE</p>  
            <p className="font-bold">QTY</p>  
            <p className="font-bold">UNIT PRICE</p>  
          </div> 
        </div>  

        <div>
            {
                carts.map(cart => (
                    <CartTile 
                        key={cart.id}
                        title={cart.title}
                        price={cart.price}
                        unitPrice={cart.unitPrice}
                        quantity={cart.quantity}
                        imageUrl={cart.imageUrl}
                        alt={cart.alt}
                        />
                ))
            }
        </div>
      </div>
    );

}// End of CartList component

export default CartList;