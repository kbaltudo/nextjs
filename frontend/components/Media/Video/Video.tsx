import Container from "../../PageStructure/Container/Container";
import Section from "../../PageStructure/Container/Section";
import { GetVideo } from "./GetVideoData";
import Styles from './Video.module.scss';

const VideoComponent = ({content,provider}) => {
    const videoData = GetVideo(content, provider);
    console.log(videoData);
    return (
        <>
        {videoData.url
            ?
            <Section className={Styles.image + " component"}>
                <Container>
                        <video controls={videoData.settings.controls}
                        loop={videoData.settings.loop} 
                        muted={videoData.settings.muted} 
                        preload={videoData.settings.preload} 
                        style={{ width: videoData.width+'%', height: videoData.height+'%'}}
                        poster={videoData.tumbnial}>
                            <source src={videoData.url} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                </Container>
            </Section>
            : ""
        }
    </>
    )
}

export default VideoComponent

VideoComponent.defaultProps = {
    provider: "",
    alignment: "text-center",
    contet_over_image: true
  };
