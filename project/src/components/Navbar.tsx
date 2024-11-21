import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onCartClick: () => void;
}

export default function Navbar({ onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();

  const cartItemsCount = items.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform">
              VIZGAMES
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-cyan-400 transition-colors">Store</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Library</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Community</a>
            <div className="relative">
              <input
                type="text"
                placeholder="Search games..."
                className="bg-gray-800 px-4 py-1 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
              />
              <Search className="absolute right-3 top-1.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={onCartClick}
              className="relative hover:text-cyan-400 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <User className="h-6 w-6 hover:text-cyan-400 cursor-pointer" />
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-cyan-400">Store</a>
              <a href="#" className="hover:text-cyan-400">Library</a>
              <a href="#" className="hover:text-cyan-400">Community</a>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search games..."
                  className="bg-gray-800 px-4 py-1 rounded-full text-sm w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <Search className="absolute right-3 top-1.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}