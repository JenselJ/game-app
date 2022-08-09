import './styles.modules.css';
import { Bar } from './../Bar/Bar'



export function PlayerSummary({ main = false, name, level, health, maxHealth }) {

  const red = '#821200';
  const blue = '#1953cb';

  return (
    <div
      style={{ backgroundColor: main ? red : blue }}
      className='summary-main'>
      <div className='info'>
        <div className='name'>{name}</div>
        <div className='level'>Lvl: {level}</div>
      </div>

      <div className='health'>
        <Bar label='HP' value={health} maxValue={maxHealth} />
      </div>

    </div>
  )
}