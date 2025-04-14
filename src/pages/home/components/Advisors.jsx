import React from "react";

const Advisors = ({ label, description, advisorsList }) => {
  return (
    <section className="w-full bg-[#fef9f6] py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          {label}
        </h2>
        <p className="mt-4 text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {advisorsList.map((item) => (
          <div
            key={item.name}
            className="bg-white border border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-[#fdeee3]"
              />
              <div>
                <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-orange-500">{item.title}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advisors;
