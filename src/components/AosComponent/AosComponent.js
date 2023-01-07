import React from 'react'

const AosComponent = ({ mode, ...props }) => {
  const effect = !mode ? 'fade-up' : (mode === 'left' ? 'fade-left' : 'fade-right')
  return (
    <div
      data-aos={effect}
      data-aos-easing='ease-out-cubic'
      style={{ width: '100%', height: '100%' }}
      data-aos-anchor-placement='center-bottom'
      {...props}
    >
      {props.children}
    </div>
  )
}

export default AosComponent
