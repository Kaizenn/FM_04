import RecipeIllustration from './RecipeIllustration'
import RecipeTitle from './RecipeTitle'
import RecipeDescription from './RecipeDescription'
import RecipePreparationTime from './RecipePreparationTime'
import RecipeIngredientList from './RecipeIngredientList'
import RecipeInstructionList from './RecipeInstructionList'
import RecipeNutritionDetail from './RecipeNutritionDetail'

import { recipes } from '../data/recipes'

export default function RecipeView() {
  const recipe = recipes[0]

  return (
    <div className="md:bg-secondary-100 md:p-32">
      <RecipeIllustration illustration={recipe.illustration} className="block md:hidden" />
      <div className="font-outfit mx-auto max-w-375 rounded-3xl bg-white px-6 py-10 md:max-w-616 md:px-10 lg:max-w-736">
        <RecipeIllustration
          illustration={recipe.illustration}
          className="mb-10 hidden rounded-xl md:block"
        />
        <RecipeTitle title={recipe.title} />
        <RecipeDescription description={recipe.description} />
        <RecipePreparationTime preparationTime={recipe.preparationTime} />
        <RecipeIngredientList ingredient={recipe.ingredients} />
        <div className="bg-secondary-150 mb-8 h-px"></div>
        <RecipeInstructionList instructions={recipe.instructions} />
        <div className="bg-secondary-150 mb-8 h-px"></div>
        <RecipeNutritionDetail nutrition={recipe.nutrition} />
      </div>
    </div>
  )
}
