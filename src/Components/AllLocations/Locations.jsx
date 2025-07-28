const Locations = () => {
  return (
    <div className="bg-green-900 text-white py-12 px-4 mt-20 mb-20 ">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold mb-2">WHERE WE LEND</h1>
        <p className="text-lg mb-8">
          Ridge Street provides hard money loans to real estate investors in 35
          states.
          <br />
          We focus our efforts in{" "}
          <span className="font-bold text-white">Texas</span> and
          <span className="font-bold text-white">Florida</span>.
        </p>
      </div>

      {/* State Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
        {/* Texas Card */}
        <div className="bg-white bg-opacity-10 p-6 rounded-xl w-72">
          <h2 className="text-2xl font-semibold mb-2">Texas</h2>
          <p>Hard Money Loans | DSCR Loans</p>
          <button className="mt-4 px-4 py-2 bg-white text-green-900 rounded-full font-semibold hover:bg-gray-200">
            View All Locations
          </button>
        </div>

        {/* Florida Card */}
        <div className="bg-white bg-opacity-10 p-6 rounded-xl w-72">
          <h2 className="text-2xl font-semibold mb-2">Florida</h2>
          <p>Hard Money Loans | DSCR Loans</p>
          <button className="mt-4 px-4 py-2 bg-white text-green-900 rounded-full font-semibold hover:bg-gray-200">
            View All Locations
          </button>
        </div>
      </div>

      {/* View All Button */}
    </div>
  );
};

export default Locations;
