import React from 'react'
import "./books.css"

const books = (props) => {
  return (
    <div className='book'>
        <img className='book__img' src={props.img} alt="Atomic Habits" />
        <div className='book__info'>
            <h2>{props.title}</h2>
            <p>{props.author}</p>
        </div>
    </div>
  )
}

export default books