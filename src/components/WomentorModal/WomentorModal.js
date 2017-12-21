import React, { Component } from "react";
import Modal from 'react-responsive-modal';
import "./womentorModal.css";
import womentor from '../../images/womentor350px.png';


class WomentorModal extends React.Component {
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
        <img src={womentor} onClick={this.onOpenModal}></img>
        <Modal  open={open} onClose={this.onCloseModal} little>
          <h2>Hi you</h2>
        </Modal>
      </div>
    );
  }
}

export default WomentorModal;