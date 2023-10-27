import { useState, useRef, useEffect } from 'react';
import Song from './memorysong(mp3cut.net).mp3';
import Win from './memorywin(mp3cut.net).mp3';
import cards from './data';
import './index.css';
import Memory from './components/memory';
import { BiPlayCircle, BiPauseCircle } from 'react-icons/bi';

function App() {
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const shuffleCards = shuffle(cards);
  const [card, setCard] = useState(shuffleCards);
  const [currcards, setCurrcards] = useState([]);
  const [cardWin, setCardWin] = useState([]);
  // mgt audio, I was using a var Audio = new Audio but every time I was clicking it started a new audio so fixed it by replacing by useState
  const [playing, setPlaying] = useState(false);
  const [audio] = useState(new Audio(Song));

  const timeout = useRef(null);

  // console.log(shuffleCards);
  // console.log(cards);

  // const getScore = () => {
  //   score += 1;
  // };

  // audio logic
  let WinSong = new Audio(Win);
  // to loop the main theme
  audio.loop = true;

  //to manage the play and pause of main audio
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  // check if 2 cards matchs
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

  //to start over
  const reset = () => {
    setCurrcards([]);
    setCardWin([]);
    setCard(shuffle(cards));
  };
  return (
    <div className='App'>
      <div className='gameboard'>
        <div className='banner'>
          <button className='iconic' onClick={() => setPlaying(!playing)}>
            {!playing ? (
              <BiPlayCircle className='icon' />
            ) : (
              <BiPauseCircle className='icon' />
            )}
          </button>

          <button className='iconic' onClick={() => reset()}>
            <p>Reset</p>
          </button>
        </div>
        <Memory
          card={card}
          currcards={currcards}
          setCurrcards={setCurrcards}
          timeout={timeout}
          check={check}
          cardWin={cardWin}
        />
      </div>
    </div>
  );
}

export default App;
