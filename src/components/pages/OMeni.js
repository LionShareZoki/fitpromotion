import "./OMeni.css";
import { Link } from "react-router-dom";
import ivan from "../../imgs/deadlift.png";
import Button from "../Button";

const OMeni = () => {
  return (
    <div className="wrapper">
      {/* <div className="heading">IVAN RAJČIĆ</div> */}

      <div className="leftt">
        <div className="heading1">IVAN RAJČIĆ</div>
        <div className="container">
          <div className="card">
            <div className="content">
              {/* <h5 className="h5">IVAN RAJČIĆ</h5> */}
              <div className="text">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Donec
                taciti enim potenti dictumst maecenas tortor. Quam cursus varius
                fames ut non sagittis. Ex a himenaeos senectus imperdiet neque.
              </div>
              <Button>KONTAKTIRAJ ME</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="rightt">
        <div className="image--holder">
          <img src={ivan} alt="Ivan's photo" className="image" />
        </div>
      </div>
      <div className="heading">IVAN RAJČIĆ</div>
    </div>
  );
};

export default OMeni;
