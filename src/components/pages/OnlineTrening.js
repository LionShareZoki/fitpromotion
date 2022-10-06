import "../../App.css";
import photo from "../../imgs/training.jpg";
import Button from "../Button";
import "./OnlineTrening.css";
import Footer from "../Footer";
import Rectangle from "../Rectangle";

const OnlineTrening = (props) => {
  return (
    <div>
      <div className="wrapper1">
        <div>
          <h1 className="heading2">KAKO IZGLEDA ONLINE SURADNJA?</h1>
        </div>
        <Rectangle text="izgleda sjebano" heading="Upoznavanje" />
        <Rectangle text="izgleda sjebano" heading="Plan treninga" />
        <Rectangle text="izgleda sjebano" heading="Prehrana" />
        <Rectangle text="izgleda sjebano" heading="Praćenje treninga" />
      </div>
      <Footer />
    </div>
  );
};

export default OnlineTrening;
