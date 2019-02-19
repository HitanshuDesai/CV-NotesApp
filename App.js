import React, { Component } from "react";
import "./App.css";
import "./bootstrap.min.css";

function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Footballer Quiz</h1>
        <p> Select the club that the footballer played for or managed</p>
      </div>
    </div>
  );
}

function Club({ title, onClick }) {
  return (
    <div
      className="answer"
      onClick={() => {
        onClick(title);
      }}
    >
      <h3 className="Clubs">{title}</h3>
    </div>
  );
}

function Turn({ footballer, clubs, highlight, onAnswerSelected }) {
  function BackgroundColor(highlight) {
    const map = {
      none: "white",
      correct: "green",
      wrong: "red"
    };
    return map[highlight];
  }
  return (
    <div
      className="row"
      style={{ backgroundColor: BackgroundColor(highlight) }}
    >
      <div className="col-4 offset-1">
        <img
          src={footballer.ImageURL}
          className="FootballerImage"
          alt="Footballer"
        />
      </div>
      <div className="col-5">
        {clubs.map(title => (
          <Club title={title} key={title} onClick={onAnswerSelected} />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <p>This property belongs to Hitanshu Desai Pvt.Ltd</p>
    </div>
  );
}

function Continue(show, onContinue) {
  return (
    <div className="row" style={{ margin: "10px", float: "right" }}>
      {show ? (
        <div>
          <button className="ContinueButton">Continue</button>
        </div>
      ) : null}
    </div>
  );
}
function App({ TurnData, highlight, onAnswerSelected, onContinue }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn
        {...TurnData}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      />
      <Continue show={highlight === "correct"} onContinue={onContinue} />
      <Footer />
    </div>
  );
}

export default App;
