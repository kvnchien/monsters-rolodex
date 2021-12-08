import React from "react";

import './search-box.styles.css';

//Functional components do not have access to lifecycle methods and component constructor
//Functional components are basically used to retrieve/store some props and
//return HTML
export const SearchBox = ({placeholder, handleChange}) => (  //The function argument is destructured from the single 'props' object 
    <input className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}       
    />
);