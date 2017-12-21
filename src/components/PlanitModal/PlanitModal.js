import React, { Component } from "react";
import Modal from 'react-responsive-modal';
import "./planitModal.css";
import planit from '../../images/planit350px.png';;


class PlanitModal extends React.Component {
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
        <img src={planit} onClick={this.onOpenModal}></img>
        <Modal  open={open} onClose={this.onCloseModal} little>
          <h2>Hi modal</h2>
        </Modal>
      </div>
    );
  }
}

export default PlanitModal;