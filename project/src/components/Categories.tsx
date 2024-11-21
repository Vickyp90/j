interface CategoriesProps {
  categories: string[];
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div 
            key={category} 
            className="bg-gray-800 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-700 transition-colors"
          >
            <span className="text-white font-medium">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}