import React from 'react';
import Title from "../../../Elements/Title";
import Slug from "../../../Elements/Slug";
import Styles from "./ProfileCard.module.module.scss";
import Image from "next/image";
import Section from "../../../PageStructure/Container/Section";
import TitleDescription from "../../../Molecule/TitleDescription/TitleDescription";
import Container from "../../../PageStructure/Container/Container";
import { GetProfileCardData } from "./GetProfileCardData";


const ProfileCard = ({ content }) => {
    const ProfileCardData = GetProfileCardData(content);
    return(
      <Section className={Styles.assets + " component"}>
        <Container>
          <TitleDescription title={ProfileCardData.title} description={ProfileCardData.description} />
          <div className="row">
            { ProfileCardData?.assets ? ProfileCardData.assets.map((asset) => (
              <div key={asset.id} className={Styles.asset + " col-12 col-md-3 mb-5"}>
                <Image src={asset.image.url} width={asset.image.width} height={asset.image.height} alt={asset.image.alt} />
                <Title type="h5" className="mb-3">{asset.title}</Title>
                {asset.media.url ?
                  <Slug replaceclass type="a" className="btn btn-outline-primary" download="true" Link={asset.media.url}>
                    {ProfileCardData.linkText}
                  </Slug>
                  : ""
                }
              </div>
            ))
              : "No Asset found"
            }
          </div>
        </Container>
    </Section>
    )
}

