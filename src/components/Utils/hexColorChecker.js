
export function hexColorChecker(color) {
    const firstChar = color[0];
    if(firstChar !== '#'){
        const formattedHexColor = `#${color}`;
        return formattedHexColor;
    }
    return color
}