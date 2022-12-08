import { Link } from "react-router-dom";
import shopping from "../images/shopping.jpg";

function Home() {
  return (
    <div
      className="grow flex lg:justify-between lg:items-center md:items-center w-full lg:px-24 px-10 py-10" 
    >
      <div className="lg:h-96 lg:w-1/2 flex flex-col lg:justify-between md:justify-between gap-7">
        <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold lg:text-left text-center">
          Welcome To The Big Fake Online Storefront
        </h1>
        <p className="text-lg">
          Generic slogan for all your fake shopping needs... blah blah.. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis amet, consectetur adipiscing elit
        </p>
        <Link to={"/products"}>
          <div className="text-center lg:text-left">
            <button className="bg-sky-400 text-white text-lg py-2 px-4 rounded-3xl hover:scale-110 transition duration-100">
              Shop Now
            </button>
          </div>
        </Link>
      </div>
      {<div>
        <img src={shopping} alt="Online Shopping" className="lg:h-96 lg:w-auto rounded-lg h-0 w-0" />
      </div>}
    </div>
  );
}

export default Home;
