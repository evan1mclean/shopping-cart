import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <div className="text-white bg-sky-400 py-6">
      <div className="container md:flex md:justify-between md:mx-auto">
        <h1 className="text-4xl text-center md:mb-0 mb-4">
          <a href="/">The Storefront</a>
        </h1>
        <div className="flex gap-7 text-lg justify-center items-center">
          <div className="hover:scale-110 transition duration-100">
            <a href="/">Home</a>
          </div>
          <div className="hover:scale-110 transition duration-100">
            <a href="/products">Shop</a>
          </div>
          <button className="rounded-full bg-white text-sky-400 px-3 py-3 flex justify-center items-center hover:scale-110 transition duration-100">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
