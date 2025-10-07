import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { useRef } from "react";

const RoomCard = ({ cardData, title, active }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div>
      <div className="px-6 py-3 relative container mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">{title} &gt;</h2>
        <div className="flex gap-2">
          <button
            ref={prevRef}
            className="custom-prev bg-white border border-gray-300 text-gray-700 p-2 rounded-full hover:bg-gray-50 transition shadow-sm"
          >
            <IoIosArrowBack />
          </button>
          <button
            ref={nextRef}
            className="custom-next bg-white border border-gray-300 text-gray-700 p-2 rounded-full hover:bg-gray-50 transition shadow-sm"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Swiper Container */}
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
          1440: { slidesPerView: 7 },
        }}
      >
        {cardData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="rounded-2xl overflow-hidden  cursor-pointer transition">
              {/* Image Container */}
              <div className="relative h-44 w-full">
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-full w-full object-cover rounded-2xl"
                />
                {/* Guest Favorite Badge */}
                <div className="absolute top-3 left-3 bg-gray-100 text-xs font-medium rounded-full px-3 py-1 shadow-sm">
                  Guest favorite
                </div>
                {/* Heart Button */}
                <button className="absolute top-3 right-3 hover:scale-110 transition-all duration-300 hover:mt-0.5 ">
                  <FaHeart size={24} className="text-gray-700" />
                </button>
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="font-medium text-gray-900 mb-1 ">
                  {data.title}
                </h3>
                <div className="flex gap-2">
                  <p className="text-sm text-gray-600 mb-1">
                    ${data.price} for {data.nights} nights
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
                      <FaStar size={10} className="text-gray-600" />{" "}
                      {data.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default RoomCard;
