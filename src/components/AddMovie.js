import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    textAlign: "center"
  }
};

const AddMovie = ({
  modalIsOpen,
  closeModal,
  addTitle,
  addDate,
  addRating,
  addImage,
  submitModal
}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form>
          <h1>Add A Movie</h1>
          <label>Movie Name</label>
          <input type="text" onChange={addTitle} />
          <label>Movie release Date</label>
          <input type="text" onChange={addDate} />
          <label>Movie Picture</label>
          <input type="text" onChange={addImage} />
          <label>Movie Rating</label>
          <input type="text" onChange={addRating} />
        </form>
        <button className="Modal-btn" onClick={submitModal}>
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default AddMovie;
