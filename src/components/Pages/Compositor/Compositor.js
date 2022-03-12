import {useState} from 'react';
import ColorPicker from '../../UI/ColorPicker/ColorPicker';
import CustomInput from '../../UI/Input/CustomInput';
import ImagePreview from '../../UI/ImagePreview/ImagePreview';
import { createRGBAString } from '../../Utils/createRGBAString';
import {URIEncodeBuilder} from '../../Utils/URIEncodeBuilder';

export default function Compositor() {
    const [imageUrl, setImageUrl] = useState('')
    const [blendColor, setBlendColor] = useState('#fff');
    const [imageText, setImageText] = useState('Test');
    const [rgba, setRgba] = useState({r: 255, g:255, b: 255, a: .5})
  return (
    <div>
        <div>
            Compositor
        </div>
        <div>
            {blendColor}
            <div>
                {imageText}
            </div>
            <div>
                <ImagePreview imageUrl={imageUrl} rgba={createRGBAString(rgba)} imageText={imageText} />
            </div>
        </div>
        <div>
            <ColorPicker setBlendColor={setBlendColor} blendColor={blendColor} setRgba={setRgba} rgba={rgba}/>
        </div>
        <div>
            <CustomInput setBlendColor={setBlendColor} blendColor={blendColor} type="colorPicker"/>
        </div>
        <div>
            <CustomInput imageText={imageText} setImageText={setImageText} />
        </div>
        <div>
            <CustomInput imageUrl={imageUrl} setImageUrl={setImageUrl} type="image" />
        </div>
    </div>
  )
}
