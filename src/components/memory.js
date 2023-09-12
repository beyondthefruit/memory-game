const Memory = ({ card }) => {
  console.log(card);
  return (
    <div className='memory-game'>
      {card.map((icard) => {
        const { id, name, img } = icard;
        return (
          <div key={id} className='card-game'>
            {/* <p>{name}</p> */}
            <img src={img} alt={name}></img>
          </div>
        );
      })}
    </div>
  );
};
export default Memory;
