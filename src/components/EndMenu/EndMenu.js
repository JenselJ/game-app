import './EndMenu.css';

export function EndMenu({ winner, onStartClick }) {
  return (
    <div className='end-main'>
      <h1>{winner.name} has won!</h1>
      <button className='play-again' onClick={onStartClick}>Play Again</button>
    </div>
  )
}