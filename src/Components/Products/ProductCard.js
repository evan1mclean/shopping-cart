export default function ProductCard(props) {
  const {image, title, price} = props;
  return (
    <div className="flex flex-col bg-white py-5 gap-4 border-2 rounded-lg">
      <img src={image} alt={title} className="h-36 w-auto self-center"/>
      <div className="flex-1 flex flex-col gap-2 border-t-2 px-5 pt-5">
        <p className="font-bold">{title}</p>
        <p className="mt-auto">${price}</p>
        <button className="bg-sky-400 text-white py-2 px-4">Add To Cart</button>
      </div>
    </div>
  );
}