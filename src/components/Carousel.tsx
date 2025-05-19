import React, { useRef } from 'react';
import Slider, {Settings} from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselProps = {
    children: React.ReactNode;
    settings?: Settings;
}

const defaultSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1280, // large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
};


const Carousel: React.FC<CarouselProps> = ({children, settings}) => {
    const sliderRef = useRef<Slider | null>(null);
    return(
        <Slider ref={sliderRef} {...{...defaultSettings, ...settings}}>
            {children}
        </Slider>
    )
}
export default Carousel;

  