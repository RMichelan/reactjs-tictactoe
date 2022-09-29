import React, { useEffect, useState } from 'react';
import '../styles/Game.css';



export default function Game() {

  const [tile1, setTile1] = useState('');
  const [tile2, setTile2] = useState('');
  const [tile3, setTile3] = useState('');
  const [tile4, setTile4] = useState('');
  const [tile5, setTile5] = useState('');
  const [tile6, setTile6] = useState('');
  const [tile7, setTile7] = useState('');
  const [tile8, setTile8] = useState('');
  const [tile9, setTile9] = useState('');
  const [canPlay, setCanPlay] = useState(true);
  const [turn, setTurn] = useState("O");
  const [winner, setWinner] = useState("Rodada do X");


  const restartGame = () => {
    setTile1('');
    setTile2('');
    setTile3('');
    setTile4('');
    setTile5('');
    setTile6('');
    setTile7('');
    setTile8('');
    setTile9('');
    setCanPlay(true);
    setTurn("O");
    setWinner("Rodada do X");
  }



  const winConditions = () => {
    if ((tile1 == 'X' && tile2 == 'X' && tile3 == 'X') || (tile1 == 'O' && tile2 == 'O' && tile3 == 'O')) {
      setCanPlay(false);
      setWinner("O vencedor é " + tile1);

    } else if ((tile1 == 'X' && tile4 == 'X' && tile7 == 'X') || (tile1 == 'O' && tile4 == 'O' && tile7 == 'O')) {
      setCanPlay(false);
      setWinner("O vencedor é " + tile1);

    } else if ((tile1 == 'X' && tile5 == 'X' && tile9 == 'X') || (tile1 == 'O' && tile5 == 'O' && tile9 == 'O')) {
      setCanPlay(false);
      setWinner("O vencedor é " + tile1);

    } else if ((tile2 == 'X' && tile5 == 'X' && tile8 == 'X') || (tile2 == 'O' && tile5 == 'O' && tile8 == 'O')) {
      setCanPlay(false);
      setWinner("O vencedor é " + tile2);

    } else if ((tile3 == 'X' && tile6 == 'X' && tile9 == 'X') || (tile3 == 'O' && tile6 == 'O' && tile9 == 'O')) {
      setCanPlay(false);
      setWinner("O vencedor é " + tile3);

    } else if ((tile3 == 'X' && tile5 == 'X' && tile7 == 'X') || (tile3 == 'O' && tile5 == 'O' && tile7 == 'O')) {
      setCanPlay(false);
      setWinner("O vencedor é " + tile3);

    } else if ((tile4 == 'X' && tile5 == 'X' && tile6 == 'X') || (tile4 == 'O' && tile5 == 'O' && tile6 == 'O')) {
      setCanPlay(false);
      setWinner("O vencedor é " + tile4);

    } else if ((tile7 == 'X' && tile8 == 'X' && tile9 == 'X') || (tile7 == 'O' && tile8 == 'O' && tile9 == 'O')) {
      setCanPlay(false);
      setWinner("O vencedor é " + tile7);

    }
  }



  const setTile = (clickedTile) => {
    switch(clickedTile){
      case 1:
        if(tile1 == '' && canPlay == true) {
          if(turn == "O") {
            setTile1('X');
            setTurn('X');
            setWinner("Rodada do O");
          } else {
            setTile1("O");
            setTurn("O");
            setWinner("Rodada do X");
          }
        } 
        break;

      case 2:
        if(tile2 == '' && canPlay == true) {
          if(turn == "O") {
            setTile2('X');
            setTurn('X');
            setWinner('Rodada do O');
          } else {
            setTile2("O");
            setTurn("O");
            setWinner("Rodada do X");
          }
        } 
        break;

      case 3:
        if(tile3 == '' && canPlay == true) {
          if(turn == "O") {
            setTile3('X');
            setTurn('X');
            setWinner('Rodada do O');
          } else {
            setTile3("O");
            setTurn("O");
            setWinner("Rodada do X");
          }
        } 
        break;

      case 4:
        if(tile4 == '' && canPlay == true) {
          if(turn == "O") {
            setTile4('X');
            setTurn('X');
            setWinner('Rodada do O');
          } else {
            setTile4("O");
            setTurn("O");
            setWinner("Rodada do X");
          }
        } 
        break;

      case 5:
        if(tile5 == '' && canPlay == true) {
          if(turn == "O") {
            setTile5('X');
            setTurn('X');
            setWinner('Rodada do O');
          } else {
            setTile5("O");
            setTurn("O");
            setWinner("Rodada do X");
          }
        } 
        break;

      case 6:
        if(tile6 == '' && canPlay == true) {
          if(turn == "O") {
            setTile6('X');
            setTurn('X');
            setWinner('Rodada do O');
          } else {
            setTile6("O");
            setTurn("O");
            setWinner("Rodada do X");
          }
        } 
        break;

      case 7:
        if(tile7 == '' && canPlay == true) {
          if(turn == "O") {
            setTile7('X');
            setTurn('X');
            setWinner('Rodada do O');
          } else {
            setTile7("O");
            setTurn("O");
            setWinner("Rodada do X");
          }
        } 
        break;

      case 8:
        if(tile8 == '' && canPlay == true) {
          if(turn == "O") {
            setTile8('X');
            setTurn('X');
            setWinner('Rodada do O');
          } else {
            setTile8("O");
            setTurn("O");
            setWinner("Rodada do X");
          }
        } 
        break;

      case 9:
        if(tile9 == '' && canPlay == true) {
          if(turn == "O") {
            setTile9('X');
            setTurn('X');
            setWinner('Rodada do O');
          } else {
            setTile9("O");
            setTurn("O");
            setWinner("Rodada do X");
          }
        } 
        break;
    }
  }



  useEffect(() => {
    winConditions();
  });

  

  return (
    <div className="Container">
      <p className='Header-Winner'>{ winner }</p>
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
      <a className='Button-Replay' href='#' onClick={() => restartGame()}>Reiniciar</a>
    </div>
  );
}
