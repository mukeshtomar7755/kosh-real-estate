export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <img
        src="/hero.jpg"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight">
          Find Your Dream Property
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          Buy • Sell • Invest with Confidence
        </p>

        <div className="mt-6 flex gap-4 justify-center flex-wrap">
          <a href="#properties">
            <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full">
              View Properties
            </button>
          </a>

          <a href="#contact">
            <button className="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-full">
              Contact Us
            </button>
          </a>
        </div>
      </div>

    </section>
  );
}