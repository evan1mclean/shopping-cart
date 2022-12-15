import { AnimatePresence, motion } from "framer-motion";

function ShoppingCart(props) {
  const { showModal, handleModalClick, shoppingCart } = props;
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
            className="md:w-[450px] w-96 bg-white h-full ml-auto fixed right-0 py-16 flex flex-col items-center"
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
            {shoppingCart.length === 0 && 
            (<div className="mt-16">Your cart is empty</div>)}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ShoppingCart;
