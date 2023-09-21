import Styles from "../Webinar/Webinar.module.scss";
import Container from "../../PageStructure/Container/Container";
import Title from "../../Elements/Title";
import Image from "next/image";
import Section from "../../PageStructure/Container/Section";
import TitleDescription from "../../Molecule/TitleDescription/TitleDescription";
import Description from "../../Elements/Description";
import DateTime from "../../Elements/DateTime";
import { GetWebinars } from "./GetWebinarData";
import { Key } from "react";

const VideoListing = ({ content }) => {
  const card = GetWebinars(content); 
  return (
    <Section className={Styles.videolisting + " component"}>
      <div
        className="wrapper pt-5 pb-5"
        style={{
          backgroundImage: `url(${
            card?.backgroundImage ? card.backgroundImage : ""
          })`,
        }}
      >
        <div className="card-wrap">
          <section className="cards">
            <Container>
              {card
                ? card.map((
                  card: { id: any; title: any; date:any; description: any; link: any; phone:any; author:any; startTime:any; endTime:any; Image:any; Video:any; slug: any; },
                  index: Key
                ) => (
                    <div key={index} className={Styles.card + " row mb-5 pb-5"}>
                      <figure className={`col-12 col-md-4`}>
                        <Image
                          src={card.Image.url}
                          width={card.Image.width}
                          height={card.Image.height}
                          alt={card.Image.alt}
                        />
                      </figure>
                      <div className={Styles.caption + " col-12 col-md-8"}>
                        <Title replaceclass className="mt-2 mb-3" type="h4">
                          {card.title}
                        </Title>
                        <span className="fw-bold fst-italic pb-2">
                          <DateTime date={card?.date ? card.date : ""} />
                        </span>
                        <Description type={undefined} className="mb-4">
                          {card.description}
                        </Description>
                        <span className="fw-bold fst-italic pb-2">
                          {card.startTime + card.endTime}
                          {/* <DateTime hideDate={false}  showtime={true} date={card?.startTime ? card.startTime : ""} /> */}
                        </span>
                        <div className="text-success fw-bold pb-3">
                          Author : {card.author}
                        </div>
                        <a href={card.slug} className="btn btn-outline-primary">
                          {content.buttonTitle
                            ? content.buttonTitle
                            : "Learn More"}
                        </a>
                        {card?.Video?.url ? (
                          <video
                            className="mw-100 mt-3"
                            width={card.Video.width}
                            height={card.Video.height}
                            controls
                          >
                            <source src={card.Video.url} type="video/mp4" />
                          </video>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ))
                : ""}
            </Container>
          </section>
        </div>
      </div>
    </Section>
  );
};

export default VideoListing;
