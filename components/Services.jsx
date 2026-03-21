export default function Services() {

  const services = [
    {
      title: "Residential Sales",
      desc: "Flats, Villas, Plots in prime locations."
    },
    {
      title: "Commercial Leasing",
      desc: "Office spaces, Shops, Showrooms."
    },
    {
      title: "Investment Advisory",
      desc: "High return property investment guidance."
    }
  ];

  return (
    <section id="services" className="py-16 px-6">
      <h2 className="text-3xl text-center font-bold mb-10">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((item, i) => (
          <div key={i} className="p-6 bg-white shadow-lg rounded-xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-500 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}