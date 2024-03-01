import React, { Component } from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HxH from "./images/hh.jpg";
import EditSquares from "./editSquares";



function App() {
  return (
    <>
      <div className="imageBanner">
        <img src={HxH} className="img-fluid d-flex align-self-center m-auto" alt="hunter hunter protagonists" />
      </div>

      <div className="bingoContainer text-center d-flex align-items-center grid gap-1">
        <div className="col bingoRows" >
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row bingoSquares"><EditSquares/></div>
        </div>
        <div className="col bingoRows" >
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row bingoSquares"><EditSquares/></div>
        </div>
        <div className="col bingoRows" >
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row starContainer">
            <div className="star"></div>
          </div>
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row bingoSquares"><EditSquares/></div>
        </div>
        <div className="col bingoRows" >
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row bingoSquares"><EditSquares/></div>
        </div>
        <div className="col bingoRows" >
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row bingoSquares"><EditSquares/></div>
          <div className="row bingoSquares"><EditSquares/></div>
        </div>
      </div>
    </>
  );
}

export default App;
