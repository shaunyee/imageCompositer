import React from 'react';
import CustomInput from '../UI/Input/CustomInput';
import CustomSelect from '../UI/CustomSelect/CustomSelect';
import ColorPicker from '../UI/ColorPicker/ColorPicker';
import { defaultValues } from '../Utils/Constants/defaultValues';
import { fontSizeSyntaxChecker } from '../Utils/fontSizeSyntaxChecker';
import { createRGBAString } from '../Utils/createRGBAString';

export default function TextEditor({
    imageText,
    setImageText,
    horizontalTextPosition,
    setHorizontalTextPosition,
    verticalTextPositon,
    setVerticalTextPostion,
    textColor,
    setTextColor,
    fontSize,
    setFontSize

}) {
    function handleFontSizeChangeOnBlur() {
            const formattedSize = fontSizeSyntaxChecker(fontSize)
            setFontSize(formattedSize)
    }
    function handleFontSizeChangeOnEnter() {
        const formattedSize = fontSizeSyntaxChecker(fontSize)
        setFontSize(formattedSize)
    }
    function handleFontColorChange(color) {
        console.log(color.rgb);
        setTextColor(createRGBAString(color.rgb))
    }
    return (
        <div>
            <div>
                TextEditor
            </div>
            <div>
                <CustomInput itemValue={imageText} updaterFunction={setImageText} label="Enter Image Text: " />
            </div>
            <div>
                <CustomSelect
                    selectName="horizontalTextPosition"
                    label="Horizontal Text Position: "
                    options={defaultValues.textAlignmentHorizontal}
                    currentValue={horizontalTextPosition}
                    defaultValue={defaultValues.horizontalTextPosition}
                    changeFunc={setHorizontalTextPosition}
                />
            </div>
            <div>
                <CustomSelect
                    selectName="verticalTextPositon"
                    label="Vertical Text Position: "
                    options={defaultValues.textAlignmentVertical}
                    currentValue={verticalTextPositon}
                    defaultValue={defaultValues.verticalTextPosition}
                    changeFunc={setVerticalTextPostion}
                />
            </div>
            <div>
                <CustomInput itemValue={fontSize} updaterFunction={setFontSize} onBlurFunc={handleFontSizeChangeOnBlur} onEnterfunc={handleFontSizeChangeOnEnter} label="Font Size: " />
            </div>
            <div>
                <ColorPicker color={textColor} changeFunc={handleFontColorChange}/>
            </div>
        </div>
    )
}
