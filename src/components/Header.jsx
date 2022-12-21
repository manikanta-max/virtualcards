import React from 'react'
import { IoVideocamOutline } from 'react-icons/io5'
import { RxPlus } from 'react-icons/rx'

const Header = () => {
  return (
    <div className='flex-between'>
      <div className='top-left'>
        <h1 className='heading'>Virtual cards</h1>
        <div className='learn-more flex-center'>
          <IoVideocamOutline />
          <span className='ms-1'>Learn more</span>
        </div>
      </div>
      <div className='flex-center virtual-card p-2 me-3' style={{ background: "#FFFFFF", borderRadius: '6px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
        <RxPlus />
        <span className='ms-1'>Virtual card</span>
      </div>
    </div>
  )
}

export default Header