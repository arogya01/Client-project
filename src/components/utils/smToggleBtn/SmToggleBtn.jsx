import React from 'react'

export const SmToggleBtn = ({
    isToggleValue,
    setToggleValue
}) => {
    return (
        <div className="toggle-wrapper">
      <input
        className="checkbox"
        type="checkbox"
        name="switch"
        id="switch"
        checked={isToggleValue}
        onChange={() => setToggleValue(!isToggleValue)}
      />
      <label htmlFor="switch" className="toggle-label"></label>
    </div>
    )
}
