import Vue from 'vue'
import Router from 'vue-router'
import IngredientsRoot from '@/components/Ingredients/IngredientsRoot'
import Recipes from '@/components/Recipes/Recipes'
import MealPlans from '@/components/MealPlans/MealPlans'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/ingredients',
    name: 'ingredients',
    component: IngredientsRoot,
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: Recipes,
  },
  {
    path: '/mealplans',
    name: 'mealplans',
    component: MealPlans,
  }],
})
