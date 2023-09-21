import { GetCardData } from "../../GetCard";
import Section from "../../../../../PageStructure/Container/Section";
import Title from "../../../../../Elements/Title";
import Image from "next/image";
import Styles from './Variant-2.module.scss'

const Card_Variant_2 = ({ content, provider }) => {
    const returnData = GetCardData(content, provider)

    return (
        <Section replaceclass className={Styles.variant_2 + " pt-4 pb-4 text-center"}>
            <figure className="pb-3">
                <Image className="" src={returnData.image.url} width={returnData.image.width} height={returnData.image.height} alt={returnData.image.alt} />
            </figure>
            <div className={Styles.caption}>
                <Title replaceclass className="mt-2 mb-3" type="h4">{returnData.title}</Title>
                <div className='mb-4'>{returnData.shortdescription}</div>
            </div>
        </Section>
    );
};

export default Card_Variant_2;



