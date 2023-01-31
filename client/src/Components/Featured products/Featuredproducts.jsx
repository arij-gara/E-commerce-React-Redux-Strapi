import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import "./Featuredproducts.scss";
import axios from "axios";
// import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
//   const { data, loading, error } = useFetch(
//     `/products?populate=*&[filters][type][$eq]=${type}`
//   );
 const [data,setdata]=useState([]);
 useEffect( ()=>{
  const fetchdata = async ()=>{
    try {
      const res = await axios.get(
        process.env.REACT_APP_API_URL +`/products?populate=*&[filters][type][$eq]=${type}`,
        {
          headers: { 
            Authorization : "bearer " + process.env.REACT_APP_API_TOKEN,
          },
        }
      )
      console.log(data)
      setdata(res.data.data)

    }catch(error){
      console.log(error);
    }
  }
  fetchdata()
 },[])

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {data.map( (item) => (
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;