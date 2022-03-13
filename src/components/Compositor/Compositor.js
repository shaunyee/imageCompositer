import {useState, useCallback, useRef} from 'react';
import { toCanvas } from 'html-to-image';
import ImagePreview from '../UI/ImagePreview/ImagePreview';
import ImageUploader from './../ImageUploader/ImageUploader';
import BlendColorEditor from '../BlendColorEditor/BlendColorEditor';
import TextEditor from './../TextEditor/TextEditor';
import Modal from '../UI/Modal/Modal';
import CustomButton from '../UI/CustomButton/CustomButton';
import { defaultValues } from '../Utils/Constants/defaultValues';
import { createImageQueryString } from '../Utils/createImageQueryString';

export default function Compositor() {
    const [imageUrl, setImageUrl] = useState('')
    const [blendColor, setBlendColor] = useState(defaultValues.blendColor);
    const [imageText, setImageText] = useState('');
    const [rgba, setRgba] = useState(defaultValues.overlayColor);
    const [verticalTextPositon, setVerticalTextPostion] = useState(defaultValues.verticalTextPosition);
    const [horizontalTextPosition, setHorizontalTextPosition] = useState(defaultValues.horizontalTextPosition);
    const [textColor, setTextColor] = useState(defaultValues.textColor);
    const [fontSize, setFontSize] = useState(defaultValues.fontSize);
    const [modalOpen, setModalOpen] = useState(false)
    const [loading, setloading] = useState(false)
    const [imageDownloadLink, setImageDownloadLink] = useState('')
    const imageRef = useRef(null);
    const canvasRef = useRef(null);
    const onButtonClick = useCallback(() => {
        if (imageRef.current === null) {
          return
        }
        setloading(true)
        setModalOpen(true)
        toCanvas(imageRef.current, { cacheBust: true, })
          .then((canvas) => {
              const url = canvas.toDataURL();
              canvasRef.current.appendChild(canvas)
              setImageDownloadLink(url)
              setloading(false)
          })
          .catch((err) => {
            console.log(err)
          })
      }, [imageRef]);
  return (
    <div>
        { modalOpen && <Modal 
            canvasRef={canvasRef} 
            setModalOpen={setModalOpen} 
            loading={loading} 
            imageDownloadLink={imageDownloadLink} 
            downloadName={createImageQueryString("TestImage.JPEG", imageText, blendColor)}
        /> }
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
                    imageRef={imageRef}
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
        <CustomButton btnTxt="Render Image" onClickFunc={onButtonClick}/>
    </div>
  )
}
