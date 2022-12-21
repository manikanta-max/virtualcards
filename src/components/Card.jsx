import React from 'react'
import { ImFire, ImFirefox } from 'react-icons/im'
import { Progress } from 'antd'

const Card = React.forwardRef(({ card }, ref) => {

  const cardBody = (
    <>
      <div className='flex-between'>
        <div className='card-head-left'>
          <h5 className='mb-0'>{card.name}</h5>
          <span>{card.custname} &#x2022; {card.budget}</span>
        </div>
        <div className='card-head-right'>
          {card.cardtype === 'subscription' ? <ImFire style={{ color: 'var(--PINK)' }} /> : <ImFirefox style={{ color: 'var(--PINK)' }} />}
        </div>
      </div>
      <div className='flex-between mt-3 mb-2'>
        <span className='tag-left px-2'>{card.cardtype !== 'subscription' ? 'BURNER' : 'SUBSCRIPTION'}</span>
        <span className='tag-right'>{card.cardtype !== 'subscription' ? `Expires: ${card.expiry}` : `August Limit: ${card.limit}`}</span>
      </div>
      <Progress percent={50} showInfo={false} strokeColor='#eb4869' />
      <div className='footer flex-between'>
        <div className='footer-left'>
          <div className='d-flex align-items-center gap-2'>
            <span className='pink-dot'></span>
            <span>Spent</span>
          </div>
          <div className='d-flex align-items-center gap-2 mt-2'>
            <span className='green-dot'></span>
            <span>Avaliable for spend</span>
          </div>
        </div>
        <div className='footer-right'>
          <span className='text-end'>{card.spent?.value} SGC</span>
          <span className='mt-2' style={{ fontWeight: 500 }}>{card.avaliable?.value} SGD</span>
        </div>
      </div>
    </>
  )

  const content = ref ? <div ref={ref} className='card'>{cardBody}</div> : <div className='card'>{cardBody}</div>

  return content
})

export default Card