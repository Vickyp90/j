import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { loadRazorpay } from '../utils/razorpay';

export default function Cart({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, removeFromCart, clearCart } = useCart();

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price);
    const quantity = item.quantity || 1;
    return sum + (price * quantity);
  }, 0);

  const handleCheckout = async () => {
    const razorpay = await loadRazorpay();
    
    const options = {
      key: 'YOUR_RAZORPAY_KEY', // Replace with your actual key
      amount: total * 100, // Amount in smallest currency unit
      currency: 'USD',
      name: 'VIZGAMES',
      description: 'Game Purchase',
      handler: function(response: any) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        clearCart();
        onClose();
      },
      prefill: {
        email: 'customer@example.com'
      },
      theme: {
        color: '#06b6d4'
      }
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="w-full max-w-md bg-gray-800 h-full p-6 shadow-xl transform transition-transform">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Your Cart</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-gray-400 text-center mt-8">Your cart is empty</p>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 mb-4 bg-gray-700 p-4 rounded-lg">
                  <img src={item.imageUrl} alt={item.title} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-cyan-400">${item.price}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 text-sm hover:text-red-300"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="text-white">x{item.quantity || 1}</div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-700 mt-auto pt-4">
              <div className="flex justify-between text-white mb-4">
                <span className="font-bold">Total:</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg transition-colors"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}