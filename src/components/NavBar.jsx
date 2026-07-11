import {Search, ShoppingBag} from "lucide-react";
import AppleLogo from "./AppleLogo";
import "./NavBar.css";
import { Link } from "react-router";


export default function NavBar() {
     const navBar = [
       {id:'id1', name:<AppleLogo /> ,Link:"/"},
       {id:'id2', name:"Store" ,Link:"/"},
       {id:'id3', name: "Mac",Link:"/"},
       {id:'id4', name: "ipad" ,Link:"/"},
       {id:'id5', name:"iphone" ,Link:"/"},
       {id:'id6', name:"Watch",Link:"/"},
       {id:'id7', name:"Vision" ,Link:"/"},
       {id:'id8', name:"Airpods",Link:"/"},
       {id:'id9', name:"Tv & Home" ,Link:"/"},
       {id:'id10', name:"Entertainment" ,Link:"/"},
       {id:'id11', name:"Accessories",Link:"/"},
       {id:'id12', name: "Support",Link:"/"},
       {id:'id13', name:<Search size={15}  className="icon" /> ,Link:"/"},
       {id:'id14', name:<ShoppingBag size={15} className="icon"/> ,Link:"/"}
     ]
    return (
      <div className="nav-container">
        <nav className="navbar">
          <ul className="nav-links">
            {/* <li><a href="/"><AppleLogo size={7} classname="icon" /></a></li>
            <li><a href="/">store</a></li>
            <li><a href="/">Mac</a></li>
            <li><a href="/">ipad</a></li>
            <li><a href="/">iphone</a></li>
            <li><a href="/">Watch</a></li>
            <li><a href="/">Vision</a></li>
            <li><a href="/">Airpods</a></li>
            <li><a href="/">Tv &  Home </a></li>
            <li><a href="/">Entertainment</a></li>
            <li><a href="/">Accessories</a></li>
            <li><a href="/">Support</a></li>
            <li><a href="/"></></a></li>
            <li><a href="/"> < /> </a></li> */}

            {navBar.map((bar, index) =>(
              <li key={index}>
                <a href={bar.Link}>
                   {bar.name} 
                </a>
              </li>
            ))}





          </ul>
        </nav>
      </div>
  );
}