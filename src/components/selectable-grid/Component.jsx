import React from 'react'
import "./Component.css"
import SelectableGrid from './SelectableGrid';
const Component = () => {
    const rows = 10;
    const cols = 15;
  return (
    <div className='main-container'>
      <h1 className='header'>Select Your Grid</h1>
      <SelectableGrid rows={rows} cols={cols} />
    </div>
  )
}

export default Component;
