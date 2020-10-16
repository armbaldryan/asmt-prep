import React from "react";
import { CardTitle, CardWrapper } from "./styles";

const Card = ({ path, name, image }) => {
  return (
    <CardWrapper to={path}>
      <img src={image} alt="" />
      <CardTitle>{name}</CardTitle>
    </CardWrapper>
  );
};

export default Card;
