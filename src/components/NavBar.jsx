import {Search, ShoppingBag} from "lucide-react";
import AppleLogo from "./AppleLogo";
import "./NavBar.css";


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