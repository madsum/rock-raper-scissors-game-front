import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import history from '../history';
import './RegisterName.css'

export class RegisterName extends Component {
    constructor(props) {
        super(props);
        this.state = {
          playerName: ""
        };
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
        this.setState({playerName: event.target.value});
      }

      handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          this.setState({playerName: e.target.value});
          history.push('/Game/'+this.state.playerName)
        }
      }
    
    render() {
        return (
            <div className="Home">
    
              <form>
                <h3>Please fist register player name to begging the game :</h3>
                <label>
                    Player Name:
                    <input type="text" value={this.state.playerName}  
                    onChange={this.handleChange} 
                    onKeyDown={this.handleKeyDown}/>
                </label>
                <br/>
                <Button variant="btn btn-success" onClick={() =>  history.push('/Game/'+this.state.playerName)}>Register</Button>
              </form>
          </div>
        )
    }
}

export default RegisterName
