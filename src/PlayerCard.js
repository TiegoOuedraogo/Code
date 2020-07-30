import React from 'react';
const scissors = "https://i.imgur.com/pgjyhIZ.png";
const rock =     "https://i.imgur.com/LghSkIw.png";
const paper =    "https://i.imgur.com/2gsdqvR.png";
/** every time you should create your own file for the functional component */
const PlayerCard = (props) =>{
const sign = props.sign
let image = ""
if(sign == "rock"){
      image = rock;
}else if(sign == "paper"){
      image = paper;
}else{
      image = scissors;
}
      return(
            /**props is an object with key value pairs so we can use the dot notation to access the values within the object 
            <div className='playerCard'>{props.signs}</div>*/
            <div className='player-card'>
                  <img src={image}/>
            </div>
      )
}
export default PlayerCard;