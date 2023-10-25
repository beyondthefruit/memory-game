import { useState, useRef } from 'react';
import cards from './data';
import './index.css';
import Memory from './components/memory';

function App() {
  const [card, setCard] = useState(cards);
  const [currcards, setCurrcards] = useState([]);
  const [cardWin, setCardWin] = useState([]);
  const [cardo, setCardo] = useState(cards);
  //  let [score, setScore] = useState;
  let score = 0;
  // console.log(card.currcards[0].name);
  // const [card, setCard] = useState(() => shuffle(cards.concat(cards)));
  const [flip, setFlip] = useState(false);
  const timeout = useRef(null);

  const removeCards = (id1, id2) => {
    // cards.classList.add('card-won');
    // const newCards = card.filter((card) => card.id !== id1 && card.id !== id2);
    // setCardo(newCards);
  };
  const check = () => {
    console.log(card);
    const card1 = cards[currcards[0] - 1];
    const card2 = cards[currcards[1] - 1];
    console.log('this is card1', card1.name, card1);
    console.log('this is card2', card2.name, card2);
    if (card1.name === card2.name) {
      let card1id = card1.id;
      let card2id = card2.id;
      setCardWin((prev) => [...prev, card1id, card2id]);
      // removeCards(card1id, card2id);
      // card1.classList.add('card-won');
      console.log('@@@@@@@@@@@@@@@@@@@@', cardWin);
      setCurrcards([]);
      console.log('win');
      score += 1;
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
        <div className='score'>{score}</div>
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
        cardo={cardo}
        cardWin={cardWin}
      />
    </div>
  );
}

export default App;
