<template>
  <nav class="container">
    <span class="title">MealPlanner</span>
    <router-link to="/ingredients">Ingredients</router-link>
    <router-link to="/recipes">Recipes</router-link>
    <router-link to="/mealplans">MealPlans</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.container {
  --horizontal-padding: 1em;
  --vertical-padding: 1.2em;
  background-color: #22aa88;
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
  margin: 0;
  padding-left: var(--horizontal-padding);
  padding-right: var(--horizontal-padding);
  padding-top: var(--horizontal-padding);
  padding-bottom: var(--horizontal-padding);
  width: 100vw;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
