//@ts-nocheck
import React, { useState } from "react";
import Modal from "react-modal";
import { SCMyCards } from "./ProfileElems.style";
import { AppButton } from "../UI/AppButton/AppButton";
import { Card } from "./Card";
import { ThemeAddCardModal } from "./ModalWindow.style copy";
import { AppInput } from "./AppInput";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface IMyCardsProps {}

interface AddCard {
  username: string;
  usercardnum: string;
  usercarddates: string;
  userCVC: string;
}

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
    padding: "0px",
  },
};

export const MyCards = ({}: IMyCardsProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const { control, handleSubmit } = useForm<AddCard>({
    defaultValues: {
      username: "",
      usercardnum: "",
      usercarddates: "",
      userCVC: "",
    },
  });

  return (
    <SCMyCards>
      <h5>Мои карты</h5>
      <Card />

      <AppButton
        buttonLabel="Добавить карту"
        isDisabled={false}
        onClick={openModal}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ThemeAddCardModal className="container">
          <button onClick={closeModal} id="closeModal">
            <svg
              id="exit"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95044C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z"
                stroke="#1B1B1B"
                stroke-width="1.5"
              />
              <path
                d="M13.7678 10.2322L10.2322 13.7678M13.7678 13.7678L10.2322 10.2322"
                stroke="#1B1B1B"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>

          <div className="heading">
            <h1>Payment details</h1>
          </div>

          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <AppInput type="text" id="name" placeholder="Name" {...field} />
            )}
          />
          <label>Name</label>

          <Controller
            name="usercardnum"
            control={control}
            render={({ field }) => (
              <AppInput
                type="text"
                id="card"
                placeholder="0000 0000 0000 0000"
                {...field}
              />
            )}
          />
          <label>Card number</label>

          <div className="exp-cvc">
            <div className="expiration">
              <Controller
                name="usercarddates"
                control={control}
                render={({ field }) => (
                  <AppInput
                    className="inputCard"
                    id="expiry"
                    type="text"
                    isRequired={true}
                    placeholder="00/00"
                    {...field}
                  />
                )}
              />
              <label>Expiration date</label>
            </div>

            <div className="security">
              <Controller
                name="userCVC"
                control={control}
                render={({ field }) => (
                  <AppInput type="text" id="cvc" placeholder="XXX" {...field} />
                )}
              />
              <label>CVC</label>
            </div>
          </div>

          <div className="btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8768 16.1682C13.0292 15.7535 13.6375 15.7535 13.7899 16.1682L14.2066 17.3023C14.2554 17.435 14.3637 17.5395 14.5013 17.5865L15.6774 17.9884C16.1075 18.1353 16.1075 18.7218 15.6774 18.8688L14.5013 19.2706C14.3637 19.3177 14.2554 19.4221 14.2066 19.5549L13.7899 20.6889C13.6375 21.1037 13.0292 21.1037 12.8768 20.6889L12.4601 19.5549C12.4113 19.4221 12.303 19.3177 12.1653 19.2706L10.9892 18.8688C10.5591 18.7218 10.5591 18.1353 10.9892 17.9884L12.1653 17.5865C12.303 17.5395 12.4113 17.435 12.4601 17.3023L12.8768 16.1682Z"
                stroke="#1B1B1B"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M14.6394 3.47278C14.8711 2.84241 15.7956 2.84241 16.0272 3.47278L16.8211 5.63332C16.8953 5.8351 17.0599 5.99384 17.2691 6.06534L19.5097 6.83089C20.1634 7.05426 20.1634 7.94574 19.5097 8.16911L17.2691 8.93466C17.0599 9.00616 16.8953 9.1649 16.8211 9.36668L16.0272 11.5272C15.7956 12.1576 14.8711 12.1576 14.6394 11.5272L13.8455 9.36668C13.7714 9.1649 13.6068 9.00616 13.3975 8.93466L11.157 8.16911C10.5032 7.94574 10.5032 7.05426 11.157 6.83089L13.3975 6.06534C13.6068 5.99384 13.7714 5.8351 13.8455 5.63332L14.6394 3.47278Z"
                stroke="#1B1B1B"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M6.48641 9.36289C6.65786 8.87904 7.34214 8.87904 7.51358 9.36289L7.9824 10.686C8.03728 10.8409 8.15913 10.9627 8.31401 11.0176L9.63711 11.4864C10.121 11.6579 10.121 12.3421 9.63711 12.5136L8.31401 12.9824C8.15913 13.0373 8.03728 13.1591 7.9824 13.314L7.51358 14.6371C7.34214 15.121 6.65786 15.121 6.48641 14.6371L6.0176 13.314C5.96272 13.1591 5.84087 13.0373 5.68599 12.9824L4.36289 12.5136C3.87904 12.3421 3.87904 11.6579 4.36289 11.4864L5.68599 11.0176C5.84087 10.9627 5.96272 10.8409 6.0176 10.686L6.48641 9.36289Z"
                stroke="#1B1B1B"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
            <button id="submit">Submit</button>
          </div>
        </ThemeAddCardModal>
      </Modal>
    </SCMyCards>
  );
};
