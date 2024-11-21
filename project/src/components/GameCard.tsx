import { useCart } from '../context/CartContext';
import { Game } from '../data/games';

export default function GameCard({ id, title, price, imageUrl, discount, tags }: Game) {
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group perspective">
      <div className="relative transform-style-3d transition-transform duration-500 group-hover:rotate-y-12">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        {discount && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-bold transform rotate-z-12">
            -{discount}%
          </div>
        )}
      </div>
      <div className="p-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded transform transition-transform hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-green-500 font-bold">${price}</span>
          <button
            onClick={() => addToCart({ id, title, price, imageUrl, tags, discount })}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}