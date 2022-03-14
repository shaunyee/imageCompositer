export function fontSizeSyntaxChecker(fontSize) {
    if(!fontSize.includes('px')){
        const formattedSize = `${fontSize}px`
        return formattedSize
    }
    return fontSize
}