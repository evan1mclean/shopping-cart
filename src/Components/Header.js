import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  return (
    <div className= "text-white bg-sky-400 py-6">
      <div className="container md:flex md:justify-between md:mx-auto">
        <h1 className="text-4xl text-center md:mb-0 mb-4">
          <a href="/">The Storefront</a>
        </h1>
        <div className="flex gap-5 text-lg justify-center items-center">
          <div className="">
            <a href="/">Home</a>
          </div>
          <div className="">
            <a href="/products">Shop</a>
          </div>
          <button>
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
