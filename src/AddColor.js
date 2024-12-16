import React from 'react'

const AddColor = ({ newColor, setColor }) => {

    // could've called this during onChange instead of anonymous function
    const handleChange = (e) => {
        setColor(e.target.value);
    }

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