import { Link } from "react-router-dom";
import { useState } from "react";
import arrowDown from "../imgs/chevron-down-solid.png";
import arrowUp from "../imgs/chevron-up-solid.png";

const Rectangle = (props) => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);
  return (
    <div className="container1">
      <Link className={click ? "card1" : "card1--active"} onClick={handleClick}>
        <div className="heading3">{props.heading}</div>
        <div className={click ? "text1" : "text1--active"}>{props.text}</div>
        <div className="down-up">
          {click ? (
            <img src={arrowDown} className="arrow-down" />
          ) : (
            <img src={arrowDown} className="arrow-up" />
          )}
        </div>
      </Link>
    </div>
  );
};

export default Rectangle;
