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

const Illustrations = props => (

    <div className="illustrationsDiv container-fluid">
    	<div id="illustrationsTitle" align="center">Illustrations</div>
    	<div id="illustrationsRow" className="row">
    		<div id={"scienceSide" + props.dotColor} align="center" className="scienceSide col-md-6 col-sm-6 illustrationLeftRight">Scientific Illustrations
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
		    		</div>
		    	</div>
	    	</div>
	    	<div id={"weddingSide" + props.dotColor} align="center" className="weddingSide col-md-6 col-sm-6 illustrationLeftRight">Wedding Invitations/Cards
		    	<div className="container">
		    		<div align="center" className="row">
		    			<div align="center" className="col-md-6 col-lg-4">
			    			<div id="square13" className="illustrationSquare"></div>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<div id="square14" className="illustrationSquare"></div>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<div id="square15" className="illustrationSquare"></div>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<div id="square16" className="illustrationSquare"></div>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<div id="square17" className="illustrationSquare"></div>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<div id="square18" className="illustrationSquare"></div>
			    		</div>
		    		</div>
		    		<div align="center" className="row">
		    			<div align="center" className="col-md-6 col-lg-4">
			    			<div id="square19" className="illustrationSquare"></div>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<div id="square20" className="illustrationSquare"></div>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<div id="square21" className="illustrationSquare"></div>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<div id="square22" className="illustrationSquare"></div>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<div id="square23" className="illustrationSquare"></div>
			    		</div>
			    		<div align="center" className="col-md-6 col-lg-4">
			    			<div id="square24" className="illustrationSquare"></div>
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
