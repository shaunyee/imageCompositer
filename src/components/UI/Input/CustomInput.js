import styled from 'styled-components';
import { theme } from './../../../Theme/theme';

export default function CustomInput({ label, itemValue, updaterFunction, onBlurFunc, onEnterfunc, inputWidth, isolated, isoInputValue, setIsoInputValue }) {
    function handleChange(e) {
        const { value } = e.target;
        !isolated ? updaterFunction(value): setIsoInputValue(value);
    }
    function handleEnterKeyCheck(e) {
        if(e.key === 'Enter') {
            onEnterfunc(e);
        }
    }
return (
    <div>
        <label>{label}</label>
        <Input 
            value={!isolated ? itemValue : isoInputValue} 
            onChange={(e) => handleChange(e)} 
            onBlur={onBlurFunc} 
            onKeyPress={(e) => handleEnterKeyCheck(e)}
            width={inputWidth}
            color={theme.white}
        />
    </div>
)
}

const Input = styled.input`
    display: block;
    width: ${props => props.width || '100%'};
    padding: 8px 16px;
    line-height: 25px;
    font-size: 18px;
    font-family: ${theme.font};
    border-radius: 6px;
    -webkit-appearance: none;
    color: var(--input-color);
    border: 2px solid ${props => props.color};
    background: ${theme.peach};
    transition: border .3s ease;
    &:focus {
        outline: none;
        border-color: ${theme.orange};
    }
`