import React from 'react';
import 'tachyons';


const Card = (props) => {
  const { name, email, id } = props;
  return (
    <div className='bg-lightest-blue dib br4 pa3 ma2 grow tw-2  w-22 shadow-5 tc '>
      <img alt={`roboimage${id}`} src={`https://robohash.org/${id}?200*200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;


