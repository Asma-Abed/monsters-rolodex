import { Component } from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';
class CardList extends Component {
  render() {
    console.log(this.props);
    console.log('render from cardlist');
    const { monsters } = this.props;
    return (
      <div className='card-list'>
        {monsters.map((mons) => {
          return <Card monster={mons} key={mons.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
