import React from 'react';
import ColorPicker from '../UI/ColorPicker/ColorPicker';
import CustomInput from '../UI/Input/CustomInput';
import { hexColorChecker } from '../Utils/hexColorChecker';
import { hexToRgb } from '../Utils/hexToRgb';
import { createRGBAString } from '../Utils/createRGBAString';


export default function BlendColorEditor({ setBlendColor, blendColor, setRgba, rgba }) {
    function handleColorChange(color) {
        setBlendColor(color.hex);
        setRgba(createRGBAString(color.rgb));
    }
    function handleOnBlurChange() {
        const formattedHex = hexColorChecker(blendColor);
        const formattedRgb = hexToRgb(formattedHex);
        setRgba(formattedRgb);
    }
    function handleOnEnterKeyChange() {
        const formattedHex = hexColorChecker(blendColor);
        const formattedRgb = hexToRgb(formattedHex);
        setRgba(formattedRgb);
    }
  return (
    <div>
        BlendColorEditor
        <div>
            <ColorPicker changeFunc={handleColorChange} color={rgba}/>
        </div>
        <div>
            <CustomInput updaterFunction={setBlendColor} itemValue={blendColor} type="colorPicker" onBlurFunc={handleOnBlurChange} onEnterfunc={handleOnEnterKeyChange}/>
        </div>
    </div>
  )
}
