import { useState } from "react";
const initialGameBorad=[
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBorad({onSelectSquare,activePlayerSymbol}){
    // const [gameBoard,setGameBoard]=useState(initialGameBorad);
    // function handleSelectSquare(rowIndex,colIndex){
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedBorad=[...prevGameBoard.map(innerArray=>[...innerArray])];
    //         updatedBorad[rowIndex][colIndex] = activePlayerSymbol;
    //           return updatedBorad;
    //     });
    //     onSelectSquare();
    // }
    return(
        <ol id="game-board">
            {gameBoard.map((row,rowIndex)=> <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex)=> <li key={colIndex}>
                        <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}