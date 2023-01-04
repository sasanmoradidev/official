import { EffectFlip } from 'swiper';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/effect-flip';
import './styles.scss';


const ProjectSlider = function(props){
    const {slides} = props;
    // console.log(slides[0].slider);
    return(
        <Swiper
        slidesPerView={1}
        >
            {slides[0].slider.map((slide, idx)=>(
            <SwiperSlide key={idx}>
                <img src={slide} alt={slides.title} />
            </SwiperSlide>
            ))}
        </Swiper>
        
    );
}

export default ProjectSlider;