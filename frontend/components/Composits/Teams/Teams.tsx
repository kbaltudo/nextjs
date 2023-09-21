import React from "react";
import Title from "../../Elements/Title";
import Image from "next/image";
import Section from "../../PageStructure/Container/Section";
import TitleDescription from "../../Molecule/TitleDescription/TitleDescription";
import Styles from "./Teams.module.scss";
import Container from "../../PageStructure/Container/Container";
import { GetTeamsData } from "./GetTeamsData";
import { Key } from "react";

const Teams = ({ content, provider }) => {
  const teamsData = GetTeamsData(content, provider);
  return (
    <Section className={Styles.teams + " component"}>
      <Container>
        <TitleDescription title={teamsData.title} description={teamsData.description} />
        <div className="row">
          {teamsData.teamMembers.map((teamMember:{id:any; title:any; role:any; shortDescription:any; slug:any; image: { url: string; width: any; height: any; alt: any; }; }, index: Key) => (
                <div
                  key={index}
                  className={Styles.team + " col-md-2 col-lg-4 text-center"}
                >
                  <figure>
                    <Image
                      className="rounded-circle"
                      src={teamMember.image.url}
                      width={teamMember.image.width}
                      height={teamMember.image.height}
                      alt={teamMember.image.alt}
                    />
                  </figure>
                  <div className={Styles.caption + " mb-4"}>
                    <Title replaceclass className="mt-2 mb-3" type="h4">
                      {teamMember.title}
                    </Title>
                    <div>
                      <em>{teamMember.role}</em>
                    </div>
                    {/* <div className={Styles.location}><b>{team.location}</b></div> */}
                  </div>
                  <div>{teamMember.shortDescription}</div>
                </div>
              ))
            }
        </div>
      </Container>
    </Section>
  );
};

export default Teams;

Teams.defaultProps = {
  provider: ""
};
