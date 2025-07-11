import { useState } from 'react'
import ToggleVisibility from '../utils/ToggleVisibility'

export default function RecipeIngredientList({ ingredient }) {
  const [visible, setVisible] = useState(true)

  return (
    <div className="mb-8">
      <div className="mb-6 flex">
        <h2 className="text-preset2 font-young text-tertiary-800">Ingredients</h2>
        <ToggleVisibility visible={visible} onToggle={() => setVisible(!visible)} />
      </div>
      {visible && (
        <ul className="text-preset4 text-secondary-600 ml-3 list-disc space-y-2">
          {ingredient.map((item) => (
            <li key={item} className="marker:text-primary-800 pl-4 marker:text-[.625rem]">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
