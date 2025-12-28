export default function Hero() {
  return (
    <section
      className="relative h-[70vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Rent Bikes & Cars Anytime, Anywhere
        </h1>
        <p className="mt-4 text-lg text-white/90 font-medium">
          Affordable • Trusted • 24×7 Service
        </p>
        <button className="mt-6 bg-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Book Your Ride
        </button>
      </div>
    </section>
  );
}
