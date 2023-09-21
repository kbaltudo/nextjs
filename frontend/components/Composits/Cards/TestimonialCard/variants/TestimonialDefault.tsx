import Styles from "../TestimonialCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faQuoteLeft,faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Description from "../../../../Elements/Description";
import Image from 'next/image';
const TestimonialDefault = (props) => { 
  const data = props.content;
   return ( 
       <>  
        <div className={"text-center " + Styles.testimonialcard}> 
          <div className={'about-author'}>  
              <FontAwesomeIcon className={"icon "+ Styles.quoteicon + " " + Styles.iconleft} icon={faQuoteLeft} /> 
              {data.author.description}
              <FontAwesomeIcon className={"icon "+ Styles.quoteicon + " " + Styles.iconright} icon={faQuoteRight} />
            </div>

              <div className={Styles.authorimage} >               
               <Image  src={data.author.authorImage.url} alt={data.author.authorImage.alt} width={100} height={100} />
              </div>

              <br/>

                <p><strong>{data.author.nickname}</strong>
                  <br/>{data.author.designation}
                  <br/>{data.author.organization}
                </p>
          </div>
   
       
    </>
  );
};

export default TestimonialDefault;
