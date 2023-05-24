import React from 'react'
import './card.css'
import icon from './../pic/react-js.png'
function Card(props) {
  return (
    <div className='card-frame'>
        <img src={props.icon} className='blog-card-img'/>
        <a className="blog-card-title">{props.title}</a>
        <p className='blog-card-content'>{props.content}</p>
        <a href={props.link} className='blog-card-seemore'>See more...</a>

        
    </div>

    
  )
}

export default Card