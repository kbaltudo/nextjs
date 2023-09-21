import Styles from "./RichText.module.scss";
import Container from "../../PageStructure/Container/Container";
import Description from "../../Elements/Description";
import Title from "../../Elements/Title";
import Section from "../../PageStructure/Container/Section";
const RichText = ({ content }) => {
  const data = {
    description: content ? content : "",
  };
  return (
    <Section className={Styles.richtext}>
      {/* Rich Text Content */}
      <div className="col-12">
        <Container>
          <Description className="mb-3" type={undefined}>
            {data.description}
          </Description>
        </Container>
      </div>
    </Section>
  );
};

export default RichText;
