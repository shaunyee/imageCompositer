import { useState } from 'react';
import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";
import { defaultValues } from "../../Utils/Constants/defaultValues";

export default function ImagePreview({ imageUrl, imageText, rgba, fontSize, textColor, verticalTextPositon, horizontalTextPosition }) {
    const [viewerSize, setViewerSize] = useState(defaultValues.defaultPreviewSize);
    function handlePreviewSizeChange(e) {
        const {value} = e.target;
        setViewerSize(value)
    }
    return (
        <div>
            {imageUrl ?
                <Container>
                    <Previwer viewerSize={viewerSize}>
                        <ImageText 
                            fontSize={fontSize} 
                            textColor={textColor} 
                            verticalTextPositon={verticalTextPositon} 
                            horizontalTextPosition={horizontalTextPosition}
                            >
                                {imageText}
                        </ImageText>
                        <BlendColor color={rgba} />
                        <Image src={imageUrl} />
                    </Previwer>
                    <div>
                        <ViewSizeButtons>
                            {
                                defaultValues.viwerSizes.map(viewer => {
                                    return <CustomButton onClickFunc={handlePreviewSizeChange} btnTxt={viewer.label} value={viewer.size} disabled={viewer.size === viewerSize} key={viewer.label}/>
                                })
                            }
                        </ViewSizeButtons>
                    </div>
                </Container>
                :
                <Previwer size="500px">
                    <p>
                        Please Add an Image to Preview
                    </p>
                </Previwer>
            }
        </div>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Previwer = styled.div.attrs(props => ({
    style: {
        width: props.viewerSize,
    },
}))`
    display: flex;
    flex-direction: row;
    position: relative;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    :hover {
        box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
      }
`;

const Image = styled.img`
    object-fit: contain;
    width: inherit;
`;


const ImageText = styled.div`
    justify-content: ${props => props.horizontalTextPosition};
    align-items: ${props => props.verticalTextPositon};
    display: flex;
    color: ${props => props.textColor};
    font-size: ${props => props.fontSize};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 7;
`

const BlendColor = styled.div.attrs(props => ({
    style: {
        background: props.color,
    },
}))`
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const ViewSizeButtons = styled.ul`
display: flex;
justify-content: space-around;
`


