// components
import CartList from "../components/cart/CartList";
import Input from "../components/form/Input";
import Button from "../components/form/Button";

// data
import {products} from "../data/product";


const CartPage = () => {
  return (
    <div>

      <CartList carts={products}/>

      <div className="grid grid-cols-12 mt-24">
        
        <div className="col-span-8 flex">
         <Input className="h-[40px] rounded-l" /> 
         <Button className="!rounded-none !rounded-r" >Redeem</Button>
        </div>

        <div className="col-span-4 space-y-6">
          <div className="space-y-6 border-b-2 border-gray-100 pb-4">
            <div className="text-xs flex justify-between">
              <span>Subtotal</span>
              <span>$998</span>
            </div>
            <div className="text-xs flex justify-between">
              <span>Shipping fee</span>
              <span>$20</span>
            </div>
            <div className="text-xs flex justify-between">
              <span>Coupon</span>
              <span>No</span>
            </div>
          </div>
          <div className="font-bold flex justify-between  text-lg">
            <span className="tracking-wider">TOTAL</span>
            <span>$1018</span>
          </div>
          <Button className="w-full">Check out</Button>
        </div>
      </div>

    </div>
  );
}


export default CartPage;