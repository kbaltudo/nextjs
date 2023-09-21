import React from 'react'
import Styles from './CardBlock.module.scss'
import Container from '../../PageStructure/Container/Container'
import Title from '../../Elements/Title'
import Image from 'next/image'
import TitleDescription from '../../Molecule/TitleDescription/TitleDescription'
import { GetCardBlockData } from './GetCardBlockData'
import Card from '../Cards/Card/Card'
import ModalPopup from '../../PageContent/Modal/ModalPopup'



const CardBlock = ({ content, provider, variant }) => {
  const cardBlockData = GetCardBlockData(content, provider);
  return (
    <>
      <section className={Styles.cardblock + " component"}>
        <div className="wrapper pt-5 pb-5" style={{ backgroundImage: `url(${cardBlockData.backgroundImage ? cardBlockData.backgroundImage : ""})` }}>
          <Container>
            <TitleDescription title={cardBlockData.title} description={cardBlockData.description} />
            {cardBlockData?.cards ?
              <section className="row pb-3">
                {cardBlockData.cards.map((cardList, index) => (
                  <>
                    {1 === variant ?                       
                      <Card content={cardList} provider={provider} variant={variant} />:                     
                      <div key={index} className={Styles.cardv1 + " col-md-4"}>
                        <Card content={cardList} provider={provider} variant={variant} />                       
                      </div>
                    }                    
                  </>
                ))}
                 <>
                      <button type='button' className='btn btn-primary w-25 mt-2' data-bs-target="#xyz" data-bs-toggle="modal">Modal Popup</button>
                      <ModalPopup provider={provider} content={cardBlockData.cards[0]} id={"xyz"} modalSize={"modal-large"} />
                     </>
              </section>
              : ""}
          </Container>
        </div>
      </section>
    </>
  )
}

export default CardBlock;
CardBlock.defaultProps = {
  variant: 1,
  provider: ""
};