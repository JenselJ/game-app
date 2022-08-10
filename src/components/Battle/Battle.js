import './styles.modules.css';
import { PlayerSummary } from 'components/PlayerSummary/PlayerSummary'
import { opponentStats, playerStats } from 'shared/characters';
import { useState } from 'react';
import { BattleMenu } from 'components/BattleMenu/BattleMenu';
import { BattleAnnouncer } from 'components/BattleAnnouncer/BattleAnnouncer';

export function Battle() {


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
            // className=''
            />

          </div>

          <div className='opponentSprite'>
            <img
              alt={opponentStats.name}
              src={opponentStats.img}
            // className=''
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
              onAttack={() => console.log('Attack!')}
              onMagic={() => console.log('Magic!')}
              onHeal={() => console.log('Heal!')}
            />
          </div>
        </div>

      </div>




    </>
  )
}