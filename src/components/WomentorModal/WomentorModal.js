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
          <div className="container" id="planitModalContainer">
            <div className="modalTitle" id="womentorModalTitle">Womentor</div>
            <div className="projectDescription">
            Womentor is an app that is still a work in progress. Five other software engineers
            (Charlotte Sarfati, Milagro Arias, Colleen O'Rourke, Amanda Crawford, Robyn Lundin)
            and myself came up with the idea during a Hackaton.
            I primarily focused on the Jinja templates, AJAX and jQuery portions of the project. Feel free to check out
            our README on GitHub.
            </div>
            <div className="womentorLinkDiv" align="center">
              <a href="https://github.com/TheGreyHaven/WoMentor" align="center" id="github" className="modalLinks" target="_blank">GitHub Repository</a>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default WomentorModal;