export default function Newsletter() {
  return (
    <div className="bg-gray-800 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
      <p className="text-gray-300 mb-6">
        Subscribe to our newsletter for the latest games and exclusive offers!
      </p>
      <div className="flex max-w-md mx-auto gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  );
}