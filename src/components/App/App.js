import './styles.modules.css';
import { useState } from 'react';
import StartMenu from '../StartMenu/StartMenu.js';
import { Battle } from "components/Battle/Battle";
import { EndMenu } from 'components/EndMenu/EndMenu';

export function App() {

  const [mode, setMode] = useState('start');
  const [winner, setWinner] = useState();

  return (
    <div className="app-main">
      {mode === 'start' && <StartMenu onStartClick={() => setMode('battle')} />}

      {mode === 'battle' && <Battle onGameEnd={(winner) => {
        setWinner(winner);
        setMode('gameOver');
      }} />}

      {mode === 'gameOver' && <EndMenu winner={winner} onStartClick={() => {
        setWinner(undefined)
        setMode('battle');
      }} />}

    </div>
  );
}