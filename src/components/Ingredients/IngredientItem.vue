<template>
  <li
    :key="id"
    class="ingredient bg-white shadow-md rounded px-8 py-6"
  >
    <span><strong>Name:</strong> {{ name }}</span><br>
    <span><strong>Description:</strong> {{ description }}</span><br>
    <span><strong>Price:</strong> ${{ price }}</span><br>
  </li>
</template>

<script>
export default {
  name: 'IngredientItem',
  props: {
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    id: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped lang="scss">
.ingredient {
  list-style-type: none;
}
</style>
