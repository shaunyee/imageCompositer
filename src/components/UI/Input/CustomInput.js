import React from 'react';
import { hexColorChecker } from '../../Utils/hexColorChecker';

export default function CustomInput({ label, itemValue, updaterFunction, onBlurFunc, onEnterfunc }) {
    function handleChange(e) {
        const { value } = e.target;
        updaterFunction(value)
    }
    function handleEnterKeyCheck(e) {
        if(e.key === 'Enter') {
            onEnterfunc()
        }
    }
return (
    <div>
        <label>{label}</label>
        <input value={itemValue} onChange={(e) => handleChange(e)} onBlur={onBlurFunc} onKeyPress={(e) => handleEnterKeyCheck(e)}/>
    </div>
)
}