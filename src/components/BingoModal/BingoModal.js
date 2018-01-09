import React, { Component } from "react";
import 'react-responsive-modal/lib/react-responsive-modal.css';
import Modal from 'react-responsive-modal';
import "./bingoModal.css";
import mobingo from '../../images/mobingo350px.png';
import bingoCard from '../../images/bingoCard.png';
import bingoImg from '../../images/bingoImg.png';

//the code for the bones of the modal is from https://www.npmjs.com/package/react-responsive-modal-irp
//I did not write it. I customized it though.
class BingoModal extends Component {
  constructor(props) {
    super(props);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.state = {
      open: false,
    };
  }

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
        <Modal className="bingoModal" open={open} onClose={this.onCloseModal}>
          <div className="container" id="bingoModalContainer">
            <div className="modalTitle" id="bingoModalTitle">Mo'Bingo</div>
            <div className="projectDescription">
            Mo'Bingo was my first web-application. As an illustrator I used to have fun making personalized bingo cards for
            parties but I could never find an online bingo number generator that I liked. I had this project
            in the back of my mind for the first six months of online JavaScript, HTML, CSS and (halfway through building the app) jQuery classes.
            Eventually I created mobil friendly bingo cards to go with the number generator. In the end the code
            might not be what I'd write today but it's part of my journey to becoming a programmer and I will always feel proud of my
            first web-app, Mo'Bingo. Why don't you give it a try.
            </div>
            <div align="center">
              <a href="http://mobingo.club/" target="_blank"><img className="bingoModalImg" src={bingoImg}></img></a>
              <a href="http://mobingo.club/mobile/index.html" target="_blank"><img className="bingoModalImg" src={bingoCard}></img></a>
            </div>
            <div className="col-xs-12 col-sm-6 bingoLinkDiv" align="center">
              <a href="http://mobingo.club/" align="center" className="modalLinks" target="_blank">MoBingo.club</a>
            </div>
            <div className="col-xs-12 col-sm-6 bingoLinkDiv" align="center">
              <a href="https://github.com/TheGreyHaven/BingoWebApp" align="center" id="githubBingo" className="modalLinks" target="_blank">GitHub Repository</a>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default BingoModal;