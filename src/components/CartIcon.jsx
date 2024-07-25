// components/FloatingButton.tsx
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartIcon = () => {
  return (
    <div className="fixed bottom-4 right-4 flex items-center space-x-2 z-10">
      
      <a
       href="https://wa.me/923128500934"
        target="_blank"
        className="bg-green-200 text-black rounded-full p-2 hover:bg-green-300 transition-colors duration-300"
      >
        Place your Order
      </a>
      <a
        href="https://wa.me/923128500934"
        target="_blank"
       
        className="bg-black text-white rounded-full p-4 flex items-center justify-center hover:bg-gray-800"
      >
        <AiOutlineShoppingCart className="text-green-500 w-8 h-8" />
      </a>
    </div>
  );
};

export default CartIcon;
