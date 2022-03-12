import { SketchPicker } from 'react-color';

export default function ColorPicker({ blendColor, setBlendColor, setRgba, rgba }) {
    function handleColorPickerChange(color) {
        setBlendColor(color.hex);
        setRgba(color.rgb)
    }
  return (
    <div>
        Color Picker
        <SketchPicker 
            color={rgba}
            onChange={handleColorPickerChange}
        />
    </div>
  )
}
