export default function Testimonials() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl text-center font-bold mb-10">What Clients Say</h2>

      <div className="grid md:grid-cols-3 gap-6">
        
        <div className="p-6 bg-white rounded-xl shadow">
          <p>"Amazing service! Got my dream home easily."</p>
          <h4 className="mt-4 font-semibold">– Rahul Sharma</h4>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <p>"Very professional and trustworthy team."</p>
          <h4 className="mt-4 font-semibold">– Aman Verma</h4>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <p>"Best investment advice I received!"</p>
          <h4 className="mt-4 font-semibold">– Neha Gupta</h4>
        </div>

      </div>
    </section>
  );
}