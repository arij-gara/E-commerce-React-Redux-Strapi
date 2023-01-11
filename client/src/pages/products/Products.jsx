import React from 'react'
import { useActionData } from 'react-router-dom'
import List from "../../Components/List/List"
import { useParams } from 'react-router-dom'
import "./Products.scss"
export default function Products() {

  const param = useParams()
  console.log(param)
  return (
    <div className="products">
      <div className="left">
        <div className="filteritem">
          <h2>Product Categories</h2>
          <div className="inputitem">
      <input type="checkbox" id="1" value={1} />
      <label for="scales">Hats</label>
    </div>
    <div className="inputitem">
      <input type="checkbox" id="2" value={2} />
      <label for="scales">Shirts</label>
    </div>
    <div className="inputitem">
      <input type="checkbox" id="3" value={3} />
      <label for="accessories">Accessories</label>
    </div>
        </div>
        <div className="filteritem">
          <h2>Filter by price</h2>
          <span>0</span>
          <input type="range" min={0} max={1000}></input>
          <span>1000</span>
        </div>
        <div className="filteritem">
        <h2>Sort by</h2>
       <div className="inputitem">
        <input type="radio" id="asc" value="asc" name="price"></input>
        <label htmlFor="asc" >Price (lowest first)</label>
       </div>
       <div className="inputitem">
        <input type="radio" id="desc" value="desc" name="price"></input>
        <label htmlFor="desc" >Price (highest first)</label>
       </div>
        </div>
      </div>
      <div classame="right">
        <img 
        className="catgimg"
        src="https://i0.wp.com/theportraitmasters.com/wp-content/uploads/2019/06/LJ2_HeroV2_1280.jpg?w=1280&ssl=1"
        alt=""
        />

     <List/>
      </div>
    </div>
  )
}
