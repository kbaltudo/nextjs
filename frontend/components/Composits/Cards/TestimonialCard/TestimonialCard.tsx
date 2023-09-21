import Styles from "./TestimonialCard.module.scss";
import Container from "../../../PageStructure/Container/Container";
import  TestimonialVariant1  from "./variants/TestimonialVariant1";
import  TestimonialDefault  from "./variants/TestimonialDefault";
const TestimonialCard = (props) => { 
  const data = props?.content?props.content: "", 
        variant = props?.variant?props.variant : "";
        
       
  return ( 
       <>  
          {1 == variant ?
          <TestimonialVariant1 content={data}/>
          :
          <TestimonialDefault content={data}/>  
          }      
        </>
  );
};

export default TestimonialCard;
