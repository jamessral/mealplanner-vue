<template id="ingredients-root">
  <div class="container mx-auto">
    <h3 class="mx-auto pt-6 pb-6">Ingredients</h3>
    <ingredients-form
      :ingredients="ingredients"
      :on-submit="handleFormSubmit"
    />
    <h3
      v-if="!hasIngredients"
      class="mx-auto pt-6 pb-6"
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
import IngredientsForm from './IngredientsForm'

export default {
  name: 'IngredientsRoot',
  components: {
    IngredientsForm,
  },
  data() {
    return {
      ingredients: [],
    }
  },
  computed: {
    hasIngredients() {
      return this.ingredients.length > 0
    },
  },
  methods: {
    handleFormSubmit(ingredient) {
      this.ingredients.push(ingredient)
    },
  },
}
</script>

<style scoped lang="scss">

</style>
