import React from 'react';
import './card-list.styles.css';
import { Card } from './card/card.component';

export const CardList = props => (
    //console.log(props);
    //Anything that's inside the <CardList></CardList> component is a 'children' 
    //and can be accessed through props.children
    //return (<div className='card-list'>{props.children}</div>);
    
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
    ))}
    </div>
);

/*
The following code using the curley braces for the props => {} arrow function
The arrow function with burley braces create a code block that requires 'manual' 
return to be specificed... */

// export const CardList = props => {
//     //console.log(props);
//     //Anything that's inside the <CardList></CardList> component is a 'children' 
//     //and can be accessed through props.children
//     //return (<div className='card-list'>{props.children}</div>);
//     return (
//     <div className='card-list'>
//     {props.monsters.map(monster => (
//             <h1 key={monster.id}>{monster.name}</h1>
//     ))}
//     </div>
//     );
// };