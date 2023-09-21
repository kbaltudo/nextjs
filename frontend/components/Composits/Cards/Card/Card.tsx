import Card_Variant_2 from "./Variants/Variant-2/Variant-2";
import Card_Variant_1 from "./Variants/Variant-1/Variant-1";
import Card_Feature_Card from "./Variants/Variant-3/FeatureCard";
import Section from "../../../PageStructure/Container/Section";
import Styles from "./Card.module.scss"


const Card = ({ content, provider, variant }) => {

    return (
        <>
            <Section replaceclass className={Styles.card}>
                {1 === variant ?
                    <Card_Variant_1 content={content} provider={provider} /> :
                    <>
                        {2 === variant ?
                            <Card_Variant_2 content={content} provider={provider} /> :
                            <Card_Feature_Card content={content} provider={provider} />
                        }
                    </>
                }
            </Section>
        </>
    );
};

export default Card;



