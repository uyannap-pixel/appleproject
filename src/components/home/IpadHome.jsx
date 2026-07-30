import ipadlogo from "../../assets/ipadlogo.png";
import "./ipadHome.css"


export default function IpadHome() {
  const ipadLogo = ipadlogo;
    return (
      <div className="ipadhome-section">
        <div className="ipadhome-content">
          <div className="ipadhome-title">
            <h1><img src={ipadLogo} width={200} height={65}/></h1>
            <p>Meet the latest iPad line-up</p>
          </div>
          <br />
          <div className="ipadhome-buttons">
            <button className="learn-button">Learn More</button>
            <button className="buy-button">Buy</button>
          </div>
        </div>
      </div>
    );
}