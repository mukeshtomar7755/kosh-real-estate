export default function Footer() {
  return (
    <footer className="bg-[#0b1d33] text-white py-10 px-6 mt-10">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400">Kosh Real Estate</h2>
          <p className="mt-3 text-gray-300 text-sm">
            We provide trusted property solutions with transparency and smart investments.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="#services" className="hover:text-orange-400">Services</a></li>
            <li><a href="#properties" className="hover:text-orange-400">Properties</a></li>
            <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-gray-300 text-sm">📞 +91 8448932592</p>
          <p className="text-gray-300 text-sm">📧 koshrealestate@gmail.com</p>
          <p className="text-gray-300 text-sm">📍 Uttam Nagar, Delhi</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-600 pt-4">
        © 2026 Kosh Real Estate. All rights reserved.
      </div>

    </footer>
  );
}