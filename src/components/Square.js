const Square = (props) => {
  return (
    <div className="box">
      <div className="card3">
        <div className="icon--holder">{props.icon}</div>
        <div className="text--holder">{props.text}</div>
      </div>
    </div>
  );
};

export default Square;
