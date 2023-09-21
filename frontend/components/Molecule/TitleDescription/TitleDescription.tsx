import React from "react";
import Title from "../../Elements/Title";
import Description from "../../Elements/Description";
import Styles from "./TitleDescription.module.scss";
const TitleDescription = ({ title, description }) => {
  return (
    <div className="row">
      <div className={"col-12 w-75 m-auto text-center mb-5"}>
        <Title type="h2">{title}</Title>
        <Description className="lead" type={undefined}>
          {description}
        </Description>
      </div>
    </div>
  );
};

export default TitleDescription;
