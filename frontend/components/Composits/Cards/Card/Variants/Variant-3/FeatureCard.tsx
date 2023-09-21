import { GetCardData } from "../../GetCard";
import Section from "../../../../../PageStructure/Container/Section";
import Title from "../../../../../Elements/Title";
import Image from "next/image";
import Styles from './FeatureCard.module.scss'
import Description from "../../../../../Elements/Description";

const Card_Feature_Card = ({ content, provider }) => {
    const returnData = GetCardData(content, provider)

    return (
        <>
            <Section replaceclass className={Styles.faeturecard + " pt-4 pb-4"}>
                    <figure className={Styles.icon + " w-25 m-0"}>
                        <Image className="" src={returnData.image.url} width={returnData.image.width} height={returnData.image.height} alt={returnData.image.alt} />
                    </figure>
                    <div className={Styles.caption}>
                        <Title replaceclass className="mt-2 mb-3" type="h4">{returnData.title}</Title>
                        <Description type={undefined}>{returnData.shortdescription}</Description>                        
                    </div>
            </Section>

        </>
    );
};

export default Card_Feature_Card;



