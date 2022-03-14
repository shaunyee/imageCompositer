import { URIEncodeBuilder } from "./URIEncodeBuilder";
export function createImageQueryString(imageName, imgTxt, blendHexCode) {
    const formattedImageText =  URIEncodeBuilder(imgTxt);
    const formattedBlendColor = URIEncodeBuilder(blendHexCode);
    const imageURI = `${imageName}?txt=${formattedImageText}&blend=${formattedBlendColor}`
    return imageURI;
}