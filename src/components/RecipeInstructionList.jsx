import { useState } from 'react'
import ToggleVisibility from '../utils/ToggleVisibility'

export default function RecipeInstructionList({ instructions }) {
  const [visible, setVisible] = useState(true)

  return (
    <div className="mb-8">
      <div className="mb-6 flex">
        <h2 className="text-preset2 font-young text-tertiary-800">Instructions</h2>
        <ToggleVisibility visible={visible} onToggle={() => setVisible(!visible)} />
      </div>
      {visible && (
        <ul className="text-preset4 text-secondary-600 ml-4.5 list-decimal space-y-2">
          {instructions.map((item) => (
            <li
              key={item.title}
              className="marker:text-primary-800 marker:text-preset4 marker:font-outfit pl-2.5 marker:font-extrabold"
            >
              <strong>{item.title}</strong>: {item.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
