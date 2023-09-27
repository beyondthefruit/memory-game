import { useState } from 'react';
const Memory = ({ card, cards, flip, setFlip }) => {
  const [save, setSave] = useState(null);
  const handleClick = (id) => {
    setFlip(!flip);
    const updatedid = id;
    setSave(updatedid);
  };
  console.log(card);
  return (
    <div className='memory-game'>
      {card.map((icard) => {
        const { id, name, img } = icard;
        return (
          <div
            key={id}
            className={`card-game ${flip && save == id ? 'flip' : ''}`}
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
