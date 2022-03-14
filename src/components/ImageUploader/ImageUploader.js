import React from 'react';
import styled from 'styled-components';
import CustomInput from '../UI/Input/CustomInput';
import CustomSelect from '../UI/CustomSelect/CustomSelect';
import StepIndicator from '../UI/StepIndicator/StepIndicator';
import { stockImages } from './stockImages';
import { theme } from '../../Theme/theme';

export default function ImageUploader({ imageUrl, setImageUrl }) {
    return (
        <ImageUploaderContainer>
            <div>
                <StepIndicator step="1"/>
            </div>
                <Instructions>Add an image from the web by pasting the url in the input below, or try out one of the stock images</Instructions>
            <ImageUploaderContent>
                <ImageUrlInputContainer>
                    <CustomInput 
                        itemValue={imageUrl} 
                        updaterFunction={setImageUrl} 
                        label="Add an image url" />
                </ImageUrlInputContainer>
                <StockImageSelectContainer>
                    <CustomSelect
                        options={stockImages}
                        selectName="stockimages"
                        label="Stock Images"
                        defaultValue=""
                        changeFunc={setImageUrl}
                        placeholder
                        placeholderText="Select a Stock Image to Try"
                        selectWidth="100%"
                    />
                </StockImageSelectContainer>
            </ImageUploaderContent>
        </ImageUploaderContainer>
    )
}

const ImageUploaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: ${theme.white}
`;

const ImageUploaderContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80%;
`

const ImageUrlInputContainer = styled.div`
    margin: 10px;
`;
const StockImageSelectContainer = styled.div`
    margin: 10px;
`;

const Instructions = styled.p`
    font-size: 20px;
`;