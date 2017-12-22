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
          <div className="container" id="planitModalContainer">
            <div className="modalTitle" id="planitModalTitle">Plan-it</div>
            <div className="projectDescription">
            Plan-it was the culmination of all that I learned at Hackbright. Here is a video of me presenting my project. You watch because I can't...
            </div>
            <div id="planitVideo" align="center">
            <iframe src="https://www.youtube.com/embed/IN9C9oIE8CY" responsive="true"></iframe>
            </div>
            <div className="planitLinkDiv" align="center">
              <a href="https://github.com/TheGreyHaven/HB-project" align="center" id="github" className="modalLinks" target="_blank">GitHub Repository</a>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default PlanitModal;