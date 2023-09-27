import { useState } from 'react';
import { useSpring, a } from '@react-spring/web';
import cards from './data';
import './index.css';
import Memory from './components/memory';

function App() {
  const [card, setCard] = useState(cards);
  // const [card, setCard] = useState(() => shuffle(cards.concat(cards)));
  const [flip, setFlip] = useState(false);

  return (
    <div className='App'>
      <Memory card={card} cards={cards} flip={flip} setFlip={setFlip} />
    </div>
  );
}

export default App;
