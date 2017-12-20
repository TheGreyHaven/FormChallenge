import React, { Component } from "react";
import "./illustrations.css";
import blueEarth from '../../images/ill-BlueEarthBall2.png';
import doubleSun from '../../images/ill-DoubleSun.png';
import exoUpClose from '../../images/ill-ExoUpClose.png';
import exoAndMoon from '../../images/ill-GasGient&Moon.png';
import gTypeStar from '../../images/ill-GTypeStar.png';
import viewFromMoon from '../../images/ill-Star&GasGientFromMoon.png';
import transitingExo from '../../images/ill-TransitingExoStar.png';
import poster from '../../images/ill-Poster.png';
import planetCores from '../../images/ill-planetCores.png';
import bag from '../../images/ill-sculpt-bag.png';
import hat1 from '../../images/ill-sculpt-hat1.png';
import hat2 from '../../images/ill-sculpt-hat2.png';
import hat3 from '../../images/ill-sculpt-hat3.png';
import boot from '../../images/ill-sculpt-boot.png';
import skull1 from '../../images/ill-sculpt-skull1.png';
import skull2 from '../../images/ill-sculpt-skull2.png';
import figure1 from '../../images/ill-sculpt-figure1.png';
import figure2 from '../../images/ill-sculpt-figure2.png';

import wedBridge from '../../images/ill-wed-bridge.png';
import wedShells from '../../images/ill-wed-shells.png';
import wedGarden from '../../images/ill-wed-garden.png';
import wedUnderSea from '../../images/ill-wed-underSea.png';
import wedSeaMist from '../../images/ill-wed-seaMist.png';
import wedPostCard from '../../images/ill-wed-postCard.png';
import wedMemories from '../../images/ill-wed-memories.png';
import wedGatsby from '../../images/ill-wed-gatsby.png';
import wedWorldsFair from '../../images/ill-wed-wordsFair.png';
import wedCrispedia from '../../images/ill-wed-crispedia.png';
import wedChinaPlate from '../../images/ill-wed-chinaPlate.png';
import wedBird from '../../images/ill-wed-bird.png';
import wedBerries from '../../images/ill-wed-berries.png';
import wedPassport from '../../images/ill-wed-passport.png';
import wedPostcardTable from '../../images/ill-wed-postcardTable.png';
import wedSteamShip from '../../images/ill-wed-steamShip.png';
import wedMovie from '../../images/ill-wed-movie.png';
import wedSTD from '../../images/ill-wed-STD.png';

const Illustrations = props => (

    <div className="illustrationsDiv container-fluid">
    	<div id="illustrationsTitle" align="center">Illustrations / Art</div>
    	<div id="illustrationsRow" className="row">
    		<div id={"scienceSide" + props.dotColor} align="center" className="scienceSide col-md-6 col-sm-6 illustrationLeftRight">Scientific Illustrations / Sculptures
		    	<div className="container">
		    		<div align="center" className="row">
		    			<div align="center" className="col-md-6 col-lg-4">
		    				<img className="scienceImg" src={blueEarth}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="scienceImg" src={doubleSun}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="scienceImg" src={exoUpClose}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="scienceImg" src={gTypeStar}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="scienceImg" src={viewFromMoon}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="scienceImg" src={exoAndMoon}></img>
			    		</div>
		    		</div>
		    		<div align="center" className="row">
		    			<div align="center" className="col-md-6 col-lg-4">
			    			<img className="scienceImg" src={transitingExo}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="scienceImg" src={poster}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="scienceImg" src={planetCores}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="scienceImg" src={hat1}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="scienceImg" src={hat2}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="scienceImg" src={hat3}></img>
			    		</div>
		    		</div>
		    		<div align="center" className="row">
		    			<div align="center" className="col-md-6 col-lg-4">
			    			<img className="scienceImg" src={bag}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="scienceImg" src={boot}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="scienceImg" src={skull1}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="scienceImg" src={skull2}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="scienceImg" src={figure1}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="scienceImg" src={figure2}></img>
			    		</div>
		    		</div>
		    	</div>
	    	</div>
	    	<div id={"weddingSide" + props.dotColor} align="center" className="weddingSide col-md-6 col-sm-6 illustrationLeftRight">Wedding Invitations / Cards
		    	<div className="container">
		    		<div align="center" className="row">
		    			<div align="center" className="col-md-6 col-lg-4">
			    			<img className="wedImg" src={wedBridge}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="wedImg" src={wedShells}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="wedImg" src={wedGarden}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="wedImg" src={wedUnderSea}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="wedImg" src={wedSeaMist}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="wedImg" src={wedPostCard}></img>
			    		</div>
		    		</div>
		    		<div align="center" className="row">
		    			<div align="center" className="col-md-6 col-lg-4">
			    			<img className="wedImg" src={wedMemories}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="wedImg" src={wedGatsby}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="wedImg" src={wedWorldsFair}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="wedImg" src={wedCrispedia}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="wedImg" src={wedChinaPlate}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="wedImg" src={wedBird}></img>
			    		</div>
		    		</div>
		    		<div align="center" className="row">
		    			<div align="center" className="col-md-6 col-lg-4">
			    			<img className="wedImg" src={wedBerries}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="wedImg" src={wedPassport}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="wedImg" src={wedPostcardTable}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="wedImg" src={wedSteamShip}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="wedImg" src={wedMovie}></img>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<img className="wedImg" src={wedSTD}></img>
			    		</div>
		    		</div>
		    	</div>
	    	</div>
	    </div>
    </div>

);


			// <div id="weddingSide" className="col-med-6">
		 //    	<div align="center" className="col-md-6 thumbnailOuterDiv">
		 //    		<div id="square13" align="center" className="illustrationSquare">
		 //    		</div>
		 //    	</div>
		 //    	<div align="center" className="col-md-6 thumbnailOuterDiv">
		 //    		<div id="square1" align="center" className="illustrationSquare">
		 //    		</div>
		 //    	</div>
		 //    </div>

export default Illustrations;
