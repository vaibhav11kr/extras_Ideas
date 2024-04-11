import React from 'react'

const InputUi = ({value, handleSubmit, handleChange, data}) => {
  return (
    <div className='flex flex-col w-2/4'>
      <input type="number" className='p-2 text-black font-mono' value={value} onChange={handleChange}/>
      <button className='mt-4 p-2 bg-white text-black rounded-xl hover:bg-blue-400 hover:text-white' onClick={handleSubmit}>Get My Message</button>

     {data && <div className='border border-zinc-200 h-auto mt-4 w-auto p-4' >{data.title}</div>}
    </div>
  )
}

export default InputUi;
