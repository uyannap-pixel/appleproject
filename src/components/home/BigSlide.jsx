import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import fl from "../../assets/f1 image.jpg";
import messi from "../../assets/messi.jpg";
import trying from "../../assets/trying image.jpg";
import baseball from "../../assets/baseball.jpg";
import li from "../../assets/li image.jpg";
import lucky from "../../assets/lucky.jpg";
import widows from "../../assets/widows.jpg";
import silo from "../../assets/silo.jpg";
import "./BigSlide.css"

export default function BigSlide () {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        startIndex: 1,
        align: "center",
        slidesToScroll: 1,
        speed:10,
    });

    useEffect(() => {
        if (!emblaApi) return;
        const interval = setInterval (()=> {
            emblaApi.scrollNext();
        },3500)
        return() => clearInterval(interval);
        console.log('working')
    },
    [emblaApi]);
    return(
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <div className="f1-view">
                            <img src={fl} alt="f1 image" />
                            <div className="main-content">
                                <div>
                                    <button className="content-button">
                                        F1 on Apple TV
                                    </button>
                                </div>
                                <div>
                                    <p>Every Grand Prix™, live and on demand—all in one place, all year long.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="f1-view">
                            <img src={messi} alt="f1 image" />
                            <div className="main-content">
                                <div>
                                    <button className="content-button">
                                        MLS on Apple TV
                                    </button>
                                </div>
                                <div className="texts">
                                    <p>Watch every club, every match, live-all season long.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="f1-view">
                            <img src={li} alt="f1 image" />
                            <div className="main-content">
                                <div>
                                    <button className="content-button">
                                        Stream now
                                    </button>
                                </div>
                                <div className="texts">
                                    <p>Drama 18 Emmy Nominations including Best Drama.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="f1-view">
                            <img src={trying} alt="f1 image" />
                            <div className="main-content">
                                <div>
                                    <button className="content-button">
                                        Stream Now
                                    </button>
                                </div>
                                <div className="texts">
                                    <p>Comedy New Season.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="f1-view">
                            <img src={silo} alt="f1 image" />
                            <div className="main-content">
                                <div>
                                    <button className="content-button">
                                        F1 on Apple TV
                                    </button>
                                </div>
                                <div className="texts">
                                    <p>Every Grand Prix™, live and on demand—all in one place, all year long.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="f1-view">
                            <img src={baseball} alt="f1 image" />
                            <div className="main-content">
                                <div>
                                    <button className="content-button">
                                        F1 on Apple TV
                                    </button>
                                </div>
                                <div className="texts">
                                    <p>Every Grand Prix™, live and on demand—all in one place, all year long.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="f1-view">
                            <img src={lucky} alt="f1 image" />
                            <div className="main-content">
                                <div>
                                    <button className="content-button">
                                        F1 on Apple TV
                                    </button>
                                </div>
                                <div className="texts">
                                    <p>Every Grand Prix™, live and on demand—all in one place, all year long.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="f1-view">
                            <img src={widows} alt="f1 image" />
                            <div className="main-content">
                                <div>
                                    <button className="content-button">
                                        F1 on Apple TV
                                    </button>
                                </div>
                                <div className="texts">
                                    <p>Every Grand Prix™, live and on demand—all in one place, all year long.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="f1-view">
                            <img src={fl} alt="f1 image" />
                            <div className="main-content">
                                <div>
                                    <button className="content-button">
                                        F1 on Apple TV
                                    </button>
                                </div>
                                <div>
                                    <p>Every Grand Prix™, live and on demand—all in one place, all year long.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="f1-view">
                            <img src={messi} alt="f1 image" />
                            <div className="main-content">
                                <div>
                                    <button className="content-button">
                                        MLS on Apple TV
                                    </button>
                                </div>
                                <div className="texts">
                                    <p>Watch every club, every match, live-all season long.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}