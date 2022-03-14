import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../Theme/theme';

export default function CustomSelect({ options, selectName, label, defaultValue, changeFunc, placeholder, placeholderText, selectWidth }) {
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
      <SelectBox 
        name={selectName} 
        id={selectName} 
        defaultValue={defaultValue} 
        onChange={handleChange}
        selectWidth={selectWidth}
        >
        {placeholder ? 
        <SelectOptions value="" disabled>
          {placeholderText}
        </SelectOptions> : 
        null
        }
        {
          options.map(option => <SelectOptions value={option.value} key={option.label}>{option.label}</SelectOptions>)
        }
      </SelectBox>
    </div>
  )
}

const SelectBox = styled.select`
  position: relative;
  display: block;
  width: ${props => props.selectWidth || "90%"};
  margin: 0 auto;
  font-family: ${theme.font};
  font-size: 18px;
  color: ${theme.black};
  background-color: #E8A87C;
`;

const SelectOptions = styled.option`
  display: block;
  padding: 15px;
  background-color: #E8A87C;
`