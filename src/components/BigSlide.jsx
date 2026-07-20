import fl from "../assets/f1 image.jpg";
import messi from "../assets/messi.jpg";
import trying from "../assets/trying image.jpg";
import vini from "../assets/vinicius.jpg";
import fitness from "../assets/fitness.jpg";
import li from "../assets/li image.jpg";
import "./BigSlide.css"

export default function BigSlide () {
    return(
        <div className="bigslide">
            <div className="f1-view">
                <img src={fl} alt="f1 image" />
                <div className="main-content">
                    <div>
                        <button>
                            F1 on Apple TV
                        </button>
                    </div>
                    <div>
                        <p>Every Grand Prix™, live and on demand—all in one place, all year long.</p>
                    </div>
                </div>
            </div>
            <div className="f1-view">
                <img src={messi} alt="f1 image" />
                <div className="main-content">
                    <div>
                        <button>
                            F1 on Apple TV
                        </button>
                    </div>
                    <div>
                        <p>Every Grand Prix™, live and on demand—all in one place, all year long.</p>
                    </div>
                </div>
            </div>
            <div className="f1-view">
                <img src={li} alt="f1 image" />
                <div className="main-content">
                    <div>
                        <button>
                            F1 on Apple TV
                        </button>
                    </div>
                    <div>
                        <p>Every Grand Prix™, live and on demand—all in one place, all year long.</p>
                    </div>
                </div>
            </div>
            <div className="f1-view">
                <img src={trying} alt="f1 image" />
                <div className="main-content">
                    <div>
                        <button>
                            F1 on Apple TV
                        </button>
                    </div>
                    <div>
                        <p>Every Grand Prix™, live and on demand—all in one place, all year long.</p>
                    </div>
                </div>
            </div>
            <div className="f1-view">
                <img src={vini} alt="f1 image" />
                <div className="main-content">
                    <div>
                        <button>
                            F1 on Apple TV
                        </button>
                    </div>
                    <div>
                        <p>Every Grand Prix™, live and on demand—all in one place, all year long.</p>
                    </div>
                </div>
            </div>
            <div className="f1-view">
                <img src={fitness} alt="f1 image" />
                <div className="main-content">
                    <div>
                        <button>
                            F1 on Apple TV
                        </button>
                    </div>
                    <div>
                        <p>Every Grand Prix™, live and on demand—all in one place, all year long.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}