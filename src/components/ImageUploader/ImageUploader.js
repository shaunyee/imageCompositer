import React from 'react';
import CustomInput from '../UI/Input/CustomInput';
import CustomSelect from '../UI/CustomSelect/CustomSelect';
import { stockImages } from './stockImages';

export default function ImageUploader({ imageUrl, setImageUrl}) {
    return (
        <div>
            ImageUploader
            <CustomInput itemValue={imageUrl} updaterFunction={setImageUrl} type="image" />
            <div>
                <CustomSelect 
                    options={stockImages} 
                    selectName="stockimages" 
                    label="Stock Images" 
                    defaultValue="" 
                    changeFunc={setImageUrl} 
                    placeholder 
                    placeholderText="Select a Stock Image to Try" 
                />
            </div>
        </div>
    )
}
