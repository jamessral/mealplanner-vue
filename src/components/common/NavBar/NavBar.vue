<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">MealPlanner</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          to="/ingredients"
        >
          Ingredients
        </router-link>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <router-link
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          to="/recipes"
        >
          Recipes
        </router-link>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <router-link
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          to="/mealplans"
        >
          MealPlans
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped lang="scss">
</style>
