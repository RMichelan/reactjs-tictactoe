import '../styles/Game.css';

export default function Game() {
  return (
    <div className="Container">
        {/* <a href='#' className="Button">Play</a> */}
        <div className='Button-Tile-Row'>
            <a href='#' className='Button-Tile'>X</a>
            <a href='#' className='Button-Tile'>X</a>
            <a href='#' className='Button-Tile'>X</a>
        </div>
        <div className='Button-Tile-Row'>
            <a href='#' className='Button-Tile'>X</a>
            <a href='#' className='Button-Tile'>X</a>
            <a href='#' className='Button-Tile'>X</a>
        </div>
        <div className='Button-Tile-Row'>
            <a href='#' className='Button-Tile'>X</a>
            <a href='#' className='Button-Tile'>X</a>
            <a href='#' className='Button-Tile'>X</a>
        </div>
    </div>
  );
}
