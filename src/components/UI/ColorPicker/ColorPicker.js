import { SketchPicker } from 'react-color';

export default function ColorPicker({ color, changeFunc }) {
  return (
    <div>
        Color Picker
        <SketchPicker 
            color={color}
            onChange={changeFunc}
        />
    </div>
  )
}
