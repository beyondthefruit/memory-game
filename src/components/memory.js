import { useState } from 'react';
const Memory = ({
  card,
  cards,
  flip,
  setFlip,
  setCurrcards,
  currcards,
  timeout,
}) => {
  // const [save, setSave] = useState(null);
  const handleCardClick = (index) => {
    if (currcards.length === 1) {
      setCurrcards((prev) => [...prev, index]);
    } else {
      clearTimeout(timeout.current);
      setCurrcards([index]);
    }
  };
  console.log('currcard', currcards);
  const checkIsFlipped = (index) => {
    return currcards.includes(index);
  };
  const handleClick = (index) => {
    !checkIsFlipped(index) && handleCardClick(index);
    console.log(index);
    // setFlip(!flip);
    // const updatedid = index;
    // setSave(updatedid);
  };

  console.log(card);
  return (
    <div className='memory-game'>
      {card.map((icard) => {
        const { id, name, img } = icard;
        return (
          <div
            key={id}
            className={`card-game ${checkIsFlipped(id) ? 'flip' : ''}`}
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
