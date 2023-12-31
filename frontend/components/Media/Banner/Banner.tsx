import Styles from "./Banner.module.scss";
import Slider from "react-slick";
import Container from "../../PageStructure/Container/Container";
import Title from "../../Elements/Title";
import Description from "../../Elements/Description";
import { GetBanner } from "./GetBannerData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Key } from "react";
import Section from "../../PageStructure/Container/Section";



const Banner = ({ content, provider, alignment}) => {
  const bannerData = GetBanner(content, provider);
  return (
    <>
      <Section replaceclass className={Styles.banner + " p-0"} >
        <section>
          <div style={{ backgroundImage: `url(${bannerData.desktopimage.url})` }} className={Styles.slide + " row pb-5"}>
            <div className={" col align-self-center"}>
              <Container>
                <div className={alignment}>
                  <Title type={undefined}>{bannerData.title}</Title>
                  {bannerData?.description ?
                    <div className="col-12">
                      <Description type={undefined}>{bannerData.description}</Description>
                    </div> : ""}
                </div>
              </Container>
            </div>
          </div>
        </section>
        {/* <Section replaceclass className="d-md-none mobile-view" >
          {content_over_image ?
            <div style={{ backgroundImage: `url(${bannerData.mobileimage.url})` }} className={Styles.slide + " row  pb-5  d-md-none"}>
              <div className="col align-self-center">
                <Container>
                  <div className={alignment + " w-75 m-auto"}>
                    <Title type={undefined}>{bannerData.title}</Title>
                    {bannerData?.description ?
                      <div className="col-12">
                        <Description type={undefined}>{bannerData.description}</Description>
                      </div> : ""}
                  </div>
                </Container>
              </div>
            </div> :
            <div className={Styles.slide + " row d-md-none"}>
              <figure className="p-0">
                <img src={bannerData.mobileimage.url} className="p-0" alt={bannerData.mobileimage.alt} />
              </figure>
              <div className="col align-self-center pt-5 pb-5">
                <Container>
                  <div className={alignment + " w-75 m-auto"}>
                    <Title type={undefined}>{bannerData.title}</Title>
                    {bannerData?.description ?
                      <div className="col-12">
                        <Description type={undefined}>{bannerData.description}</Description>
                      </div> : ""}
                  </div>
                </Container>
              </div>
            </div> */}
      </Section>
    </>
  );
};

export default Banner;

Banner.defaultProps = {
  provider: "",
  alignment: "text-left",
  contet_over_image: true
};