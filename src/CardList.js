import React from 'react'
import Card from './Card'

const CardList = ({ publish}) => {
    return (
        <div>
            {
                publish.map((user, i) => {
                    return (
                        <Card  key={i}
                        id={publish[i].id}
                        name={publish[i].name}
                        email={publish[i].email} />
                    );
                })
            }
        </div>
    );
}




export default CardList;