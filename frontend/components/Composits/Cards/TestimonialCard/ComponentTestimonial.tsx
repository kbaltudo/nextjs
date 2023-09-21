import Styles from "./TestimonialCard.module.scss";
import { GetTestimonialData } from "./GetTestimonialCardData";
import TestimonialCard from "./TestimonialCard";
import Container from "../../../PageStructure/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import { Key } from "react";
  const ComponentTestimonial = (props) => {    
  const data = GetTestimonialData(props?.content?props.content:""); 
  const variant = props.variant?props.variant:"";
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,    
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,     
        }
      }
    ]
  };
  return (
    <>        

        <div className="row">
          <div className="col-12">
          <Slider {...sliderSettings} className={Styles.hero  + ' ' +  Styles.testimonialslider}>
            {data?.map((returndata,index: Key)=>(                 
              <div key={index} className="col-12 text-center ">  
                  <TestimonialCard content={returndata} variant={2}/>                      
              </div>
            ))}          
          </Slider>
          </div>
        </div>
        <br/>
        <TestimonialCard content={data[0]} variant={1}/>         
     
   
     
    </>
  );
};

export default ComponentTestimonial;
