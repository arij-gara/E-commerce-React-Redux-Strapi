import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./Cart.scss"
export default function Cart() {

    const data = [
        {
            id:1,
            img:"https://bonniesen.com/wp-content/uploads/2019/05/Kolkata-Fashion-Shoot-with-Bridelan-Bonnie-Sen-Photography.jpg",
            img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1XJugSxif7-0qGkpoJ0Za8vXSOAJgRJ5AA&usqp=CAU",
            title:"Long sleeves t-shirt",
            isNew:true,
            oldprice:19,
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odio eveniet reiciendis alias officiis eum, ipsum nostrum illum maxime natus eos excepturi necessitatibus possimus ducimus a accusamus sunt animi ab",
            price:12
    

        },
        {
            id:2,
            img:"https://assets.vogue.com/photos/5fdbb0bdf86bed57f4778d77/master/w_2400,h_3000,c_limit/VO0121_Collections_02.jpg",
            img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1XJugSxif7-0qGkpoJ0Za8vXSOAJgRJ5AA&usqp=CAU",
            title:"Dress",

            isNew:true,
            oldprice:19,
            pric:12,
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odio eveniet reiciendis alias officiis eum, ipsum nostrum illum maxime natus eos excepturi necessitatibus possimus ducimus a accusamus sunt animi ab",
    

        },
    ]
  return (
    <div className="cart">
       <h1>Products in your cart</h1>
      {data?.map(item =>(
        <div className="item" key={item.id}>
            <img src={item.img} alt=""></img>
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc.substring(0,100)}</p>
                <div className='price'>1 x{item.price}</div>
            </div>
            <DeleteOutlineIcon className="delete"/>
        </div>
      ))}
     <div className='total'>
        <span>SUBTOTAL</span>
        <span>$123</span>
     </div>
     <button> PROCEED TO CHECKOUT</button>
     <span className="reset">RESET CART</span>
    </div>
  )
}
