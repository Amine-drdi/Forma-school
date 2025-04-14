import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";

const Slider = () => {
  const videoRef = useRef(null);
  const [loopMode, setLoopMode] = useState(false);

  const handleSlideChange = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }

    const numberOfSlides = 1;
    if (numberOfSlides > 1) {
      setLoopMode(true);
    }
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={loopMode}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={600}
      onSlideChange={handleSlideChange}
      modules={[Autoplay]}
      className="w-full"
    >
      <SwiperSlide>
        <section className="relative flex items-center justify-center h-screen overflow-hidden">
          {/* Vidéo en fond sans assombrissement */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            playsInline
            loop
          >
            <source src="/videos/btp_video.mp4" type="video/mp4" />
          </video>

          {/* Overlay plus léger pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10" />

          {/* Contenu principal */}
          <div className="relative z-20 px-6 text-center text-white max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-md">
              🎓 Rejoignez notre communauté de professionnels du BTP !
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold text-orange-400 mb-4 drop-shadow">
              Formez-vous pour bâtir l'avenir en toute sécurité !
            </h2>
            <p className="text-sm md:text-base mb-6 drop-shadow">
              Accédez à des formations certifiées en BTP : CACES® R482, R486, R489, échafaudages, habilitations électriques B0 à H2, FEEBAT RENOVE, sécurité et SST.
            </p>
            <NavLink
              to="/formations/categorie/btp"
              className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-orange-500 transition duration-300"
            >
              Découvrir notre catalogue BTP
            </NavLink>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
