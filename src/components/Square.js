const Square = (props) => {
  return (
    <div className="box">
      <div className="card3">
        <div className="icon--holder">
          <img src={props.icon} className="icon-image" />
        </div>
        <div className="text--holder">
          <p1 className="p1">{props.text}</p1>
        </div>
      </div>
    </div>
  );
};

export default Square;
