import Styles from "./promo.module.scss";
import Container from "../../PageStructure/Container/Container";
import Description from "../../Elements/Description";
const Promo = ({ promodata }) => {
  const data = {
    Description: promodata.Description ? promodata.Description : "",
  };
  return (
    <div className={Styles.promo}>
      {/* Promo Content */}
      {promodata.map((promo) => (
        <div key={promo.id} className="col-12">
          <Container>
            <Description
              className="shadow p-3 mb-5 bg-white rounded"
              type={undefined}
            >
              {data.Description}
            </Description>
          </Container>
        </div>
      ))}
    </div>
  );
};

export default Promo;
