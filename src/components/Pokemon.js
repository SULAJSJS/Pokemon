import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Pokemon.css';

const Pokemon = ({ pokemon }) => {

    return (
        <>
            <div>
                <Link to={`/pokemon/${pokemon.id}`}>
                    <div className='round'>
                    <Card.Img className='pokemon-img' src={pokemon.sprites.front_default} />
                    </div>
                </Link>
                <div className='tapp'>
                    <Link className='tap' to={`/pokemon/${pokemon.name}`}>
                        {pokemon.name}
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Pokemon;

