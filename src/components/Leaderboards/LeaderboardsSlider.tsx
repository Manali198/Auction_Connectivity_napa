/* eslint-disable react/display-name */
import type { NextPage } from 'next';
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';

type SliderProps = {
  children: any;
  centerMode: boolean;
  slidesToShow?: number;
  dataLength: number;
};

const LeaderboardsSliderComponent: NextPage<any, SliderProps> =
  React.forwardRef(({ children, dataLength }, ref) => {
    const settings = {
      arrows: false,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: dataLength > 3 ? true : false,
      autoplay: true,
      centerPadding: '10px',
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    const slider = useRef(null);

    const scroll = (e: any) => {
      if (slider === null) return;
      // @ts-ignore
      e.wheelDelta > 0
        ? // @ts-ignore
          slider.current && slider.current.slickNext()
        : // @ts-ignore
          slider.current && slider.current.slickPrev();
    };

    useEffect(() => {
      // @ts-ignore
      slider.current.slickGoTo(dataLength <= 2 ? 0 : 1);
      document
        .getElementById('sliderComponent')
        ?.addEventListener('wheel', scroll, true);

      return () => {
        document
          .getElementById('sliderComponent')
          ?.removeEventListener('wheel', scroll, true);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      // @ts-ignore
      <Slider {...settings} ref={ref || slider}>
        {children}
      </Slider>
    );
  });

export default LeaderboardsSliderComponent;
