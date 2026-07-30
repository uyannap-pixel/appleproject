import BigSlide from "./BigSlide";
import SmallSlide from "./SmallSlide";
import "./Entertainment.css"

export default function Entertainment () {
    return(
        <div className="tv-slider">
            <div className="header">
                <h1>Endless Entertainment. </h1>
            </div>
            <div className="shows">
                <BigSlide />
                <SmallSlide />
            </div>
        </div>
    )
}