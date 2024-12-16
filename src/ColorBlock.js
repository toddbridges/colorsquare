import React from 'react'


const ColorBlock = ({ color }) => {
  return (
    <div       style={{
        width: '200px', 
        height: '200px', 
        backgroundColor: color, 
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 'bold'
      }}>
        {color? `Color is ${color}` : 'No color'}
    </div>
    
  )
}

export default ColorBlock