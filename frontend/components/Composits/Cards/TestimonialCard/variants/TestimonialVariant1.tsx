import Styles from "../TestimonialCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faQuoteLeft ,faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import Description from "../../../../Elements/Description";
import Image from 'next/image';
const TestimonialVariant1 = (props) => { 
  const data = props.content; 
  
  return ( 
       <>  
        <div className={"text-center " + Styles.testimonialcard}> 
              <div className="row">
                  <div className="col-12 col-md-4">
                      <div className={Styles.authorimage} >               
                        { data?.author?.authorImage?.url ? <Image  src={data.author.authorImage.url} alt={data.author.authorImage.alt} width={100} height={100} /> : ""}
                      </div>
                  </div>
                  <div className="col-12 col-md-8">
                    <div className={'about-author'}>  
                      <FontAwesomeIcon className={"icon "+ Styles.quoteicon + " " + Styles.iconleft} icon={faQuoteLeft} /> 
                      {data?.author?.description ? data.author.description : ""}
                      <FontAwesomeIcon className={"icon "+ Styles.quoteicon + " " + Styles.iconright} icon={faQuoteRight} />
                    </div>
                    <br/>
                      <p>{data?.author?.nickname ?<strong>{data.author.nickname}</strong> : ""}
                      <br/>{data.author.designation ? data.author.designation : ""}
                      <br/>{data.author.organization ? data.author.organization : ""}
                    </p>

                  </div>
                
              </div>
          </div>
    </>
  );
};

export default TestimonialVariant1;
