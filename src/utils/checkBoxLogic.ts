import { CheckboxTypes } from '../types'
// prettier-ignore
export const checkBoxFunction = (stateCheckbox: CheckboxTypes[], checkbox: CheckboxTypes): CheckboxTypes[] => {
  // Проверяем есть ли в массиве нужный чекбокс или есть ли в массиве 'all'
  return stateCheckbox.includes(checkbox) || stateCheckbox.includes(CheckboxTypes.All)
    // Если true
    ? stateCheckbox.filter((el) => {
      // Если есть all убираем
      if (el === 'all') {
        return false
      } else {
        // Если есть чекбокс убираем
        return el !== checkbox
      }
    })
    // Если false: в массиве нет ни чекбокса, ни 'all'
    // Делаем еще проверку: все ли чекбоксы кроме 'all' и нужного чекбокса
    : stateCheckbox.length === 3 && !stateCheckbox.includes(CheckboxTypes.All)
      // Если true, то добавляем и нужный чекбокс, и 'all'
      ? [...stateCheckbox, checkbox, CheckboxTypes.All]
      // Если false, добавляем только нужный чекбокс
      : [...stateCheckbox, checkbox]
}
