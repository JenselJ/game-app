import './battleMenu.css'

export function BattleMenu({ onAttack, onMagic, onHeal }) {
  return (
    <div className='battle-menu-main'>
      <div onClick={onAttack} className='option'>
        Attack
      </div>
      <div onClick={onMagic} className='option'>
        Magic
      </div>
      <div onClick={onHeal} className='option'>
        Heal
      </div>
    </div>
  )
}