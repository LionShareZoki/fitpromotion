import "./OMeni.css";
// import { Link } from "react-scroll";
import ivan from "../../imgs/deadlift.png";
import Button from "../Button";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const OMeni = (props) => {
  return (
    <div>
      <div className="wrapper">
        {/* <div className="heading">IVAN RAJČIĆ</div> */}

        <div className="leftt">
          <div className="heading1">IVAN RAJČIĆ</div>
          <div className="container">
            <div className="card">
              <div className="content">
                {/* <h5 className="h5">IVAN RAJČIĆ</h5> */}
                <div className="text">
                  Moje ime je Ivan Rajčić i kondicijski sam trener. Bavim se
                  sportom od malih nogu, a svoju ljubav prema treniranju i
                  inspiriranju okoline pretvorio sam u životni stil. Završio sam
                  trogodišnji studij za kondicijsku pripremu sportaša na
                  Kineziološkom fakultetu Sveučilišta u Splitu. Iako sam cijeli
                  svoj život posvetio sportu i treniranju sebe, osjetio sam
                  poziv da pomognem što većem broju ljudi koji se bore sa
                  skidanjem viška kilograma, dobivanjem mišićne mase i
                  poboljšanju zdravstvenog stanja.
                </div>

                <a class="btn btn--primary btn--large">KONTAKTIRAJ ME</a>
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
      <Footer />
    </div>
  );
};
export default OMeni;
