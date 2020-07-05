import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie(props) {
  return (
    <Link to={"/" + props.id} className='image-cover-row-item'>
      <img src={props.picture} alt={`${props.name}`} />
        <div className='overlay'>
        <h1>{props.name}!</h1>
      </div>
    </Link>
  );
}