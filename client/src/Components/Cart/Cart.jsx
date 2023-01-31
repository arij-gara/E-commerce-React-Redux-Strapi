import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./Cart.scss"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { resetCart } from '../../redux/cartreducer';
import { removeItem } from "../../redux/cartreducer";
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from "../../makeRequest";
export default function Cart() {
  const dispatch=useDispatch()
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };
  const stripePromise = loadStripe('pk_test_51MWDfaDSGCLMmHr2yDMLrHwvUt2pNlFtp6umJV8YColOjbgGgyzj7kJKCRjsOoNmChsKsDLhwSJ3OuEPH7Et2KPP00HNHRp23c');
  const handlepayement = async() => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  }
    const products= useSelector(state =>state.cart.products)
  return (
    <div className="cart">
       <h1>Products in your cart</h1>
      {products?.map(item =>(
        <div className="item" key={item.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL +item.img} alt=""></img>
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc.substring(0,100)}</p>
                <div className='price'>{item.quantity} x{item.price}</div>
            </div>
            <DeleteOutlineIcon className="delete" onClick={()=> dispatch(removeItem(item.id))}/>
        </div>
      ))}
     <div className='total'>
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
     </div>
     <button onClick={handlepayement}> PROCEED TO CHECKOUT</button>
     <span className="reset" onClick={()=> dispatch(resetCart())}>RESET CART</span>
    </div>
  )
}
