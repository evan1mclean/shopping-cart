import { AnimatePresence, motion } from "framer-motion";
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart(props) {
  const {
    showModal,
    handleModalClick,
    shoppingCart,
    addToCart,
    handleQuantityUpdate,
    removeFromCart,
  } = props;

  const sumTotal = () => {
    return shoppingCart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <AnimatePresence>
      {showModal && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70"
            onClick={handleModalClick}
          />
          <motion.div
            className="md:w-[450px] w-96 bg-white h-full ml-auto fixed right-0 pt-16 pb-8 px-16 flex flex-col items-center gap-8"
            initial={{ opacity: 1, x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            <button
              aria-label="Close Shopping Cart"
              className="fixed top-5 right-8 text-3xl hover:cursor-pointer"
              onClick={handleModalClick}
            >
              X
            </button>
            <h1 className="text-3xl">Your Shopping Cart</h1>

            {shoppingCart.length === 0 ? (
              <div className="mt-16">Your cart is empty</div>
            ) : (
              <div className="w-full flex flex-col gap-8 overflow-scroll">
                {shoppingCart.map((item) => {
                  return (
                    <ShoppingCartItem
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      quantity={item.quantity}
                      addToCart={addToCart}
                      handleQuantityUpdate={handleQuantityUpdate}
                      removeFromCart={removeFromCart}
                    />
                  );
                })}
              </div>
            )}

            <div className="mt-auto text-lg font-bold self-start">Total: ${sumTotal()}</div>
            {shoppingCart.length === 0 ? (
              <button
                className="py-4 w-full border-2 border-slate-700 hover:bg-slate-100 hover:transition-all duration-300 active:bg-slate-400"
                onClick={handleModalClick}
              >
                Close
              </button>
            ) : (
              <button
                className="py-4 w-full border-2 border-slate-700 hover:bg-slate-100 hover:transition-all duration-300 active:bg-slate-400"
                onClick={() =>
                  alert(
                    "Checking out was beyond the project scope... by pretty nice shopping cart eh?"
                  )
                }
              >
                Checkout
              </button>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ShoppingCart;
