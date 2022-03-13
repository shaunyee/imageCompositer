import {useState} from 'react';
import ImagePreview from '../UI/ImagePreview/ImagePreview';
import ImageUploader from './../ImageUploader/ImageUploader';
import BlendColorEditor from '../BlendColorEditor/BlendColorEditor';
import TextEditor from './../TextEditor/TextEditor';
import { defaultValues } from '../Utils/Constants/defaultValues';
import {URIEncodeBuilder} from '../Utils/URIEncodeBuilder';

export default function Compositor() {
    const [imageUrl, setImageUrl] = useState('')
    const [blendColor, setBlendColor] = useState(defaultValues.blendColor);
    const [imageText, setImageText] = useState('');
    const [rgba, setRgba] = useState(defaultValues.overlayColor);
    const [verticalTextPositon, setVerticalTextPostion] = useState(defaultValues.verticalTextPosition);
    const [horizontalTextPosition, setHorizontalTextPosition] = useState(defaultValues.horizontalTextPosition);
    const [textColor, setTextColor] = useState(defaultValues.textColor);
    const [fontSize, setFontSize] = useState(defaultValues.fontSize);
  return (
    <div>
        <div>
            Compositor
        </div>
        <div>
            <div>
                <ImagePreview 
                    imageUrl={imageUrl} 
                    rgba={rgba} 
                    imageText={imageText} 
                    fontSize={fontSize} 
                    textColor={textColor} 
                    verticalTextPositon={verticalTextPositon} 
                    horizontalTextPosition={horizontalTextPosition}
                />
            </div>
            <div>
                <ImageUploader imageUrl={imageUrl} setImageUrl={setImageUrl} />
            </div>
        </div>
        <div>
            <BlendColorEditor 
                setBlendColor={setBlendColor} 
                blendColor={blendColor} 
                setRgba={setRgba} 
                rgba={rgba}
            />
        </div>
        <div>
            <TextEditor 
                imageText={imageText} 
                setImageText={setImageText} 
                horizontalTextPosition={horizontalTextPosition} 
                setHorizontalTextPosition={setHorizontalTextPosition}
                verticalTextPositon={verticalTextPositon}
                setVerticalTextPostion={setVerticalTextPostion}
                textColor={textColor}
                setTextColor={setTextColor}
                fontSize={fontSize}
                setFontSize={setFontSize}
            />
        </div>
    </div>
  )
}
