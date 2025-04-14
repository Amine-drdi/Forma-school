import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "../../../assets/data/testimonial";
 
const Testimonial = () => {
  return (
    <section className="w-full bg-white py-20 px-6 sm:px-12">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Ils nous font confiance : leurs témoignages
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop
          pagination={{ clickable: true, el: '.custom-pagination' }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            900: { slidesPerView: 2, spaceBetween: 40 },
            1300: { slidesPerView: 3, spaceBetween: 50 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition-all h-full flex flex-col justify-between relative">
                
                {/* Avatar */}
                <div className="flex flex-col items-center">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-center mt-4">
                    <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.position}</p>
                  </div>
                </div>

                {/* Texte avec guillemets */}
                <div className="mt-6 text-sm text-gray-700 leading-relaxed text-center relative px-6 pt-4 pb-6">
                  <p>{item.description}</p>

                  {/* Guillemets bien placés dans la box */}
                  <FaQuoteLeft className="absolute left-0 top-0 text-[#c86104] opacity-20 w-4 h-4" />
                  <FaQuoteRight className="absolute right-0 bottom-0 text-[#c86104] opacity-20 w-4 h-4" />
                </div>

                {/* Étoiles */}
                <div className="mt-2 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < item.note ? "text-[#c86104]" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" text-center mt-6 bg-primary" />

      </div>
    </section>
  );
};

export default Testimonial;
