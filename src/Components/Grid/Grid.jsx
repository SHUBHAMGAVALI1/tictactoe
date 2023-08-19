import Card from "../Card/Card";
import './Grid.css';
import '../Card/Card.css';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function isWinner(arr, symbol) {
    if (
      (arr[0] == arr[1] && arr[1] == arr[2] && arr[2] == symbol) ||
      (arr[3] == arr[4] && arr[4] == arr[5] && arr[5] == symbol) ||
      (arr[6] == arr[7] && arr[7] == arr[8] && arr[8] == symbol) ||
      (arr[0] == arr[3] && arr[3] == arr[6] && arr[6] == symbol) ||
      (arr[1] == arr[4] && arr[4] == arr[7] && arr[7] == symbol) ||
      (arr[2] == arr[5] && arr[5] == arr[8] && arr[8] == symbol) ||
      (arr[0] == arr[4] && arr[4] == arr[8] && arr[8] == symbol) ||
      (arr[2] == arr[4] && arr[4] == arr[6] && arr[6] == symbol)
    ) {
      return symbol;
    }
  
    return null;
  }
  
function Grid({numberofcard}){
 const[turn,setturn]=useState(true);
 const[board,setboard]=useState(Array(numberofcard).fill(""));
 const[winner,setwinner]=useState(null); 


function onplay(index){
    console.log("clicked");
    
    console.log(index);
    if(turn){
        board[index]="O";
console.log(board)
    }
    else{
        board[index]="X";
        console.log(board)
    }
    let win=isWinner(board,turn ?'O':'X');
    console.log(win)
    if(win){
        console.log("win")
        toast.success(`Congratulations! ${win} won!`);

setwinner(win)
    }
    setturn(!turn);
    setboard([...board]);
}

function reset(){
    setboard(Array(numberofcard).fill(""));
    setturn(true);
    setwinner(true);
}
return(
    <>
    {winner && (
      <><h1>the winner is {winner}</h1>
      <ToastContainer position="top-center"/>
<button className="resetbutton" onClick={()=>{reset()}}>reset</button>

      </>
      )}
    <h1> current turn :{(turn) ? 'O' :'X'}</h1>
<div className="grid">

{board.map((ele,index)=>{return<Card gameend={winner?true :false}  play={onplay} player={ele} key={index} index={index}/>})}

</div>
</>)
}
export default Grid;