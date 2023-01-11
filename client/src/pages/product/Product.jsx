import React ,{useState}from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
export default function Product() {
  const [selectedimg,setselectedimg]= useState(0)
  const [quantity,setquantity]=useState(1)
  const images = [
    "https://editorialist.com/wp-content/uploads/2021/04/Trench-Coats_Hero.jpg",
    "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22fw/img/item_14_03.jpg?220211"
  ]
  return (
    <div className="product">
      <div className="left">
      <div className="images">
        <img src={images[0]} alt="" onClick={e =>setselectedimg(0)}></img>
        <img src={images[1]} alt="" onClick={e =>setselectedimg(1)}></img>
      </div>
      <div className="mainimage">
        <img src={images[selectedimg]} alt=""></img>
      </div>
      </div>
      <div className='right'>
        <h1>coat for woman</h1>
        <span className="price">$19.9</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam maiores recusandae alias facilis in unde quam ad illum sapiente error perspiciatis dolore, non magnam earum sit animi sequi, possimus porro?</p>
        <div className='quantity'>
          <button onClick={()=>setquantity(prev =>prev ===1 ? 1 :prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setquantity(prev =>prev+1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon/>
          Add to cart
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
           </div>
      </div>
      
    </div>
  )
}
