import { ChromePicker } from 'react-color';

export default function ColorPicker({ color, changeFunc }) {
  return (
    <div>
        Color Picker
        <ChromePicker  
            color={color}
            onChange={changeFunc}
        />
    </div>
  )
}
