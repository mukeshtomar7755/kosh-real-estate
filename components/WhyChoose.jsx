export default function WhyChoose() {
  const data = [
    "Trusted by 100+ Clients",
    "Prime Locations Only",
    "Best Price Guarantee",
    "Expert Advisors"
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl text-center font-bold mb-10">Why Choose Us</h2>

      <div className="grid md:grid-cols-4 gap-6 text-center">
        {data.map((item, i) => (
          <div key={i} className="p-6 shadow rounded-xl">
            <p className="font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}