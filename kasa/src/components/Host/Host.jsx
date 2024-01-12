import React from 'react';

function Host(props) {
  return (
    <div className='host-comp'>
        <div className='host-name'>{props.hostName}</div>
        <div className='host-picture'>
            <img src={props.hostPic} alt={props.id} />
        </div>
      
    </div>
  )
}

export default Host;