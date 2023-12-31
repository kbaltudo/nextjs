import Title from '../../Elements/Title';
import Description from '../../Elements/Description';
import Image from "next/image";
import Styles from "./Modal.module.scss";
import { GetCardData } from '../../Composits/Cards/Card/GetCard';


const ModalPopup = ({ content, provider, id, modalSize}) => {  
  const returnData = GetCardData(content, provider)
  return (
    <section className={Styles.modal}>
        <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false">
            <div className={modalSize + " modal-dialog"}>
              <div className="modal-content">
                <div className="modal-header">
                  <Title type="h5">{returnData.title}</Title>
                  <button type="button" className="btn-close btn btn-primary" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>                
                <div className="modal-body">
                  {returnData?.image?.url ?
                  <figure>
                    <Image src={returnData.image.url} alt={returnData.image.alt} width={returnData.image.width} height={returnData.image.height} className="mb-3" />
                  </figure> : ""}
                 {returnData?.description ?
                  <Description type={undefined}>{returnData.description}</Description> :""}
                </div> 
                </div>
            </div>
        </div>
    </section>
  );
}

export default ModalPopup;

ModalPopup.defaultProps = {
  provider: "",
  content:"",
  modalSize:"modal-lg",
};