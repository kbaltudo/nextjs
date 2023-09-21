import Styles from "./SocialLinksCard.module.scss";
import { GetSocialLinksCardData } from "./GetSocialLinksCardData";
import { Key } from "react";
import Title from "../../../Elements/Title";
import Section from "../../../PageStructure/Container/Section";
import Container from "../../../PageStructure/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
  faFacebookSquare,
  faYoutubeSquare,
  faInstagramSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const SocialLinksCard = ({ content, provider }) => {
  const socialLinkData = GetSocialLinksCardData(content, provider);
  return (
    <Container>
      {socialLinkData.map(
        (
          sociallinksCard: {
            id: any,
            Title: any,
            RoundedBox: any,
            Alignment: any,
            SocialLink: {
              id: any,
              FacebookLink: any,
              InstagramLink: any,
              LinkedinLink: any,
              YoutubeLink: any
            }
          },
          index: Key
        ) => (
          <div key={index}>
            <Section >
              <Title type="h2">{sociallinksCard.Title}</Title>
              <div className={sociallinksCard.Alignment == "Horizontal" ? "d-flex" : "d-flex flex-column align-items-start"}>
                {sociallinksCard.SocialLink.FacebookLink == 0 ?
                  ""
                  :
                  <Link passHref className="p-2" href={sociallinksCard.SocialLink.FacebookLink} target="_blank">
                    <FontAwesomeIcon className="icon p-2 fs-1 " icon={sociallinksCard.RoundedBox ? faFacebook : faFacebookSquare} />
                  </Link>
                }
                {sociallinksCard.SocialLink.YoutubeLink == 0 ?
                  ""
                  :
                  <Link className="p-2" href={sociallinksCard.SocialLink.YoutubeLink} target="_blank">
                    <FontAwesomeIcon className="icon p-2 fs-1 " icon={sociallinksCard.RoundedBox ? faYoutube : faYoutubeSquare} />
                  </Link>
                }
                {sociallinksCard.SocialLink.LinkedinLink == 0 ?
                  ""
                  :
                  <Link className="p-2" href={sociallinksCard.SocialLink.LinkedinLink} target="_blank">
                    <FontAwesomeIcon className="icon p-2 fs-1 " icon={sociallinksCard.RoundedBox ? faLinkedinIn : faLinkedin} />
                  </Link>
                }
                {sociallinksCard.SocialLink.InstagramLink == 0 ?
                  ""
                  :
                  <Link className="p-2" href={sociallinksCard.SocialLink.InstagramLink} target="_blank">
                    <FontAwesomeIcon className="icon p-2 fs-1 " icon={sociallinksCard.RoundedBox ? faInstagram : faInstagramSquare} />
                  </Link>
                }
              </div>
            </Section>
          </div>
        )
      )
      }
    </Container>
  );
};

export default SocialLinksCard;












