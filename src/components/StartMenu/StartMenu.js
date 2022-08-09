import './styles.modules.css';

export default function StartMenu({ onStartClick }) {

  return (
    <div className="start-main">
      <button className="startButton" onClick={onStartClick}>
        Start Game
      </button>
    </div>
  )
}