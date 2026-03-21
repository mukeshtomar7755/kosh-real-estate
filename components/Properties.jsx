export default function Properties() {
  return (
    <section id="properties" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl text-center font-bold mb-10">Properties</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map((_,i)=>(
          <div key={i} className="bg-white rounded-xl overflow-hidden shadow">
            <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae" className="h-48 w-full object-cover"/>
            <div className="p-4">
              <h4 className="font-semibold">Luxury Apartment</h4>
              <p className="text-orange-500">₹75 Lakh</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
