import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header(props) {
  const {handleModalClick, shoppingCart} = props;
  const sumQuantity = () => {
    return shoppingCart.reduce((total, item) => {
      return total + item.quantity;
    },0)
  }
  return (
    <div className="text-white bg-sky-400 py-6 md:px-24">
      <div className="md:flex md:justify-between w-full">
        <Link to={"/"}>
          <h1 className="text-4xl text-center md:mb-0 mb-4 font-bold">The Storefront</h1>
        </Link>
        <div className="flex gap-7 text-lg justify-center items-center">
          <Link to={"/"}>
            <div className="hover:scale-110 transition duration-100">Home</div>
          </Link>
          <Link to={"/products"}>
            <div className="hover:scale-110 transition duration-100">Shop</div>
          </Link>
          <div className="relative hover:scale-110 transition duration-100" onClick={handleModalClick}>
            {sumQuantity() > 0 && <div className="absolute h-5 w-5 bg-red-400 rounded-full text-sm flex items-center justify-center -bottom-[5px] -left-[5px]">{sumQuantity()}</div>}
            <button className="rounded-full bg-white text-sky-400 px-3 py-3 flex justify-center items-center">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
