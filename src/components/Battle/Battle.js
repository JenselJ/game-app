import './styles.modules.css';
import { PlayerSummary } from 'components/PlayerSummary/PlayerSummary'
import { opponentStats, playerStats } from 'shared/characters';
import { useEffect, useState } from 'react';
import { BattleMenu } from 'components/BattleMenu/BattleMenu';
import { BattleAnnouncer } from 'components/BattleAnnouncer/BattleAnnouncer';
import { useBattleSequence } from 'hooks/useBattleSequence';
import { useAIOpponent } from 'hooks/useAiOpponent';
import { wait } from '@testing-library/user-event/dist/utils';

export function Battle({ onGameEnd }) {


  const [sequence, setSequence] = useState({})

  const {
    turn,
    inSequence,
    playerHealth,
    opponentHealth,
    announcerMessage,
    playerAnimation,
    opponentAnimation
  } = useBattleSequence(sequence);

  const aiChoice = useAIOpponent(turn);

  useEffect(() => {
    if (aiChoice && turn === 1 && !inSequence) {
      setSequence({ turn, mode: aiChoice })
    }

  }, [turn, aiChoice, inSequence])

  useEffect(() => {
    if (playerHealth === 0 || opponentHealth === 0) {
      (async () => {
        await wait(1500);
        onGameEnd(playerHealth === 0 ? opponentStats : playerStats)
      })();
    }

  }, [playerHealth, opponentHealth, onGameEnd]);

  return (
    <>
      <div className='opponent'>
        <div className='summary'>
          <PlayerSummary
            health={opponentHealth}
            name={opponentStats.name}
            level={opponentStats.level}
            maxHealth={opponentStats.maxHealth}
          />
        </div>
      </div>

      <div className='characters'>
        <div className='gameHeader'>
          {playerStats.name} vs {opponentStats.name}
        </div>

        <div className='gameImages'>
          <div className='playerSprite'>
            <img
              alt={playerStats.name}
              src={playerStats.img}
              className={playerAnimation}
            />

          </div>

          <div className='opponentSprite'>
            <img
              alt={opponentStats.name}
              src={opponentStats.img}
              className={opponentAnimation}
            />
          </div>
        </div>

      </div>


      <div className='user'>
        <div className='summary'>
          <PlayerSummary main
            health={playerHealth}
            name={playerStats.name}
            level={playerStats.level}
            maxHealth={playerStats.maxHealth}
          />
        </div>

        <div className='hud'>

          <div className='hudChild'>
            <BattleAnnouncer
              message={
                announcerMessage || `What will ${playerStats.name} do?`
              }
            />
          </div>


          <div className='hudChild'>
            <BattleMenu
              onAttack={() => setSequence({ turn, mode: 'attack' })}
              onMagic={() => setSequence({ turn, mode: 'magic' })}
              onHeal={() => setSequence({ turn, mode: 'heal' })}
            />
          </div>
        </div>

      </div>




    </>
  )
}