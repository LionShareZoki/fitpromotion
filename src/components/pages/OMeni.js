import "./OMeni.css";
import { Link } from "react-router-dom";
import ivan from "../../imgs/deadlift.png";

const OMeni = () => {
  return (
    <div className="wrapper">
      <div className="leftt">
        <div className="container">
          <div className="card">
            <div className="content">
              <h5 className="h5">IVAN RAJČIĆ</h5>
              <div className="text">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Donec
                taciti enim potenti dictumst maecenas tortor. Quam cursus varius
                fames ut non sagittis. Ex a himenaeos senectus imperdiet neque.
              </div>
              <Link className="link">KONTAKTIRAJ ME</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="rightt">
        <div className="image--holder">
          <img src={ivan} alt="Ivan's photo" className="image" />
        </div>
      </div>
    </div>
  );
};

export default OMeni;
