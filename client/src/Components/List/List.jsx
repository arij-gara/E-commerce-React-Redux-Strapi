import React from 'react'
import Card from "../Card/Card"
import "./List.scss"
export default function List() {

    const data =[
        {
            id:1,
            img:"https://bonniesen.com/wp-content/uploads/2019/05/Kolkata-Fashion-Shoot-with-Bridelan-Bonnie-Sen-Photography.jpg",
            img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1XJugSxif7-0qGkpoJ0Za8vXSOAJgRJ5AA&usqp=CAU",
            title:"Long sleeves t-shirt",
            isNew:true,
            oldprice:19,
            pric:12
    

        },
        {
            id:2,
            img:"https://assets.vogue.com/photos/5fdbb0bdf86bed57f4778d77/master/w_2400,h_3000,c_limit/VO0121_Collections_02.jpg",
            img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1XJugSxif7-0qGkpoJ0Za8vXSOAJgRJ5AA&usqp=CAU",
            title:"Dress",

            isNew:true,
            oldprice:19,
            pric:12
    

        },
        {
            id:3,
            img:"https://i0.wp.com/theportraitmasters.com/wp-content/uploads/2018/10/TFS_Lara_Jade_1280x720v3.jpg?fit=1280%2C720&ssl=1",
            img2:"https://users-photos.b-cdn.net/100502/instagram/thumbnails/35459599_2253511331543639_2403410909398564864_n.jpg%3F_nc_ht%3Dscontent.cdninstagram.com%26_nc_ohc%3DBoQajrovm8EAX8Vw9-d%26oh%3D84b67bbd84cbb39e28a1b21e41709fad%26oe%3D5EB7FC66",
            title:"White blazer woman",

            isNew:true,
            oldprice:19,
            price:12
    

        },
    ]
  return (
    <div className='list'>
        {data?.map(item =>(
            <Card item={item} key={item.id}/>
        ))}
      
    </div>
  )
}
