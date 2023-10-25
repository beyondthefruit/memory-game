import { useEffect, useState } from 'react';
const Memory = ({
  card,
  cards,
  flip,
  setFlip,
  setCurrcards,
  currcards,
  timeout,
  check,
  cardo,
  cardWin,
}) => {
  // const [save, setSave] = useState(null);
  console.log('this is curr', currcards);
  console.log('cur 1 name', currcards[0]);
  console.log('cur 2 name', currcards[1]);

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
    console.log(currcards.length);
    if (currcards.length === 2) {
      timeout = setTimeout(check, 900);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [currcards]);
  console.log('currcard', currcards);
  const checkIsFlipped = (index) => {
    return currcards.includes(index);
  };
  const handleClick = (index, name) => {
    !checkIsFlipped(index) && handleCardClick(index);
    console.log(index);
  };
  const hideCard = (index) => {
    return cardWin.includes(index);
  };

  console.log(card);
  return (
    <div className='memory-game'>
      {card.map((icard) => {
        const { id, name, img } = icard;
        return (
          <div
            key={id}
            className={`card-game ${checkIsFlipped(id) ? 'flip' : ''} ${
              hideCard(id) ? 'card-won' : ''
            }`}
            // className={`card-game ${flip && save == id ? 'flip' : ''}`}
            onClick={() => handleClick(id)}
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
