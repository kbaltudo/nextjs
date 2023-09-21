import { GetCardData } from "../../GetCard";
import Section from "../../../../../PageStructure/Container/Section";
import Title from "../../../../../Elements/Title";
import Image from "next/image";
import Styles from './Variant-1.module.scss'

const Card_Variant_1 = ({ content, provider }) => {
    const returnData = GetCardData(content, provider)

    return (
        <>
            <Section replaceclass className={Styles.variant_1 + " pt-4 pb-4"}>
                <div className="row align-items-center">
                    <figure className="col-md-4 col-lg-2 ">
                        <Image className="rounded-circle" src={returnData.image.url} width={returnData.image.width} height={returnData.image.height} alt={returnData.image.alt} />
                    </figure>
                    <div className={Styles.caption + " col-md-8 col-lg-10"}>
                        <Title replaceclass className="mt-2 mb-3" type="h4">{returnData.title}</Title>
                        <div className='mb-4'>{returnData.shortdescription}</div>
                    </div>
                </div>
            </Section>

        </>
    );
};

export default Card_Variant_1;



