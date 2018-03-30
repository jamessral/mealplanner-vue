<template id="ingredients-root">
  <div class="container">
    <h3>Ingredients</h3>
    <input
      class="input"
      type="text"
      @keyup.enter="submit"
    >
    <h3
      v-if="!hasIngredients"
      class="no-ingredients"
    >
      No Ingredients
    </h3>
    <ul>
      <li
        v-for="(ingredient, index) in ingredients"
        :key="index"
        class="ingredient"
      >
        {{ ingredient }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IngredientsRoot',
  data() {
    return {
      ingredients: [],
    };
  },
  computed: {
    hasIngredients() {
      return this.ingredients.length > 0;
    },
  },
  methods: {
    submit(event) {
      event.preventDefault();
      this.ingredients.push(event.target.value);
    },
  },
};
</script>

<style scoped>
  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .ingredient {
    --orange-dark: #fc861e;
    --orange-light: #f4a158;
    align-items: center;
    display: flex;
    background-color: var(--orange-light);
    border-left: 2px solid var(--orange-dark);
    width: 18em;
    margin: 0;
    padding: 1em;
    text-align: center;
  }

  .input {
    --dark-color: #222222;
    --light-color: #dddddd;
    background-color: var(--dark-color);
    color: var(--light-color);
    font-size: 1em;
    height: 4em;
    width: 20em;
  }

  .no-ingredients {
    align-items: center;
    display: flex;
    font-size: 1.4em;
    height: 100%;
    justify-content: center;
    padding: 0;
    width: 100%;
  }
</style>
