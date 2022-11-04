import './battleMenu.css';
// import { useBattleSequence } from 'hooks/useBattleSequence';

export function BattleMenu({
  onAttack,
  onMagic,
  onHeal,
  inSequence,
  sequence,
}) {
  // const { inSequence } = useBattleSequence(sequence);

  return (
    <div className="battle-menu-main">
      <div
        onClick={() => {
          onAttack();
          // !inSequence ? onAttack() : console.log('wait for your turn!');
        }}
        className="option"
      >
        Attack
      </div>
      <div
        onClick={() => {
          onMagic();
          // !inSequence ? onMagic() : console.log('wait for your turn!');
        }}
        className="option"
      >
        Magic
      </div>
      <div
        onClick={() => {
          onHeal();
          // !inSequence ? onHeal() : console.log('wait for your turn!');
        }}
        className="option"
      >
        Heal
      </div>
    </div>
  );
}
