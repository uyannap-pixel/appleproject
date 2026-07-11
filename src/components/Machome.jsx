import macbook from "../assets/macbook.jpg";
import "./machome.css"


export default function Machome() {
    return (
      <div className="machome-section">
        <div className="machome-content">
          <div className="machome-title">
            <h1>MacBook Air</h1>
            <p>Now Supercharged by M2</p>
          </div>
          <br />
          <div className="machome-buttons">
            <button className="learn-button">Learn More</button>
            <button className="buy-button">Buy</button>
          </div>
        </div>
      </div>
    );
}