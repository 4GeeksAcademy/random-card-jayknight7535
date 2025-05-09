import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {}
  //write your code  
  const suits=['♥️', '♦️', '♠️', '♣️']
   function randomizedsuit(suits){
     let suit = Math.floor(Math.random() * suits.length);
    return suits[suit]}
  let Suits =randomizedsuit(suits)
   document.querySelector('#topSuit').innerHTML= Suits
    document.querySelector('#revSuit').innerHTML= Suits  
    
  const ranks=['2','3','4','5','6','7','8','9','J','Q','K','A']
   function randomizedrank(ranks){
    let rank = Math.floor(Math.random() * ranks.length);
    return ranks[rank]}
    document.querySelector('#Rank').innerHTML = randomizedrank(ranks)
 
  

 
  


  

 
  
  
