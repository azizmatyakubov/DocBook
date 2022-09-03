import React from "react";
import styled from "styled-components";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

const InfoSquareContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 1rem 0rem;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 10px;
    margin-bottom: 0.5rem;
  }
`;

const InfoSquareIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1d3557;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  background-color: #a8dadc;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;
const InfoSquareText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const InfoSquare = (props) => {
  return (
    <InfoSquareContainer>
      <InfoSquareIcon>
        {props.icon === "people" ? (
          <BsFillPeopleFill />
        ) : props.icon === "price" ? (
          <BsCurrencyDollar />
        ) : props.icon === "date" ? (
          <MdDateRange />
        ) : props.icon === "heart" ? (
          <AiFillHeart />
        ) : null}
      </InfoSquareIcon>
      <InfoSquareText>
        <span>{props.text}</span> <h4>{props.number}</h4>
      </InfoSquareText>
    </InfoSquareContainer>
  );
};

export default InfoSquare;
