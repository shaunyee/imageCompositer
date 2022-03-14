import { useState } from 'react';
import CustomInput from '../UI/Input/CustomInput';
import CustomSelect from '../UI/CustomSelect/CustomSelect';
import ColorPicker from '../UI/ColorPicker/ColorPicker';
import { defaultValues } from '../Utils/Constants/defaultValues';
import { fontSizeSyntaxChecker } from '../Utils/fontSizeSyntaxChecker';
import { createRGBAString } from '../Utils/createRGBAString';
import styled from 'styled-components';
import CustomButton from '../UI/CustomButton/CustomButton';
import StepIndicator from '../UI/StepIndicator/StepIndicator';
import { theme } from '../../Theme/theme';

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
    const [showPicker, setShowPicker] = useState(false)
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
    function toggleColorPicker() {
        setShowPicker(!showPicker)
    }
    return (
        <TextEditorContainer>
            {!showPicker && <div>
                <StepIndicator step="3" />
            </div>}
            {!showPicker && <Instructions>Add text to the image and customize the size, location and font color below</Instructions>}
            <TextEditorContent>
                <ImageTextImputContainer>
                    <CustomInput itemValue={imageText} updaterFunction={setImageText} label="Enter Image Text: " />
                </ImageTextImputContainer>
                <TextPositionSelectionContainer>
                    <div>
                        <CustomSelect
                            selectName="horizontalTextPosition"
                            label="Horizontal Text Position "
                            options={defaultValues.textAlignmentHorizontal}
                            currentValue={horizontalTextPosition}
                            defaultValue={defaultValues.horizontalTextPosition}
                            changeFunc={setHorizontalTextPosition}
                            selectWidth="55%"
                        />
                    </div>
                    <div>
                        <CustomSelect
                            selectName="verticalTextPositon"
                            label="Vertical Text Position "
                            options={defaultValues.textAlignmentVertical}
                            currentValue={verticalTextPositon}
                            defaultValue={defaultValues.verticalTextPosition}
                            changeFunc={setVerticalTextPostion}
                            selectWidth="55%"
                        />
                    </div>
                </TextPositionSelectionContainer>
                <FontAndColorSelectionContainer>
                    <div>
                        <CustomInput
                            itemValue={fontSize}
                            updaterFunction={setFontSize}
                            onBlurFunc={handleFontSizeChangeOnBlur}
                            onEnterfunc={handleFontSizeChangeOnEnter}
                            label="Font Size: "
                            inputWidth="40px"
                        />
                    </div>
                    <div>
                        <CustomButton btnTxt={showPicker ? "Close Picker" : "Show Color Picker"} onClickFunc={toggleColorPicker} />
                        {showPicker ? <ColorPicker color={textColor} changeFunc={handleFontColorChange} /> : null}
                    </div>
                </FontAndColorSelectionContainer>
            </TextEditorContent>
        </TextEditorContainer>
    )
}

const TextEditorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background: ${theme.white}
`;

const TextEditorContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80%;
    width: 100%
`;

const TextPositionSelectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin: 10px;
`;
const FontAndColorSelectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin: 10px;
`;

const ImageTextImputContainer = styled.div`
    margin: 10px;
`;

const Instructions = styled.p`
    font-size: 20px;
`;