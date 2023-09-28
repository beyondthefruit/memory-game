import { useState, useRef } from 'react';
import { useSpring, a } from '@react-spring/web';
import cards from './data';
import './index.css';
import Memory from './components/memory';

function App() {
  const [card, setCard] = useState(cards);
  const [currcards, setCurrcards] = useState([]);
  const [cardok, setCardok] = useState({});

  // const [card, setCard] = useState(() => shuffle(cards.concat(cards)));
  const [flip, setFlip] = useState(false);
  const timeout = useRef(null);

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
      />
    </div>
  );
}

export default App;
