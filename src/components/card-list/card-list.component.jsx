import './card-list.styles.css';
import Card from '../card/card.component';
const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((mons) => {
      return <Card monster={mons} key={mons.id} />;
    })}
  </div>
);
export default CardList;
