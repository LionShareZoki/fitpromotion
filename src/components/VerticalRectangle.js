import { Link } from "react-router-dom";

const VerticalRectangle = (props) => {
  return (
    <div className="ver-box">
      <div className="ver-card">
        <h1 className="fitpro">Fitpromotion</h1>

        <div className="plan-name">{props.name}</div>
        <div className="plan-price">{props.price}</div>
        <div className="plan-time">{props.timeInterval}</div>
        <a href={props.Link} class="btn--border btn--border btn--large">
          ODABERI
        </a>
      </div>
    </div>
  );
};

export default VerticalRectangle;
