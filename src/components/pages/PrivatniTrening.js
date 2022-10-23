import "../../App.css";
import Footer from "../Footer";
import "./PrivatniTrening.css";
import andrea from "../../imgs/pexels-andrea.jpg";

const PrivatniTrening = () => {
  return (
    <div>
      <div className="wrapper11">
        <div className="rec">
          <div className="rectangle">
            <h1 className="first-text">
              Naša ideja je pružiti visoko kvalitetnu uslugu
            </h1>
          </div>
        </div>
        <div className="recc">
          <div className="l">
            <div className="holding-text">
              <p>
                Kako bi to uspjeli, svakodnevno se educiramo u smjeru fitnessa i
                nutricionizma.
              </p>{" "}
              <p>
                Do sada smo pomogli velikom broju ljudi da ostvare svoje fitness
                ciljeve kroz znanstveno dokazane metode.
              </p>
            </div>
          </div>
          <div className="r">
            <div className="imagee-holder">
              <img src={andrea} alt="" className="imagee" />
            </div>
          </div>
        </div>
        <div className="rec">
          a lot of texta lot of texta lot of texta lot of texta lot of texta lot
          of texta lot of texta lot of texta lot of texta lot of texta lot of
          texta lot of texta lot of texta lot of texta lot of texta lot of texta
          lot of texta lot of texta lot of texta lot of texta lot of texta lot
          of texta lot of texta lot of texta lot of texta lot of texta lot of
          texta lot of texta lot of texta lot of texta lot of texta lot of texta
          lot of texta lot of texta lot of texta lot of texta lot of texta lot
          of texta lot of texta lot of texta lot of texta lot of texta lot of
          texta lot of texta lot of texta lot of texta lot of texta lot of texta
          lot of texta lot of texta lot of texta lot of texta lot of texta lot
          of texta lot of texta lot of texta lot of texta lot of texta lot of
          texta lot of texta lot of texta lot of texta lot of texta lot of texta
          lot of texta lot of texta lot of texta lot of texta lot of texta lot
          of texta lot of texta lot of texta lot of texta lot of texta lot of
          texta lot of texta lot of texta lot of text
        </div>
        <div className="rec"></div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivatniTrening;
