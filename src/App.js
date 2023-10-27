import { useState, useRef } from 'react';
import Song from './memorysong(mp3cut.net).mp3';
import Win from './memorywin(mp3cut.net).mp3';
// import Select from './memoryselect(mp3cut.net).mp3';

import cards from './data';
import './index.css';
import Memory from './components/memory';
import { BiPlayCircle } from 'react-icons/bi';

function App() {
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const shuffleCards = shuffle(cards);
  const [card, setCard] = useState(shuffleCards);
  const [currcards, setCurrcards] = useState([]);
  const [cardWin, setCardWin] = useState([]);

  // const [cardo, setCardo] = useState(cards);
  const [music, setMusic] = useState(false);

  // const [flip, setFlip] = useState(false);
  const timeout = useRef(null);

  console.log(shuffleCards);
  console.log(cards);

  const getScore = () => {
    score += 1;
  };

  let WinSong = new Audio(Win);

  let AudioPlay = new Audio(Song);
  AudioPlay.loop = true;
  const check = () => {
    console.log(card);
    const card1 = cards[currcards[0] - 1];
    const card2 = cards[currcards[1] - 1];
    // console.log('this is card1', card1.name, card1);
    // console.log('this is card2', card2.name, card2);
    if (card1.name === card2.name) {
      let card1id = card1.id;
      let card2id = card2.id;
      setCardWin((prev) => [...prev, card1id, card2id]);
      WinSong.play();
      // console.log('@@@@@@@@@@@@@@@@@@@@', cardWin);
      setCurrcards([]);
      // setScore((score) => score + 1);
      // getScore();
      return;
    } else {
      setCurrcards([]);
      return;
    }
  };
  const reset = () => {
    setCurrcards([]);
    setCardWin([]);
    setCard(shuffle(cards));
  };
  return (
    <div className='App'>
      <div className='banner'>
        <button className='icon' onClick={() => AudioPlay.play()}>
          <BiPlayCircle />
        </button>
        <button className='icon' onClick={() => reset()}>
          Reset
        </button>
      </div>
      <Memory
        card={card}
        currcards={currcards}
        setCurrcards={setCurrcards}
        // flip={flip}
        // setFlip={setFlip}
        timeout={timeout}
        check={check}
        cardWin={cardWin}
        // SelectSong={SelectSong}
      />
    </div>
  );
}

export default App;
