import React from "react";

import './search-box.styles.css';

//Functional components do not have access to lifecycle methods and component constructor
//Functional components are basically used to retrieve/store some props and
//return HTML
export const SearchBox = ({placeholder, handleChange}) => (  //See below using the 'props' object 
    <input className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}       
    />
);

//The above function can be written using only one big 'props' object in the arrow function
/*
export const SearchBox = (props) => (  //The function argument is destructured from the single 'props' object 
    <input className='search'
        type='search'
        placeholder={props.placeholder}
        onChange={props.handleChange}       
    />
);
*/