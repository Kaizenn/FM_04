import { useState } from 'react'
import ToggleVisibility from '../utils/ToggleVisibility'

export default function RecipeNutritionDetail({ nutrition }) {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <div className="mb-6 flex">
        <h2 className="text-preset2 font-young text-tertiary-800">Nutrition</h2>
        <ToggleVisibility visible={visible} onToggle={() => setVisible(!visible)} />
      </div>
      {visible && (
        <div>
          <p className="text-preset4 text-secondary-600 mb-6">
            The table below shows nutritional values per serving without the additional fillings.
          </p>
          <div className="flex flex-col">
            {nutrition.map((item) => (
              <div key={item.title}>
                <div className="flex">
                  <div className="text-preset4 text-secondary-600 flex w-1/2 pl-8">
                    {item.title}
                  </div>
                  <div className="text-preset4 text-tertiary-800 flex w-1/2 font-semibold">
                    {item.amount}
                  </div>
                </div>
                <div className="bg-secondary-150 flex-basis my-4 flex h-px"></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
