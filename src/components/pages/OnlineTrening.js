import "../../App.css";
import photo from "../../imgs/training.jpg";
import Button from "../Button";
import "./OnlineTrening.css";
import Footer from "../Footer";
import Rectangle from "../Rectangle";
import Arrow from "../../imgs/arrow.png";

const OnlineTrening = (props) => {
  return (
    <div>
      <div className="wrapper1">
        <div>
          <h1 className="heading2">KAKO IZGLEDA ONLINE SURADNJA?</h1>
        </div>
        <Rectangle
          text="Prvi korak je upoznavanje pri kojem ću ja kao trener saznati sve potrebne informacije o tebi kako bi mogli nastaviti dalje sa programom. Zanimati će me tvoja visina, težina, zanimanje kojim se baviš, tvoja starost i slične informacije."
          heading="UPOZNAVANJE"
        />
        <Rectangle
          text="U ovom dijelu programa tvoj trener će napraviti detaljan plan treninga kojega će sastaviti baš prema informacijama koje je dobio o tebi."
          heading="PLAN TRENINGA"
        />
        <Rectangle
          text="Prehrana je važan dio zdravog života. Kroz ovaj dio tvoj trener odnosno nutricionist će ti osmisliti plan prehrane iz tjedan u tjedan. Tako da nećeš imati izbora nego pratiti i držati se prehrane što će rezultirati brzom promjenom tvoga tjelesnog sastava i napposljetku promjenom tvoga izgleda."
          heading="PREHRANA"
        />
        <Rectangle
          text="Kroz tjedne razgovore tvoj trener pratiti će vaš napredak i prema njemu imati bolje informacine za daljnji tok programa."
          heading="PRAĆENJE TRENINGA"
        />
        <div className="initial--questionnaire">
          <div className="card2">
            <div className="img--holder1">
              <img src={Arrow} />
            </div>
            <div className="text-content">
              <h2 className="heading4">INICIJALNI UPITNIK</h2>
              <h2 className="text2">
                Prije samog početka suradnje ispunjavaš inicijalni upitnik koji
                će mi pružiti sve potrebne informacije da bih za tebe izradio
                optimalan program treninga i odabrao primjere prehrane, nužne za
                ostvarenje tvojih ciljeva.
              </h2>
            </div>
            <div className="button-container">
              <a
                className="botun"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfFWgVobIWZ-OuyUQFSM_bhxkJ9l5Nx4RcOnwulBKr6CItsXQ/viewform"
                class="btn btn--primary btn--large"
              >
                ISPUNI UPITNIK
              </a>
            </div>
            <div className="img--holder2">
              <img src={Arrow} />
            </div>
          </div>
        </div>
        <div className="training--benefits">
          <h2 className="heading2">POSLJEDICE TRENINGA</h2>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OnlineTrening;
