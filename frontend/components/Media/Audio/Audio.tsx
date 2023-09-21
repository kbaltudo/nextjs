import Container from "../../PageStructure/Container/Container";
import Section from "../../PageStructure/Container/Section";
import { GetAudio } from "./GetAudioData";
import Styles from './Audio.module.scss';

const AudioComponent = ({content,provider}) => {
    const audioData = GetAudio(content, provider);
    console.log(audioData);
    return (
        <>
        {audioData.url
            ?
            <Section className={Styles.image + " component"}>
                <Container>
                <audio controls={audioData.settings.controls}
                        loop={audioData.settings.loop} 
                        muted={audioData.settings.muted} 
                        preload={audioData.settings.preload}  style={{ width: audioData.width+'%'}}>
                    <source src={audioData.url} type="audio/mp3"/>
                    <source src={audioData.url} type="audio/ogg"/>
                    Your browser does not support the audio element.
                </audio>
                </Container>
            </Section>
            : ""
        }
    </>
    )
}

export default AudioComponent

AudioComponent .defaultProps = {
    provider: "",
    alignment: "text-center",
    contet_over_image: true
  };
