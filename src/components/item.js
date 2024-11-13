function Item(props) {
  //set default value
  const { name = "N/A", price = 0, onsale = false } = props;
  //item xml
  return (
    <div className="col-lg-4">
      <div className="card m-1" style={{ width: "18rem," }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {" "}
            {onsale ? "On sale" : "Not on sale"}
          </h6>
          <p className="card-text">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
