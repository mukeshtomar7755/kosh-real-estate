export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-md p-4 flex justify-between items-center px-8 z-50">
      <h1 className="font-bold text-xl text-orange-500">Kosh</h1>

      <div className="flex gap-6 font-medium">
        <a href="#" className="hover:text-orange-500">Home</a>
        <a href="#services" className="hover:text-orange-500">Services</a>
        <a href="#properties" className="hover:text-orange-500">Properties</a>
        <a href="#contact" className="hover:text-orange-500">Contact</a>
      </div>
    </nav>
  );
}