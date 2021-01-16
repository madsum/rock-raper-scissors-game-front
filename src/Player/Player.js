import React from "react";
import scissors from "../resources/scissors.png";
import paper from "../resources/paper.png";
import rock from "../resources/rock.png";

const Player = ({ weapon }) => (
  <>
    <div className="player">
      <img
        className="player-image"
        src={
          weapon === "rock" ? rock : weapon === "scissors" ? scissors : paper
        }
        alt="Rock Paper Scissors"
      />
    </div>
  </>
);

export default Player;
