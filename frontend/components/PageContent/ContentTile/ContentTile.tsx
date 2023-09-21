import Description from "../../Elements/Description";
import Styles from "./ContentTile.module.scss";
import Section from "../../PageStructure/Container/Section";
import { GetContentTileData } from "./GetContentTileData";
import Image from "next/image";

const ContentTile = ({ content, provider }) => {
  const returnData = GetContentTileData(content, provider)
  return (
    <Section style={{ backgroundImage: `url(${returnData.backgroundImage})` }} className={Styles.contentTile + " component"}>
      <div className={Styles.innerWrap}>
        {returnData?.image?.url ?
          <figure>
            <Image src={returnData.image.url} alt={returnData.image.alt} width={returnData.image.width} height={returnData.image.height} />
          </figure> : ""}
        {returnData?.description ?
          <Description type={undefined}>{returnData.description}</Description> : ""}
      </div>
    </Section>
  );
};

export default ContentTile;

ContentTile.defaultProps = {
  provider: ""
};
