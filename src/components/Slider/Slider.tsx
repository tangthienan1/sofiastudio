import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { SliderType } from './type';

export const Slider: FC<SliderType> = ({ feedbackPathList }) => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={90}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }}
            centeredSlides
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            navigation
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
        >
            {feedbackPathList.map((path, index) => (
                <SwiperSlide key={index} className="!h-auto">
                    <div className="h-full flex items-center">
                        <Image
                            src={`/images/feedbacks/${path}`}
                            width={500}
                            height={500}
                            alt={path}
                            className=" rounded-xl"
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
