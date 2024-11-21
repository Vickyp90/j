interface FeaturedGameProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  discount?: string;
}

export default function FeaturedGame({ title, description, imageUrl, price, discount }: FeaturedGameProps) {
  return (
    <div className="relative group">
      <img src={imageUrl} alt={title} className="w-full h-[500px] object-cover rounded-lg" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg">
        <div className="absolute bottom-0 p-6 w-full">
          <h2 className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {title}
          </h2>
          <p className="text-gray-300 mb-4 max-w-2xl">{description}</p>
          <div className="flex items-center gap-4">
            {discount && (
              <div className="bg-green-500 text-white px-3 py-1 rounded text-lg font-bold">
                -{discount}%
              </div>
            )}
            <span className="text-2xl text-white font-bold">${price}</span>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors text-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}