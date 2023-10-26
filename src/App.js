import { useState, useRef } from 'react';
// import Song from './memorysong(mp3cut.net).mp3';
import Win from './memorywin(mp3cut.net).mp3';
// import Select from './memoryselect(mp3cut.net).mp3';

import cards from './data';
import './index.css';
import Memory from './components/memory';

function App() {
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const shuffleCards = shuffle(cards);
  const [card, setCard] = useState(shuffleCards);
  const [currcards, setCurrcards] = useState([]);
  const [cardWin, setCardWin] = useState([]);
  // const [cardo, setCardo] = useState(cards);
  let [score, setScore] = useState(0);
  const [flip, setFlip] = useState(false);
  const timeout = useRef(null);

  console.log(shuffleCards);
  console.log(cards);

  const getScore = () => {
    score += 1;
  };

  // let SelectSong = new Audio(Select);
  let WinSong = new Audio(Win);

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
      setScore((score) => score + 1);
      getScore();
      return;
    } else {
      setCurrcards([]);
      return;
    }
  };
  // let AudioPlay = new Audio(Song);
  // AudioPlay.play();
  return (
    <div className='App'>
      <div className='banner'>
        <div className='score'>Score</div>
        <div className='score'>{score}</div>
        {/* <button onClick={AudioPlay.play()}></button> */}
        <audio src='./memorysong(mp3cut.net).mp3' id='audio' loop autoPlay>
          {/* <source
            src='%PUBLIC_URL%/memorysong(mp3cut.net).mp3'
            type='audio/mpeg'
          ></source> */}
        </audio>
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
        cardWin={cardWin}
        // SelectSong={SelectSong}
      />
    </div>
  );
}

export default App;
