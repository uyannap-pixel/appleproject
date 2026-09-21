import BigSlide from "./BigSlide";
import SmallSlide from "./SmallSlide";
import "./Entertainment.css"
import { useState } from "react";

export default function Entertainment () {
    const [activeSlide, setActiveSlide] = useState(0);
    const [carouselApi, setCarouselApi] = useState(null);
    const indicatorCount = 7;

    return(
        <div className="tv-slider">
            <div className="header">
                <h1>Endless Entertainment. </h1>
            </div>
            <div className="shows">
                <BigSlide />
                <SmallSlide
                    onApiReady={setCarouselApi}
                    onSlideChange={setActiveSlide}
                />
                <div className="carousel-indicator" aria-label="Entertainment slides">
                    {Array.from({ length: indicatorCount }, (_, index) => (
                        <button
                            className={`carousel-dot ${activeSlide % indicatorCount === index ? "active" : ""}`}
                            type="button"
                            aria-label={`Go to entertainment slide ${index + 1}`}
                            aria-current={activeSlide % indicatorCount === index ? "true" : undefined}
                            onClick={() => carouselApi?.scrollTo(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}