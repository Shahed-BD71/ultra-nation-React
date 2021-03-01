import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const handleAddedCountry = props.handleAddedCountry;
    return (
        <div className="country">
            <h3>Name: {name}</h3>
            <img className="flag" src={flag}></img>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddedCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;