import { useEffect, useState } from 'react';
import Select from '../memoryselect(mp3cut.net).mp3';
const Memory = ({
  card,
  // flip,
  // setFlip,
  setCurrcards,
  currcards,
  timeout,
  check,
  cardWin,
}) => {
  // const [save, setSave] = useState(null);
  // console.log('this is curr', currcards);
  // console.log('cur 1 name', currcards[0]);
  // console.log('cur 2 name', currcards[1]);
  let SelectSong = new Audio(Select);
  const handleCardClick = (index) => {
    if (currcards.length === 1) {
      setCurrcards((prev) => [...prev, index]);
    } else {
      clearTimeout(timeout.current);
      setCurrcards([index]);
    }
  };
  useEffect(() => {
    let timeout = null;
    // console.log(currcards.length);
    if (currcards.length === 2) {
      timeout = setTimeout(check, 900);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [currcards]);
  // console.log('currcard', currcards);
  const checkIsFlipped = (index) => {
    return currcards.includes(index);
  };
  const handleClick = (index, name) => {
    !checkIsFlipped(index) && handleCardClick(index);
    // console.log(index);
  };
  const flipWinCard = (index) => {
    return cardWin.includes(index);
  };

  // console.log(card);
  return (
    <div className='memory-game'>
      {card.map((icard) => {
        const { id, name, img } = icard;
        return (
          <div
            key={id}
            className={`card-game ${checkIsFlipped(id) ? 'flip' : ''} ${
              flipWinCard(id) ? 'flip' : ''
            }`}
            // className={`card-game ${flip && save == id ? 'flip' : ''}`}
            // onClick={() => handleClick(id)}
            onClick={() => {
              handleClick(id);
              SelectSong.play();
            }}
          >
            {/* <p>{name}</p> */}
            <div className='card font-face'>
              <img src={require('../imgs/front.png')} alt='front' />
            </div>
            <div className='card back-face'>
              <img src={img} alt={name}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Memory;
