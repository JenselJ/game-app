import './styles.modules.css';

export function Bar({ label, value, maxValue }) {

  return (
    <div className='main'>
      <div className='label'>
        {label}
      </div>

      <div className='max'>
        <div className='value' style={{ width: `${(value / maxValue) * 100}%` }}>

        </div>
      </div>
    </div>
  )
}