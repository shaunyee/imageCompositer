import React from 'react';
import { hexColorChecker } from '../../Utils/hexColorChecker';

export default function CustomInput({ type, blendColor, setBlendColor, setImageText, imageText, imageUrl, setImageUrl }) {
    function handleColorChange(e) {
        const formattedColor = hexColorChecker(e.target.value)
        setBlendColor(formattedColor)
    }
    function handleImageTextChange(e) {
        const { value } = e.target;
        setImageText(value)
    }
    function handleImageUrlChange(e) {
        const { value } = e.target;
        setImageUrl(value)
    }
    if (type === 'colorPicker') {
        return (
            <div>
                Color
                <input value={blendColor} onChange={(e) => handleColorChange(e)} />
            </div>
        )
    }
    if (type === 'image') {
        return (
            <div>
                Image
                <input value={imageUrl} onChange={(e) => handleImageUrlChange(e)} />
            </div>
        )
}
return (
    <div>
        Text
        <input value={imageText} onChange={(e) => handleImageTextChange(e) } />
    </div>
)
}