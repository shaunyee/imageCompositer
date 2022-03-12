import styled from "styled-components"

export default function ImagePreview({ imageUrl, imageText, rgba }) {
    return (
        <Previwer size="500px">
            {imageUrl ?
            <div>
                <Image src={imageUrl} size="500px" /> 
                <BlendColor color={rgba}/>
                <ImageText>{imageText}</ImageText>
            </div>
            : 'Preview'}
        </Previwer>
    )
}
const Previwer = styled.div`
    position: relative;
    display: inline-block;
    width: ${props => props.size || '500'};
    :hover {
        box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
      }
`;

const Image = styled.img`
    width: ${props => props.size || '500'};
    display: block;
`;


const ImageText = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
    text-align: center;
    color: white;
`

const BlendColor = styled.div.attrs(props => ({
    style: {
        background: props.color,
    },
  }))`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate( -50%, -50% );
  opacity: 1;
  width: 100%;
  height: 100%;
`;