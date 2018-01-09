import React, { Component } from "react";
import Modal from 'react-responsive-modal';
import "./womentorModal.css";
import womentor from '../../images/womentor350px.png';
import womentorImg from '../../images/womentorImg.png';


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
        <Modal  open={open} onClose={this.onCloseModal}>
          <div className="container womentorContainer" id="planitModalContainer">
            <div className="modalTitle" id="womentorModalTitle">Womentor</div>
            <div className="projectDescription">
            Womentor is an app that is still a work in progress. Five other software engineers
            (<a href="https://github.com/cgsarfati/" className="womentorLinks" target="_blank">Charlotte Sarfati</a>,&nbsp;
             <a href="https://github.com/vmirari/" className="womentorLinks" target="_blank">Milagro Arias</a>,&nbsp;
             <a href="https://github.com/ceorourke/" className="womentorLinks" target="_blank">Colleen O'Rourke</a>,&nbsp;
             <a href="https://github.com/agerista/" className="womentorLinks" target="_blank">Amanda Crawford</a>,&nbsp;
             <a href="https://github.com/rhartung/" className="womentorLinks" target="_blank">Robyn Lundin</a>)
            and I came up with the idea during a Hackaton.
            I primarily focused on the Jinja templates, AJAX and jQuery portions of the project. Feel free to check out
            our README on GitHub.
            </div>
            <div align="center">
              <a href="https://github.com/TheGreyHaven/WoMentor" target="_blank"><img responsive="true" id="womentorImg" src={womentorImg}></img></a>
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