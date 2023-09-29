import React from "react";

interface UserBioItemProps {
  fieldName: string;
  fieldValue: string;
}

export const UserBioItem = ({ fieldName, fieldValue }: UserBioItemProps) => {
  return (
    <div className="userInfo">
      <p className="secondaryText info">{fieldValue}</p>
      <p className="value">{fieldName}</p>
    </div>
  );
};
