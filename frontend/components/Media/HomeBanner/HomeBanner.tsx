import Styles from "./HomeBanner.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Key } from "react";
import Banner from "../Banner/Banner";



const HomeBanner = ({ content, provider, alignment, content_over_image }) => {
  const bannerData = content;
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    adaptiveHeight: true
  };

  return (
    <Slider {...sliderSettings} className={Styles.hero + " heroBanner"}>
      {bannerData.map((banner: any, index: Key) =>
      (
        <div key={index}>
          <Banner content={banner} provider={provider} />
        </div>
      )
      )}
    </Slider>
  );
};

export default HomeBanner;

HomeBanner.defaultProps = {
  provider: "",
  alignment: "text-center",
  contet_over_image: true
};