import './battleAnnouncer.css';

export function battleAnnouncer() {

  return (
    <div className='battle-announcer-main'>
      <div className='message'>
        {typedMessage}
      </div>
    </div>
  )
}