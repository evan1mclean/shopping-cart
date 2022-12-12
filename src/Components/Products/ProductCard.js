export default function ProductCard(props) {
  const {image, title, price} = props;
  return (
    <div className="flex flex-col">
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
      <button>Add To Cart</button>
    </div>
  );
}