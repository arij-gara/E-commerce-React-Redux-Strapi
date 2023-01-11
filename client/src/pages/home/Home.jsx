import React from 'react'
import Slider from '../../Components/Slider/Slider'
import Featuredproducts from '../../Components/Featured products/Featuredproducts'
import Categories from "../../Components/Categories/Categories"
import Contact from "../../Components/Contact/Contact"
function Home() {
  return (
    <div>
      <Slider />
      <Featuredproducts type="featured"/>
      <Categories/>
      <Featuredproducts type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home
