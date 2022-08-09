import './styles.modules.css';
import { useState } from 'react';
import StartMenu from '../StartMenu/StartMenu.js';
import { Battle } from "components/Battle/Battle";

export function App() {

  const [mode, setMode] = useState('start');

  return (
    <div className="app-main">
      {mode === 'start' && <StartMenu onStartClick={() => setMode('battle')} />}

      {mode === 'battle' && <Battle />}

      {mode === 'gameOver' && <>Game Over</>}

    </div>
  );
}