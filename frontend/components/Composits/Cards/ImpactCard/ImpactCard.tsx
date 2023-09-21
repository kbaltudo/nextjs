import Styles from "./ImpactCard.module.scss";
import { GetImpactCardData } from "./GetImpactCardData";
import { Key } from "react";
import Link from "next/link";
import Title from "../../../Elements/Title";
import Description from "../../../Elements/Description";
const ImpactCard = (props) => {
    const impdata = GetImpactCardData(props?.content?props.content:"");   
  
    return (   
            <>
            <div className="impact-card">                  
                   <div className="card mb-2">
                        <div className="card-body">   
                            <Title className="card-title" type={'h3'}>{card.title}</Title>
                            <Description type="" key={index}>{card.description}</Description>
                            <Link href={card.link.url}>
                                <a className="card-link btn btn-dark">{card.link.text}</a>
                            </Link>                               
                        </div>
                    </div>              
            </div>
            </>   
    );
};

export default ImpactCard;

