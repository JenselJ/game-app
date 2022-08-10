import './BattleAnnouncer.css';
import { useTypedMessage } from 'hooks/useTypedMessage';

export function BattleAnnouncer({ message }) {

  const typedMessage = useTypedMessage(message)

  return (
    <div className='battle-announcer-main'>
      <div className='message'>
        {typedMessage}
      </div>
    </div>
  )
}