import React, { Component } from 'react';
import PlayerCard from './PlayerCard'
/** We know that this application will randomly generate the players picks.   ▸Our application will also displays images of the players picks, have a button that will play the game, and decide the winner.   ▸Usually, and almost always, when you have values that are changing in your views you are going to need Stateful component. */
class Game extends Component{
  /**Let's add state to our component, and some behavior that will cause that state to change.▸To do this we need to add a constructor to your Game class component and define state.  Note that state is always defined as a Javascript object that will have key value pairs */
  constructor(){
    super();
    /**We initialize our state by setting this.state to a Javascript object and the key and value we want our component to be initialized to. */
    this.signs = ['rock','scissors','paper'];
    this.state = {
      playerOne: 'rock',
      playerTwo: 'scissors'
    }
  }
  /**to create a method in our Game component that will allow us to set the state to a randomly generated sign from our signs array */
  playGame = () =>{
    this.setState({
      /**vWe use the signs array and then call Math.random() *3 because Math.random generates values between 0-1.  Then we use Math.floor() to remove any decimal places and round down. */
      playerOne: this.signs[Math.floor(Math.random() *3)],
      playerTwo: this.signs[Math.floor(Math.random() *3)]
    })
  }
  /**Now we need to make sure our Game decides who has won the round.  To do this we need to create another method.  Lets call this method decideWinner */
  decideWinner=()=>{
    const playerOne= this.state.playerOne
    const playerTwo = this.state.playerTwo
    if(playerOne === playerTwo){
      return "No winner! The game is tie!"
    }else if((playerOne === 'rock' && playerTwo === 'scissors' || playerOne ==='paper' && playerTwo === 'rock' || playerOne ==='scissors' && playerTwo === 'paper')){
      return "playerOne is the WINNER"
    }else{
      return "playerTwo is the WINNER"
    }
  }
  clear=()=>{
    this.setState({
      
    })
  }
  render(){
    return (
      <div className='style'>
        <div>

        {/**those are the components they are not tags so no need of opened and closing tags  
         * 
         * We initialize our state by setting this.state to a Javascript object and the key and value we want our component to be initialized to.
         * The sign property we are passing to our component is going to be passed in as a key on the props object and the valuewill be whatever this.state.playerOne || this.state.playerTwo equals.
        */}

          <PlayerCard sign={this.state.playerOne}/>
          <PlayerCard sign={this.state.playerTwo}/>
          
 
        </div>
        <div className='winner'>{this.decideWinner()}</div>
        {/* /**Lets attach a onClick event listener to our button.  This will invoke our playGame method every time the button is clicked */}
        <button type='button' onClick={this.playGame}>Play the game</button>
      </div>
    );
  }
}
export default Game;

/** in your return statements you can only have one parent JSX element.  A common pattern is to wrap everything in a div */