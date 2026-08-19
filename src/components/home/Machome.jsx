import "./machome.css"
import MacBook from "../../assets/macbook.jpg"


export default function Machome() {
    return (
      <div className="machome-section">
        <div className="image-background">
          <img src={MacBook} alt="MacBook" className="img-background" />
        </div>
        <div className="machome-content">
          <div className="machome-title">
            <h1>MacBook Air</h1>
            <p>Now Supercharged by M2</p>
          </div>


          <div className="machome-buttons">
            <button className="learn-button">Learn More</button>
            <button className="buy-button">Buy</button>
          </div>
        </div>
      </div>
    );
}