import "../../App.css";
import photo from "../../imgs/training.jpg";
import Button from "../Button";
import "./OnlineTrening.css";

const OnlineTrening = () => {
  const clickHandler = () => {};
  return (
    <div className="online--trening">
      <div>
        <img className="training--photo" src={photo} />
        <div className="form">
          <div className="text">Kako izgleda online suradnja?</div>
          <button onClick={clickHandler} className="button-6">
            Saznaj više
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineTrening;
