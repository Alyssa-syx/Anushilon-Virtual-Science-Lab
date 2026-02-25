import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import SwiperCore, { A11y, Autoplay, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import bgBannerPartner from "../../../assets/images/background/biography-bg.png";
import SectionTitle from "../MicroComponent/SectionTitle";

// install Swiper components
SwiperCore.use([Pagination, Scrollbar, A11y, Autoplay]);

const partnerData = [
  {
    image: require("../../../assets/images/partner/partner1.png"),
  },
  {
    image: require("../../../assets/images/partner/partner2.png"),
  },
  {
    image: require("../../../assets/images/partner/partner3.png"),
  },
  {
    image: require("../../../assets/images/partner/partner4.png"),
  },
  {
    image: require("../../../assets/images/partner/partner5.png"),
  },
  {
    image: require("../../../assets/images/partner/partner6.png"),
  },
  {
    image: require("../../../assets/images/partner/partner7.png"),
  },
  {
    image: require("../../../assets/images/partner/partner8.png"),
  },
  {
    image: require("../../../assets/images/partner/partner9.png"),
  },
  {
    image: require("../../../assets/images/partner/partner10.png"),
  },
  {
    image: require("../../../assets/images/partner/partner11.png"),
  },
  {
    image: require("../../../assets/images/partner/partner12.png"),
  },
  {
    image: require("../../../assets/images/partner/partner13.png"),
  },
  {
    image: require("../../../assets/images/partner/partner14.png"),
  },
  {
    image: require("../../../assets/images/partner/partner15.png"),
  },
];

const Partner = () => {
  return (
    <section
      className="min-h-full bg-cover bg-no-repeat bg-center"
      id="features"
      data-aos="fade-up"
      style={{
        backgroundImage: `url(${bgBannerPartner})`,
      }}
    >
      <div className="px-4 pt-0 sm:pt-14 pb-14 mx-auto max-w-7xl">
        <SectionTitle
          title="合作教育机构"
          description="将你的学校或机构接入AI虚拟科学实验室，让学生体验仿真实验。注册后可监控学生学习进度、查看教师活动，助力科学教育。"
          space="mb-12"
        />
        <Fade bottom>
          <Swiper
            key={partnerData.length}
            tag="section"
            wrapperTag="ul"
            spaceBetween={0}
            centeredSlides={false}
            autoplay={{ delay: 1800 }}
            slidesPerView={"auto"}
            pagination={{ clickable: false }}
          >
            {/* Getting All Patterns Logo */}
            <div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-8">
              {partnerData &&
                partnerData.map((item, index) => (
                  <div className="flex items-center justify-center" key={index}>
                    <SwiperSlide
                      tag="li"
                      key={index}
                      style={{ width: "180px" }}
                    >
                      <div className="w-36 h-36 flex items-center justify-center mb-6 shrink-0">
                        <img
                          src={item.image.default}
                          alt="合作机构徽标"
                          className="block w-full h-full object-contain"
                          style={{
                            maskImage: "radial-gradient(circle, black 52%, transparent 72%)",
                            WebkitMaskImage: "radial-gradient(circle, black 52%, transparent 72%)",
                          }}
                        />
                      </div>
                    </SwiperSlide>
                  </div>
                ))}
            </div>
          </Swiper>
        </Fade>
        <Fade bottom>
          {/* Institution Registration Button */}
          <div className="flex justify-center mt-8">
            <Link to="/registration" className="deep-button focus:ring-0">
              立即注册你的教育机构
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Partner;
