export default function ShoppingCartItem(props) {
  const {
    id,
    image,
    title,
    price,
    quantity,
    addToCart,
    handleQuantityUpdate,
    removeFromCart,
  } = props;
  const product = { id, image, title, price, quantity };

  const updateQuantity = (e) => {
    product.quantity = Number(e.target.value);
    handleQuantityUpdate(id, product.quantity);
  };
  return (
    <div className="flex justify-between h-32">
      <img src={image} alt={title} className="h-full" />
      <div className="flex flex-col justify-between text-center w-1/2">
        <h2 className="text-lg font-bold truncate">{title}</h2>
        <p>${price}</p>
        <div className="flex gap-4 justify-evenly">
          <button
            className="hover:bg-slate-100 px-4 py-2 text-2xl font-bold"
            onClick={() => removeFromCart(product)}
            aria-label="Remove Item"
          >
            -
          </button>
          <input
            data-testid="quantity-input"
            type="number"
            value={quantity}
            className="w-10 text-center"
            onChange={updateQuantity}
          />
          <button
            className="hover:bg-slate-100 px-4 py-2 text-2xl font-bold"
            onClick={() => addToCart(product)}
            aria-label="Add Item"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
