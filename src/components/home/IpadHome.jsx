import ipadlogo from "../../assets/ipadlogo.png";
import "./ipadHome.css"


export default function IpadHome() {
  const ipadLogo = ipadlogo;
    return (
      <div className="ipadhome-section">
        <div className="ipadhome-content">
          <div className="ipadhome-title">
            <h1><img src={ipadLogo} width={200} height={65}/></h1>
            <p>Now Superchaged by M4</p>
          </div>
          <div className="ipadhome-buttons">
            <button className="learn-button">Learn More</button>
            <button className="buy-button">Buy</button>
          </div>
        </div>
      </div>
    );
}