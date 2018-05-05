<template id="ingredients-root">
  <div class="container mx-auto">
    <h3 v-if="loadError">{{ loadError.toString() }}</h3>
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
      <ingredient-item
        v-for="item in ingredients"
        :key="item.id"
        :name="item.name"
        :description="item.description"
        :price="item.price"
      />
    </ul>
  </div>
</template>

<script>
import axios from '@/axios'
import IngredientsForm from './IngredientsForm'
import IngredientItem from './IngredientItem'

export default {
  name: 'IngredientsRoot',
  components: {
    IngredientsForm,
    IngredientItem,
  },
  data() {
    return {
      loadError: null,
      ingredients: [],
    }
  },
  computed: {
    hasIngredients() {
      return this.ingredients.length > 0
    },
  },
  created() {
    axios
      .get('./ingredients')
      .then(res => this.ingredients = res.data)
      .catch(err => this.loadError = err)
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
