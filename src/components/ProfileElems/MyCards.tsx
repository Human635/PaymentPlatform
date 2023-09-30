//@ts-nocheck
import React, { useState } from "react";
import Modal from "react-modal";
import { SCMyCards } from "./ProfileElems.style";
import { AppButton } from "../UI/AppButton/AppButton";
import { Card } from "./Card";
import { AddCardModal } from "./ModalWindow/ModalWindow";

interface IMyCardsProps {}

const customStyles = {
  overplay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    position: "absolute",
    width: "100%",
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
    border: "0px solid #ccc",
    background: "0",
    overflow: "auto",
    // WebkitOverflowScrolling: "touch",
    borderRadius: "0px",
    outline: "none",
    padding: "0px"
  }
};

export const MyCards = ({}: IMyCardsProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };



  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <SCMyCards>
      <h5>Мои карты</h5>
      <Card />

      <AppButton
        buttonLabel="Добавить карту"
        isDisabled={false}
        onClick={openModal}
      />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}         style={customStyles} >
        <AddCardModal />
      </Modal>
    </SCMyCards>
  );
};
