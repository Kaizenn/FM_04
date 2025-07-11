import { getImageUrl } from '../utils/getImageUrl.jsx'

export default function ToggleVisibility({ visible, onToggle }) {
  const imageName = visible ? 'hide' : 'show'

  return (
    <>
      <img
        onClick={onToggle}
        src={getImageUrl(imageName, '.png')}
        alt={imageName}
        className="mt-1.25 ml-auto max-h-5.5 max-w-5.5 cursor-pointer"
      />
    </>
  )
}
