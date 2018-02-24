<template>
  <div class="container">
    MealPlanner
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.container {
  --horizontal-padding: 1em;
  background-color: #22AA88;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  height: 100%;
  max-height: 2.5em;
  padding-left: var(--horizontal-padding);
  padding-right: var(--horizontal-padding);
  position: fixed;
  width: 100vw;
}
</style>
