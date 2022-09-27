import React, { useEffect, useState } from 'react';
import '../styles/Game.css';
import { Playing } from '../controllers/Playing';

export default function Home() {

  const [tile1, setTile1] = useState('');
  const [tile2, setTile2] = useState('');
  const [tile3, setTile3] = useState('');
  const [tile4, setTile4] = useState('');
  const [tile5, setTile5] = useState('');
  const [tile6, setTile6] = useState('');
  const [tile7, setTile7] = useState('');
  const [tile8, setTile8] = useState('');
  const [tile9, setTile9] = useState('');
  const [turn, setTurn] = useState("O");

  const setTile = (clickedTile) => {
    switch(clickedTile){
      case 1:
        if(tile1 == '') {
          if(turn == "O") {
            setTile1('X');
            setTurn('X');
          } else {
            setTile1("O");
            setTurn("O");
          }
        } 
        break;

      case 2:
        if(tile2 == '') {
          if(turn == "O") {
            setTile2('X');
            setTurn('X');
          } else {
            setTile2("O");
            setTurn("O");
          }
        } 
        break;

      case 3:
        if(tile3 == '') {
          if(turn == "O") {
            setTile3('X');
            setTurn('X');
          } else {
            setTile3("O");
            setTurn("O");
          }
        } 
        break;

      case 4:
        if(tile4 == '') {
          if(turn == "O") {
            setTile4('X');
            setTurn('X');
          } else {
            setTile4("O");
            setTurn("O");
          }
        } 
        break;

      case 5:
        if(tile5 == '') {
          if(turn == "O") {
            setTile5('X');
            setTurn('X');
          } else {
            setTile5("O");
            setTurn("O");
          }
        } 
        break;

      case 6:
        if(tile6 == '') {
          if(turn == "O") {
            setTile6('X');
            setTurn('X');
          } else {
            setTile6("O");
            setTurn("O");
          }
        } 
        break;

      case 7:
        if(tile7 == '') {
          if(turn == "O") {
            setTile7('X');
            setTurn('X');
          } else {
            setTile7("O");
            setTurn("O");
          }
        } 
        break;

      case 8:
        if(tile8 == '') {
          if(turn == "O") {
            setTile8('X');
            setTurn('X');
          } else {
            setTile8("O");
            setTurn("O");
          }
        } 
        break;

      case 9:
        if(tile9 == '') {
          if(turn == "O") {
            setTile9('X');
            setTurn('X');
          } else {
            setTile9("O");
            setTurn("O");
          }
        } 
        break;
    }
  }

  // useEffect(() => {
  //   setTile();
  // })


  return (
    <div className="Container">
      <div className='Button-Tile-Row'>
        <a href='#' className='Button-Tile' id='btn1' onClick={() => setTile(1)}>{tile1}</a>
        <a href='#' className='Button-Tile' id='btn2' onClick={() => setTile(2)}>{tile2}</a>
        <a href='#' className='Button-Tile' id='btn3' onClick={() => setTile(3)}>{tile3}</a>
      </div>
      <div className='Button-Tile-Row'>
        <a href='#' className='Button-Tile' id='btn4' onClick={() => setTile(4)}>{tile4}</a>
        <a href='#' className='Button-Tile' id='btn5' onClick={() => setTile(5)}>{tile5}</a>
        <a href='#' className='Button-Tile' id='btn6' onClick={() => setTile(6)}>{tile6}</a>
      </div>
      <div className='Button-Tile-Row'>
        <a href='#' className='Button-Tile' id='btn7' onClick={() => setTile(7)}>{tile7}</a>
        <a href='#' className='Button-Tile' id='btn8' onClick={() => setTile(8)}>{tile8}</a>
        <a href='#' className='Button-Tile' id='btn9' onClick={() => setTile(9)}>{tile9}</a>
      </div>
    </div>
  );
}
