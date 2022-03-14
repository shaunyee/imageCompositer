import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../Theme/theme';

export default function CustomButton({ btnTxt, disabled = false, type = "button", onClickFunc, value, }) {
  return (
    <div>
      <Button disabled={disabled} type={type} value={value} onClick={(e) => onClickFunc(e)} >
        {btnTxt}
      </Button>
    </div>
  )
}

const Button = styled.button`
  background-color: ${theme.peach};
  border: 2px solid ${theme.white};
  border-radius: 15px;
  box-sizing: border-box;
  color: ${theme.black}};
  cursor: pointer;
  display: inline-block;
  font-family: ${theme.font}
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
}
`;
