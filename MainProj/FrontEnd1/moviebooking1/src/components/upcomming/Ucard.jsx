import React from 'react'

export const Ucard = ({item: {id, cover, name, time}}) => {
  return (
    <div>
      <div className="MovieBox">
        <div className="img">
          <img src={cover} alt="" />
        </div>
        <div className="text">
          <h3>{name}</h3>
          <span>{time}</span><br/>
          <button className='button primary-btn' >
            <i className='fa fa-play'></i> PLAY NOW
          </button>
        </div>
      </div>
    </div>
  )
}
