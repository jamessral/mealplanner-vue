import Vue from 'vue'
import Router from 'vue-router'
import Ingredients from '@/components/Ingredients/Ingredients'
import Recipes from '@/components/Recipes/Recipes'
import MealPlans from '@/components/MealPlans/MealPlans'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ingredients',
      name: 'ingredients',
      component: Ingredients,
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
    },
  ],
})
