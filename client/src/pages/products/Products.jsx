import React,{useState} from 'react'
import { useActionData } from 'react-router-dom'
import List from "../../Components/List/List"
import { useParams } from 'react-router-dom'
import "./Products.scss"
import useFetch from "../../hooks/useFetch";
export default function Products() {
 
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  console.log(data)
  const param = useParams()
  console.log(param)

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
   
  };
  console.log(selectedSubCats)
  return (
    <div className="products">
      <div className="left">
        <div className="filteritem">
          <h2>Product Categories</h2>
          {data?.map (item =>(
          <div className="inputitem" key={item.id}>
      <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
      <label for="scales">{item.attributes.title}</label>
    </div>
))} 
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

     <List  catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  )
}
