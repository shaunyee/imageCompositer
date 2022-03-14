import { useState } from 'react';
import ColorPicker from '../UI/ColorPicker/ColorPicker';
import CustomInput from '../UI/Input/CustomInput';
import CustomButton from '../UI/CustomButton/CustomButton';
import StepIndicator from '../UI/StepIndicator/StepIndicator';
import { hexColorChecker } from '../Utils/hexColorChecker';
import { hexToRgb } from '../Utils/hexToRgb';
import { createRGBAString } from '../Utils/createRGBAString';
import styled from 'styled-components';
import { theme } from '../../Theme/theme';


export default function BlendColorEditor({ setBlendColor, blendColor, setRgba, rgba }) {
    const [showPicker, setShowPicker] = useState(false)
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
    function toggleColorPicker() {
        setShowPicker(!showPicker)
    }
    return (
        <BlendColorEditorContainer>
            {!showPicker && <div>
                <StepIndicator step="2" />
            </div>}
            {!showPicker && <Instructions>Add a blend color by adding in a hex-color code, or use the color picker to try out different options</Instructions>}
            <BlendColorEditorContent>
                <HexCodeInputContainer>
                    <CustomInput
                        updaterFunction={setBlendColor}
                        itemValue={blendColor}
                        label="Enter a Hex Code:"
                        onBlurFunc={handleOnBlurChange}
                        onEnterfunc={handleOnEnterKeyChange}
                        inputWidth="100px"
                    />
                </HexCodeInputContainer>
                <ColorPickerContainer>
                    <CustomButton btnTxt={showPicker ? "Close Picker" : "Show Color Picker"} onClickFunc={toggleColorPicker} />
                    {showPicker ? <ColorPicker changeFunc={handleColorChange} color={rgba} /> : null}
                </ColorPickerContainer>
            </BlendColorEditorContent>
        </BlendColorEditorContainer>
    )
}


const BlendColorEditorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: ${theme.white}
`;

const BlendColorEditorContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80%;
    width: 100%
`;

const HexCodeInputContainer = styled.div`
margin: 10px;
`;
const ColorPickerContainer = styled.div`
margin: 10px;
`;
const Instructions = styled.p`
    font-size: 20px;
`;