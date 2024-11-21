export default function Footer() {
  return (
    <footer className="bg-gray-800 mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400">
          <div>
            <h3 className="text-white font-bold mb-4">About VIZGAMES</h3>
            <p>Your ultimate destination for digital games and entertainment.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-400">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400">Support</a></li>
              <li><a href="#" className="hover:text-cyan-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-400">Discord</a></li>
              <li><a href="#" className="hover:text-cyan-400">Twitter</a></li>
              <li><a href="#" className="hover:text-cyan-400">Facebook</a></li>
              <li><a href="#" className="hover:text-cyan-400">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2024 VIZGAMES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}