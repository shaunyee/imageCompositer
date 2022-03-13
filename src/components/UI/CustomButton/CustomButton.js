import React from 'react'

export default function CustomButton({ btnTxt, disabled = false, type = "button", onClickFunc, value }) {
  return (
    <div>
        <button disabled={disabled} type={type} value={value}  onClick={(e) => onClickFunc(e)} >
          {btnTxt}
        </button>
    </div>
  )
}
