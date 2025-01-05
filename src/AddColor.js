import React from 'react'

const AddColor = ({ newColor, setColor }) => {


  return (
    <form className='addColor' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='add'>Change Color </label>
        <input 
            autoFocus
            id='add'
            type='text'
            placeholder='type a color'
            value={newColor}
            onChange={(e) => setColor(e.target.value)}
        />
    </form>
  )
}

export default AddColor