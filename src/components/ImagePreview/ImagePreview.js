import styled from "styled-components";
import { theme } from "../../Theme/theme";

export default function ImagePreview({ imageUrl, imageText, rgba, fontSize, textColor, verticalTextPositon, horizontalTextPosition, imageRef, viewerSize }) {
    return (
        <FullContainer>
            {imageUrl ?
                <Container viewerSize={viewerSize}>
                    <Previwer viewerSize={viewerSize} ref={imageRef}>
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
                </Container>
                :
                <Container viewerSize={viewerSize}>
                    <Previwer viewerSize={viewerSize}>
                        Please Add an Image to Preview
                    </Previwer>
                </Container>
            }
        </FullContainer>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${props => props.viewerSize };
    align-items: center;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    background-color: ${theme.white}
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

const FullContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-itemsL center;
`