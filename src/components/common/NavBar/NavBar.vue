<template>
  <nav class="container">
    <span>MealPlanner</span>
    <router-link to="/ingredients">Ingredients</router-link>
    <router-link to="/recipes">Recipes</router-link>
    <router-link to="/mealplans">MealPlans</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
  .container {
    --horizontal-padding: 1em;
    --vertical-padding: 1.2em;
    align-items: center;
    background-color: #22AA88;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 1.2em;
    height: 100%;
    margin: 0;
    max-height: 2.5em;
    padding-left: var(--horizontal-padding);
    padding-right: var(--horizontal-padding);
    padding-top: var(--horizontal-padding);
    padding-bottom: var(--horizontal-padding);
    width: 100vw;
  }
</style>
