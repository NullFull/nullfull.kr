import React from 'react'
import Lead from '../assets/lead.png'

const LeadImage = () => {
  const handleClick = () => {
    alert('하는 일 없이 모여서 감자튀김을 먹습니다.')
  }

  return (
    <img src={Lead} alt="French fries" onClick={() => handleClick()} />
  )
}

export default LeadImage;