import React,{useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from "react-router-dom"
import Cart from '../../Components/Cart/Cart'
import "./Navbar.scss"
export default function Navbar() {
    const[open,setopen]=useState(false)
  return (
    <div className="Navbar">
        <div className="wrapper">
        <div className="left">
            <div className="item">
                <img src="/img/en.png" alt="" />
                 <KeyboardArrowDownIcon/>
            </div>
            <div className="item">
                <span>USD</span>
                 <KeyboardArrowDownIcon/>
            </div>
            <div className="item">
               <Link className="link" to="/products/1">Women</Link>
            </div>
            <div className="item">
               <Link className="link" to="/products/2">Men</Link>
            </div>
            <div className="item">
               <Link className="link" to="/products/3">Children</Link>
            </div>
        </div>
        <div className="center">
            <Link className="link" to ="/">STORE</Link>
        </div>
        <div className="right">
        <div className="item">
            <Link className="link"  to ="/">Homepage</Link>
        </div>
        <div className="item">
            <Link className="link"  to ="/">About</Link>
        </div>
        <div className="item">
            <Link className="link"  to ="/">Contact</Link>
        </div>
        <div className="item">
            <Link className="link" to ="/">Stores</Link>
        </div>
        <div className="icons">
            <SearchIcon/>
            <PersonOutlineIcon/>
            <FavoriteBorderIcon/>
            <div className="Carticon" onClick={()=>setopen(!open)}>
            <AddShoppingCartIcon/>
            <span>0</span>
            </div>
        </div>
        </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}
