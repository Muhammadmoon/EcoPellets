const FirstSection = () => {
  return (
    <section className="py-10 md:py-20 bg-gradient-to-r">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-4xl md:text-6xl font-bold text-gradient bg-gradient-to-r from-green-800 to-green-200 bg-clip-text text-transparent pb-6">
          How To use Pellets
        </div>

        <p className="text-base md:text-lg bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent font-bold mb-8">
          No matter what you use, Eco Pellets has everything you need to burn fire with us.
        </p>
       
        <div className="pb-10 ">
          <video className="rounded-xl w-full" autoPlay muted loop>
            <source src="/content/hero-1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
