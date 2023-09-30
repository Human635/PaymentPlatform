//@ts-nocheck
import React from "react";
import { SCCard } from "./ProfileElems.style";

interface ICardProps {}

export const Card = ({}: ICardProps) => {

  return (
    <SCCard>
        <p className="cardType">Example</p>
        <p className="money">1 234 567 UZS</p>
        <div className="cardPriority">Type</div>
        <div className="cardData">
          <div>
            <p className="definition">NameOfCard</p>
            <p className="cardOwner">NameOfOwner</p>
          </div>
          <div>
            <p className="definition">Expiry Date</p>
            <p className="cardOwner">99/99</p>
          </div>
        </div>

    </SCCard>
  );
};
