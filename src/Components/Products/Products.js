import { useEffect, useState } from "react";
import { ImSpinner2, ImSad } from "react-icons/im";
import { IoMdRefresh } from "react-icons/io";
import ProductCard from "./ProductCard";

function Products() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const shoppingData = await response.json();
        setData(shoppingData);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {isError && (
        <div className="flex flex-col justify-center items-center gap-3 text-4xl mt-5">
          <ImSad />
          <p>Uh oh! Something went wrong...</p>
          <p>Please try again</p>
          <button
            className="bg-sky-400 text-white text-lg py-2 px-4 rounded-3xl hover:scale-110 transition duration-100 flex items-center gap-2"
            onClick={() => window.location.reload()}
          >
            Refresh <IoMdRefresh />
          </button>
        </div>
      )}
      {isLoading ? (
        <div className="flex justify-center items-center gap-3 text-4xl mt-5">
          Loading
          <ImSpinner2 className="animate-spin text-sky-400" />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6 px-6 py-6">
          {data.map((item) => {
            return <ProductCard key={item.id} image={item.image} title={item.title} price={item.price}/>;
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
