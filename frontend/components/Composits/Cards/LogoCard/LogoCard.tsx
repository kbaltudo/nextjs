import React from "react";
import { GetLogoCardData } from "./GetLogoCardData";
import { Key } from "react";
import Image from "next/image";

const LogoCard = ({ content, provider }) => {
    const cardData = GetLogoCardData(content, provider);
    return(
        <section className="mt-3 mb-3">
            <div className="row">
                {cardData.logos.map((logo: {id:any; image:{ url: string; width: any; height: any; alt: any;  }; }, index: Key) => (                        
                    <div className="col" key={index}>
                        <figure>       
                            <Image src={logo.image.url} width={logo.image.width} height={logo.image.height} alt={logo.image.alt} />
                        </figure>
                    </div>                
                 ))                 
                }
            </div>
        </section>        
    )
}

export default LogoCard;

LogoCard.defaultProps = {
    provider: ""
};

