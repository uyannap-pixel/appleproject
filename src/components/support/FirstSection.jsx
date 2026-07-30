import supportLogo from "../../assets/supportlogo.png";
import supportIphone from "../../assets/supportphone.png";
import supportWatch from "../../assets/supportwatch.png";
import supportIpad from "../../assets/supportipad.png";
import supportMac from "../../assets/supportmac.png";
import supportVision from "../../assets/supportvision.png";
import supportHeadset from "../../assets/supportheadset.png";
import  doticon from "../../assets/doticon.svg";
import calendericon from "../../assets/calendericon.svg";
import  icon33 from "../../assets/icon33.svg";
import { Search, CircleX } from "lucide-react";
import "./FirstSection.css";
// import { Link } from "react-router-dom";






export default function FirstSection () {
    const display = [
        {
            image:supportIphone,
            name:'Iphone',
            id:'id1'
        },
        {
            image:supportMac,
            Link:"/",
            name:"Mac",
            id:'id2'
        },
        {
            image:supportIpad,
            name:'Ipad',
            Link:"/",
            id:'id3'
        },
        {
            image:supportWatch,
            name:'Watch',
            Link:"/",
            id:'id4'
        },
        {
            image:supportVision,
            name:'Vision',
            Link:"/",
            id:'id5'
        },
        {
            image:supportHeadset,
            name:'AirPods',
            Link:"/",
            id:'id6'
        }
    ];

    const cardSec = [
        {id:'id1', icon: doticon, message: 'Reset Apple Account Password' },
        {id:'id2', icon: calendericon, message: 'Change a Subscription' },
        {id:'id3', icon: icon33, message: 'Billing and Payment' }
    ];




    return(
       <div className="first-section">
            <div className="head-sec">
                <img className="logo" src={supportLogo} alt="apple logo" />
                <div  className="header">
                  <h1>
                      Apple Support
                   </h1>
                   <p>
                      Need help? Start Here
                   </p>
                </div>
            </div>
               

                <div className="gadget-display">
                    {display.map((play) => (
                        <div className="gadget-item" key={play.id}>
                            <img src={play.image} alt={play.name} />
                            <h3>{play.name}</h3>
                        </div>
                    ))}
                </div>
                <div className="cards">
                    {cardSec.map((sec) => (
                        <div className="card" key={sec.id}>
                            <img src={sec.icon} />
                            <h4> {sec.message} </h4>
                        </div>
                    ))};
                </div>
                <div className="head">
                    <h1>Search For More Topics</h1>
                </div>
                <div className="search-bar">
                    <Search className="search-icon" size={13} />
                    <input type="text" width={100}/>
                    <CircleX className="cancel-icon" size={13}/>
                </div>
       </div>
    )
}