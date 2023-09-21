import React from "react";
import Title from "../../Elements/Title";
import Description from "../../Elements/Description";
import Section from "../../PageStructure/Container/Section";
import Styles from "./TwoColumnTile.module.scss";
import Container from "../../PageStructure/Container/Container";

const TwoColumnTile = ({ content }) => {
  const data = {
    title1: content?.title1 ? content.title1 : "",
    description1: content?.description1 ? content.description1 : "",
    title2: content?.title2 ? content.title2 : "",
    description2: content?.description2 ? content.description2 : "",
    backgroundImage: content?.backgroundImage ? content.backgroundImage : "",
  };
  return (
    <Section
      className={Styles.twoColumnTile + " component"}
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <Container>
        <div className="row">
          <div className="col col-md-6 pe-md-5">
            <Title className="pb-3" type="h2">
              {data.title1}
            </Title>
            <Description type={undefined}>{data.description1}</Description>
          </div>
          <div className="col col-md-6 ps-md-5">
            <Title className="pb-3" type="h2">
              {data.title2}
            </Title>
            <Description type={undefined}>{data.description2}</Description>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TwoColumnTile;
