import Item from "./item";

function ItemList(props) {
  const { list } = props;
  return (
    <div className="row">
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ItemList;
