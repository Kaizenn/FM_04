import { useState } from 'react'
import ToggleVisibility from '../utils/ToggleVisibility'

export default function RecipePreparationTime({ preparationTime }) {
  const [visible, setVisible] = useState(true)

  return (
    <div className="bg-primary-50 mb-8 rounded-xl p-6">
      <h2 className="text-preset3 text-primary-800 mb-4 font-semibold">Preparation time</h2>
      {visible && (
        <ul className="text-preset4 text-secondary-600 ml-3 list-disc space-y-2">
          {preparationTime.map((item) => (
            <li key={item.title} className="marker:text-primary-800 pl-4 marker:text-[.625rem]">
              <strong>{item.title}</strong>: {item.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
