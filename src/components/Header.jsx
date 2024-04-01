// eslint-disable-next-line no-unused-vars
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between m-5 '>
      <div className="logo h-10 w-10">
        <img src="https://blush.design/api/download?shareUri=M9R3iCEOW&w=800&h=800&fm=png" alt="" />
      </div>
      <div className="list  ">
        <ul className='flex justify-evenly gap-5 mt-5 mr-10  h-10 font-semibold uppercase '>
            <li>home</li>
            <li>menu</li>
            <li>cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
