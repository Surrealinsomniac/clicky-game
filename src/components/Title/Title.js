import React from "react";
import "./Title.css";

const Title = props => (
    <div className="jumbotron col-md-12">
  <div className="container">
    <h1>Doctor Who Clicky Game</h1>
    <h2>{props.message}</h2>
    <h2>Score: {props.Score} || High Score: {props.TopScore}</h2>
  </div>
</div>
);

export default Title;