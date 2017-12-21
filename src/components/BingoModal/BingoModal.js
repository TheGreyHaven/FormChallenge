import React, { Component } from "react";
import Modal from 'react-responsive-modal';
import "./bingoModal.css";
import mobingo from '../../images/mobingo350px.png';


class BingoModal extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <img src={mobingo} onClick={this.onOpenModal}></img>
        <Modal  open={open} onClose={this.onCloseModal} little>
          <h2>Simple centered modal</h2>
        </Modal>
      </div>
    );
  }
}

export default BingoModal;