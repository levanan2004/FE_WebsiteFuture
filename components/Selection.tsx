"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ServiceSection = () => {
  return (
    <section className="py-1 mt-[1px] bg-black">
      <div className=" mx-auto text-white text-center text-[12px]">
        <Swiper
          slidesPerView={4} // Hiển thị 4 slide cùng lúc
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full mx-auto"
        >
          <SwiperSlide>
            <div className="p-6 grid-cols-2 rounded-lg shadow-md">
              <div className="w-full flex items-center justify-center ">
                <img
                  src="/assets/service/image_service1.png"
                  alt="image service 1"
                  className="w-[46px] h-[46px] object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">DỊCH VỤ HÀI LÒNG</h3>
              <p>
                Liên hệ Fanpage Hí Store hoặc số Hotline 0768 79 3009 để được
                nhân viên tư vấn
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 rounded-lg shadow-md">
              <div className="w-full flex items-center justify-center">
                <img
                  src="/assets/service/image_service2.png"
                  alt="image service 2"
                  className="w-[46px] h-[46px] object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">BẢO HÀNH CHÍNH HÃNG</h3>
              <p>
                Bảo hành keo chỉ với các sản phẩm giày dép. Hỗ trợ đổi size
                trong vòng 7 ngày
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 rounded-lg shadow-md">
              <div className="w-full flex items-center justify-center">
                <img
                  src="/assets/service/image_service3.png"
                  alt="image service 3"
                  className="w-[46px] h-[46px] object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">SHOPPING CHÍNH HÃNG</h3>
              <p>
                Cam kết chính hãng trọn đời sản phẩm Phát hiện hàng giả đền FULL
                GIÁ TRỊ
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 rounded-lg shadow-md">
              <div className="w-full flex items-center justify-center">
                <img
                  src="/assets/service/image_service4.png"
                  alt="image service 4"
                  className="w-[46px] h-[46px] object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">GIAO HÀNG TOÀN QUỐC</h3>
              <p>Ship COD toàn quốc Khách hàng được kiểm tra trước khi nhận</p>
            </div>
          </SwiperSlide>
          {/* SwiperSlide lập lại lần 2 */}
          <SwiperSlide>
            <div className="p-6 grid-cols-2 rounded-lg shadow-md">
              <div className="w-full flex items-center justify-center ">
                <img
                  src="/assets/service/image_service1.png"
                  alt="image service 1"
                  className="w-[46px] h-[46px] object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">DỊCH VỤ HÀI LÒNG</h3>
              <p>
                Liên hệ Fanpage Hí Store hoặc số Hotline 0768 79 3009 để được
                nhân viên tư vấn
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 rounded-lg shadow-md">
              <div className="w-full flex items-center justify-center">
                <img
                  src="/assets/service/image_service2.png"
                  alt="image service 2"
                  className="w-[46px] h-[46px] object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">BẢO HÀNH CHÍNH HÃNG</h3>
              <p>
                Bảo hành keo chỉ với các sản phẩm giày dép. Hỗ trợ đổi size
                trong vòng 7 ngày
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 rounded-lg shadow-md">
              <div className="w-full flex items-center justify-center">
                <img
                  src="/assets/service/image_service3.png"
                  alt="image service 3"
                  className="w-[46px] h-[46px] object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">SHOPPING CHÍNH HÃNG</h3>
              <p>
                Cam kết chính hãng trọn đời sản phẩm Phát hiện hàng giả đền FULL
                GIÁ TRỊ
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 rounded-lg shadow-md">
              <div className="w-full flex items-center justify-center">
                <img
                  src="/assets/service/image_service4.png"
                  alt="image service 4"
                  className="w-[46px] h-[46px] object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">GIAO HÀNG TOÀN QUỐC</h3>
              <p>Ship COD toàn quốc Khách hàng được kiểm tra trước khi nhận</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceSection;
