import React from 'react'

export default function CustomSelect({ options, selectName, label, defaultValue, changeFunc, placeholder, placeholderText }) {
  function handleChange(e) {
    const {value} = e.target;
    changeFunc(value);
  }
  if(!options) {
    return(
      <div>
        Please add options object
      </div>
    )
  }
  return (
    <div>
      <label htmlFor={selectName}>{label}:</label>
      <select name={selectName} id={selectName} defaultValue={defaultValue} onChange={handleChange}>
        {placeholder ? 
        <option value="" disabled>
          {placeholderText}
        </option> : 
        null
        }
        {
          options.map(option => <option value={option.value} key={option.label}>{option.label}</option>)
        }
      </select>
    </div>
  )
}
