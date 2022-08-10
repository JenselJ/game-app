import { wait } from "@testing-library/user-event/dist/utils"
import { useEffect, useState } from "react"
import { opponentStats, playerStats } from "shared/characters"

export const useBattleSequence = () => {

  const [turn, setTurn] = useState(0)
  const [inSequence, setInSequence] = useState(false)
  const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth);
  const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth);
  const [announcerMessage, setAnnouncerMessage] = useState('')
  const [playerAnimation, setPlayerAnimation] = useState('static')
  const [opponentAnimation, setOpponentAnimation] = useState('static')

  useEffect(() => {
    const { mode, turn } = sequence;

    if (mode) {

      const attacker = turn === 0 ? playerStats : opponentStats;
      const opponent = turn === 0 ? opponentStats : playerStats;

      switch (mode) {
        case 'attack':
          const damage = attack({ attacker, receiver });

          (async () => {
            setInSequence(true)
            setAnnouncerMessage(`${attacker.name} has chosen to attack!`)

            await wait(1000)

            turn === 0 ? setPlayerAnimation('attack') : setOpponentAnimation('attack')

            await wait(100);

            turn === 0 ? setPlayerAnimation('static') : setOpponentAnimation('static')

            await wait(500);

          })();

          break;

        default:
          break;
      }
    }

  }, [sequence])

  return {
    turn,
    inSequence,
    playerHealth,
    opponentHealth,
    announcerMessage,
    playerAnimation,
    opponentAnimation
  }

}