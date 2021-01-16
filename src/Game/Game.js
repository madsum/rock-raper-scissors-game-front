  import React, { Component } from 'react'
  import Player from '../Player/Player';
  import CurdApi from '../CurdUtil/CurdApi';
  import './Game.css'

  const weapons = ["rock", "paper", "scissors"];
  
  const Result = {
    WIN: 'WIN',
    LOSS: 'LOSS',
    TIE: 'TIE'
  }
  
  export class Game extends Component {
      
    constructor(props) {
        super(props);
        this.state = {
          player: weapons[0],
          machine: weapons[1],
          winner: "",
          round: 0,
          playerName: ""
        };      
    }
          
      
    startGame(weapon) {
      let counter = 0;
      let gameInterval = setInterval(() => {
        counter++;
        this.setState({player: weapon});
        this.setState({
          machine: weapons[Math.floor(Math.random() * weapons.length)],
          winner: ""
        });
        if (counter > 5) {
          clearInterval(gameInterval);
          this.setState({
            winner: this.selectWinner()
          });
        }
      }, 100);
      this.setState({ round: this.state.round + 1 });
    };

    selectWinner = () => {
      const { player, machine } = this.state;
      let result = {
        name: "",
        round: this.state.round,
        result: Result.LOSS
      }
      if (player === machine) {
        result.name = 'it is tie';
        result.result = Result.TIE;
        CurdApi.postScore(result);
        return "Oops it's a Tie!";
      } else if (
        (player === "rock" && machine === "scissors") ||
        (player === "scissors" && machine === "paper") ||
        (player === "paper" && machine === "rock")
      ) {
        result.name = this.state.playerName;
        result.result = Result.WIN;
        CurdApi.postScore(result);
        return this.state.playerName + ' Wins!';
      } else {
        result.name = 'Machine';
        result.result = Result.WIN;
        CurdApi.postScore(result);
        return "Machine  Wins!";
      }
    };

    componentDidMount(){
      if(this.props.match.params.title == 'empty'){
        alert('First Register a player name to begin the game');
      }
      this.setState({playerName: this.props.match.params.title});
      
    }

    render() {
      const { player, machine, winner } = this.state;
      return (
        this.state.playerName === '' || this.state.playerName === 'empty' ? 
        <>
          <h1>First Register a player name to begin the game</h1>
        </> :
        <>
          <h1 className="h2" >
            {this.state.playerName} welcome in  <br/>Rock Paper Scissors Game
          </h1>
          <br/>
          <div >
            <label className="round">
            Round:  {this.state.round}
            </label>
          <div>
            <label className="label">&nbsp;&nbsp; {this.state.playerName} :  
              <Player weapon={player} /> 
            </label>
            
            <label className="label"> Machine : 
              <Player weapon={machine} /> 
            </label>
          </div>
          <div>
            <h6 className="h6">Please select an option:</h6>
          </div>
          <div>
              <button
                className="weaponBtn"
                onClick={() => this.startGame("rock")}>
                Rock
              </button>
              <button
                className="weaponBtn"
                onClick={() => this.startGame("paper")}>
                Paper
              </button>
              <button
                className="weaponBtn"
                onClick={() => this.startGame("scissors")}>
                Scissor
              </button>
            </div>
            <div className="winner">{winner ? winner : null}
            </div>
          </div>
        </>
      );
    }
  }

  export default Game
