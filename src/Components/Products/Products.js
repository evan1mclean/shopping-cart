import { useEffect, useState } from "react";
import { ImSpinner2, ImSad } from "react-icons/im";
import { IoMdRefresh } from "react-icons/io";
import ProductCard from "./ProductCard";

function Products() {
  //state for holding the api data
  const [data, setData] = useState([]);
  //boolean state variables to signal if api is loading and if error has occurred
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    //function for fetching api
    const fetchData = async () => {
      //shows loading screen while loading
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const shoppingData = await response.json();
        setData(shoppingData);
      } catch (error) {
        //for showing an error message if error occurs
        setIsError(true);
      }
      //removes loading screen after data is fetched
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
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6 px-6 py-6">
          {data.map((item) => {
            return <ProductCard key={item.id} image={item.image} title={item.title} price={item.price}/>;
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
