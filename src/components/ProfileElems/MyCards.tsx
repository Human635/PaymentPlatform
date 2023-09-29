//@ts-nocheck
import React, { useState } from "react";
import Modal from "react-modal";
import { SCMyCards } from "./ProfileElems.style";
import { AppButton } from "../UI/AppButton/AppButton";
import { Card } from "./Card";
import { AddCardModal } from "./ModalWindow/ModalWindow";

interface IMyCardsProps {}

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
      
      <AppButton buttonLabel="Добавить карту" isDisabled={false} onClick={openModal}/>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <AddCardModal />
      </Modal>
    </SCMyCards>
  );
};
