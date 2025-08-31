import React from 'react'

const Buttons = ({ text, className, id }) => {
  return (
    <a className={`${className ?? ''} cta-wrapper`}>
      <div className="cta-group group">
        <div className="bg-circle" />
        <p className="text">{text}</p> {/* props use kiya */}
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  )
}

export default Buttons
