import { useState } from 'react';
import Navbar from './components/Navbar';
import GameCard from './components/GameCard';
import FeaturedGame from './components/FeaturedGame';
import Categories from './components/Categories';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import { featuredGame, games } from './data/games';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const categories = ['Action', 'RPG', 'Strategy', 'Sports'];

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-900">
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-12">
            <FeaturedGame {...featuredGame} />
          </div>

          <Categories categories={categories} />

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Special Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {games.map((game) => (
                <GameCard key={game.id} {...game} />
              ))}
            </div>
          </div>

          <Newsletter />
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;