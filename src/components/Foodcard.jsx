// eslint-disable-next-line no-unused-vars
import React from 'react'

const Foodcard = (props) => {
  return (
    <div className='font-mono p-2 m-5 h-[300px] w-[200px] hover:border  hover:cursor-pointer hover:bg-slate-200 hover:border-solid hover:border-black bg-orange-200 rounded-xl'>
      <img className=' object-cover h-2/3  rounded-2xl '  src={props.img} alt="" />
      <h3>{props.resName}</h3>
      <h3>{props.cousine}</h3>
      <h3>{props.rating}</h3>
      <h3>42min</h3>
    </div>
  )
}

export default Foodcard
