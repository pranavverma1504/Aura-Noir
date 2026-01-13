export default function Footer() {
    return (
        <footer className="bg-gray-900/80 backdrop-blur-md text-white py-16 border-t border-white/10 relative z-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">
                        Aura Noir
                    </h3>
                    <p className="text-gray-400">Essence of Desire. bottled.<br />Crafted in Grasse, France.</p>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-lg">Collection</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-orange-400 transition-colors">All Scents</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition-colors">Gift Sets</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition-colors">Discovery Kit</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-lg">Support</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-orange-400 transition-colors">FAQ</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition-colors">Shipping & Returns</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-lg">Join the Inner Circle</h4>
                    <div className="flex gap-2">
                        <input type="email" placeholder="Your email..." className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500 text-white" />
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">→</button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Aura Noir Parfums. All rights reserved.
            </div>
        </footer>
    );
}
