import { useState, useRef } from 'react';
import { useSpring, a } from '@react-spring/web';
import cards from './data';
import './index.css';
import Memory from './components/memory';

function App() {
  const [card, setCard] = useState(cards);
  const [currcards, setCurrcards] = useState([]);
  const [cardWin, setCardWin] = useState({});
  // console.log(card.currcards[0].name);
  // const [card, setCard] = useState(() => shuffle(cards.concat(cards)));
  const [flip, setFlip] = useState(false);
  const timeout = useRef(null);

  const removeCards = (cards) => {
    cards.classList.add('card-won');
    // const newCards = card.filter((card) => card.id !== id1 && card.id !== id2);
    // setCard(newCards);
  };
  const check = () => {
    const card1 = card[currcards[0]];
    const card2 = card[currcards[1]];
    console.log('this is card1', card1.name, card1);
    console.log('this is card2', card2.name, card2);
    if (card1.name === card2.name) {
      // setCardWin((prev) => ({ ...prev, ...card1, ...card2 }));
      removeCards(card1);
      console.log('@@@@@@@@@@@@@@@@@@@@', cardWin);
      setCurrcards([]);
      console.log('win');
      return;
    } else {
      setCurrcards([]);
      return;
    }
  };

  return (
    <div className='App'>
      <div className='banner'>
        <div className='score'>Score</div>
        <div className='score'>Score</div>
      </div>
      <Memory
        card={card}
        currcards={currcards}
        setCurrcards={setCurrcards}
        cards={cards}
        flip={flip}
        setFlip={setFlip}
        timeout={timeout}
        check={check}
      />
    </div>
  );
}

export default App;
