import Title from "../../../Elements/Title";
import Styles from "./StatCard.module.scss";
import { GetStatCardData } from "./GetStatCardData";
import { Key } from "react";
import Container from "../../../PageStructure/Container/Container";
import Description from "../../../Elements/Description";
import Image from "next/image";

const StatCard = ({ content }) => {
  const statData = GetStatCardData(content);
  return (
    <>
      <Container>
        <div className=" d-flex ">
          {statData.map(
            (
              statcard: { image: { url: any, width: any, height: any, alt: any }; title: any; description: any },
              index: Key
            ) => (
              <div key={index} className="col-4">
                <div>
                  <div className=" align-self-center ">
                    <Image
                      className="fab fa-facebook-f me-2"
                      src={statcard.image.url}
                      width={statcard.image.width}
                      height={statcard.image.height}
                      alt={statcard.image.alt}
                    />
                    <Title type={undefined}>{statcard.title}</Title>
                    <div className="col-12 col-md-5">
                      <Description type={undefined}>
                        {statcard.description}
                      </Description>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </>
  );
};

export default StatCard;
