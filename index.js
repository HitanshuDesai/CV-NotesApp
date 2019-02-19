import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { shuffle, sample } from "underscore";

const footballers = [
  {
    name: "Frank Lampard",
    ImageURL: "Images/lampard.jpg",
    Source: "Google",
    clubs: ["Chelsea", "West Ham", "Manchester City", "Derby County"]
  },
  {
    name: "Steven Gerrard",
    ImageURL: "Images/gerrard.jpg",
    Source: "Google",
    clubs: ["Liverpool", "Rangers"]
  },
  {
    name: "Ryan Giggs",
    ImageURL: "Images/giggs.jpg",
    Source: "Google",
    clubs: ["Manchester United", "Salford City"]
  },
  {
    name: "Gareth Bale",
    ImageURL: "Images/bale.jpg",
    Source: "Google",
    clubs: ["Real Madrid", "Tottenham Hotspurs", "Southampton"]
  },
  {
    name: "Thiery Henry",
    ImageURL: "Images/henry.jpg",
    Source: "Google",
    clubs: ["Arsenal", "Barcelona", "Monaco"]
  },
  {
    name: "Vincent Kompany",
    ImageURL: "Images/kompany.jpg",
    Source: "Google",
    clubs: ["Manchester City", "Anderlecht", "Hamburg"]
  }
];

function getTurnData(footballers) {
  const allClubs = footballers.reduce(function(p, c, i) {
    return p.concat(c.clubs);
  }, []);

  const threeRandomClubs = shuffle(allClubs).slice(0, 3);
  const answer = sample(threeRandomClubs);

  return {
    clubs: threeRandomClubs,
    footballer: footballers.find(footballer =>
      footballer.clubs.some(title => title === answer)
    )
  };
}
function resetState() {
  return {
    TurnData: getTurnData(footballers),
    highlight: ""
  };
}
let state = resetState();

function onAnswerSelected(answer) {
  const isCorrect = state.TurnData.footballer.clubs.some(
    club => club === answer
  );
  state.highlight = isCorrect ? "correct" : "wrong";
  render();
}

function render() {
  ReactDOM.render(
    <App
      {...state}
      onAnswerSelected={onAnswerSelected}
      onContinue={() => {
        state = resetState();
        render();
      }}
    />,
    document.getElementById("root")
  );
}
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
