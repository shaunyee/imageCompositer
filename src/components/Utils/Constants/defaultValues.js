export const defaultValues = {
    overlayColor: {r: 255, g:255, b: 255, a: .5},
    verticalTextPosition: 'center',
    horizontalTextPosition: 'center',
    textColor: '#ffffff',
    blendColor: '#ffffff',
    fontSize: '64px',
    //this size is the same as small, but for legability, wanted to distinguish the default viewer size separate
    defaultPreviewSize: '500px',
    viwerSizes: [
    {
        label: 'SM',
        size:'500px'
    },
    {
        label: 'MD',
        size:'750px'
    },
    {
        label: 'LG',
        size:'1000px'
    },
    ],
    textAlignmentVertical: [
        {
            label: 'Top',
            value: 'start'
        },
        {
            label: 'Center',
            value: 'center'
        },
        {
            label: 'Bottom',
            value: 'end'
        },
    ],
    textAlignmentHorizontal: [
        {
            label: 'Left',
            value: 'start'
        },
        {
            label: 'Center',
            value: 'center'
        },
        {
            label: 'Right',
            value: 'end'
        },
    ],
}