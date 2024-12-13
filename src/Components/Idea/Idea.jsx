import water from "../../assets/CW_March_IMG_1457a3cQ-1.jpg"

const Idea = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Featured Campaign
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src={water}
              alt="Campaign Image"
              className="w-full h-64 md:h-80 lg:h-full object-cover rounded-lg shadow-lg"
            />
            <span className="absolute top-4 left-4 bg-green-500 text-white text-xs md:text-sm font-semibold py-1 px-3 rounded-full">
              75% Funded
            </span>
          </div>
          <div className="flex flex-col justify-between">
            <div className="lg:mt-24">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                "Clean Water for All" Initiative
              </h3>
              <p className="text-gray-700 text-sm md:text-base mb-6">
                Join us in bringing clean water to underprivileged communities. Your
                contributions can help us install sustainable water systems in
                remote areas. Together, we can make a difference.
              </p>
              <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                <strong className="text-gray-800">$37,500</strong> raised of
                <strong className="text-gray-800"> $50,000</strong>
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Idea;