import { getImageUrl } from '../utils/getImageUrl.jsx'

export default function RecipeIllustration({ illustration, className = '' }) {
  return <img src={getImageUrl(illustration, '.jpeg')} alt={illustration} className={className} />
}
