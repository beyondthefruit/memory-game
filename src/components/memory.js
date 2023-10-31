import { useEffect } from 'react';
import Select from '../memoryselect(mp3cut.net).mp3';
const Memory = ({ card, setCurrcards, currcards, timeout, check, cardWin }) => {
  // audio card select
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

  const checkIsFlipped = (index) => {
    return currcards.includes(index);
  };
  const handleClick = (index, name) => {
    !checkIsFlipped(index) && handleCardClick(index);
    // console.log(index);
  };
  //fct to flip cards that have been cleared
  const flipWinCard = (index) => {
    return cardWin.includes(index);
  };

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
            onClick={() => {
              handleClick(id);
              SelectSong.play();
            }}
          >
            <div className='inner'>
              <div
                className={`card front-face ${
                  checkIsFlipped(id) ? 'shadow-front' : 'shadow-back'
                }
            `}
              >
                {/* <div className='card front-face'> */}
                <img src={require('../imgs/front.png')} alt='front' />
              </div>
              <div className='card back-face'>
                <img src={img} alt={name}></img>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Memory;
