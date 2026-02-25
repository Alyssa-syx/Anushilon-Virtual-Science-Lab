import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  Virtual,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import AllReviews from '../../../data/testimonials';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import SectionTitle from '../MicroComponent/SectionTitle';
import Review from './Review';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual]);

const Testimonial = () => {
  const [reviews, SetReviews] = useState([]);
  const { width } = useWindowDimensions();

  // Get all reviews
  useEffect(() => {
    SetReviews(AllReviews);
  }, [reviews]);

  return (
    <section
      className="min-h-auto md:min-h-full bg-cover bg-no-repeat bg-center"
      id="testimonial"
      data-aos="fade-up"
      style={{
        backgroundImage: `url(https://i.ibb.co/c3HqkSY/header-white-bg.png)`,
      }}
    >
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-8 lg:pt-12 lg:pb-8">
        <Fade top>
          <SectionTitle
            title="用户评价"
            description="AI虚拟科学实验室助力提升科学学习环境，为师生提供沟通与协作工具，让学习更便捷。"
            space="mb-2"
          />
        </Fade>
        {/* Review Component */}
        <Slide bottom>
          <div className="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-5">
            <Swiper
              spaceBetween={0}
              slidesPerView={width > 1200 ? 3 : width > 960 ? 2 : 1}
              centeredslide="true"
              navigation
              pagination={{ clickable: true }}
              autoplay={true}
              key={reviews.length}
            >
              {reviews &&
                reviews.map((reviews, index) => (
                  <SwiperSlide key={index}>
                    <Review reviews={reviews} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Testimonial;
