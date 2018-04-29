<template>
  <form class="bg-white shadow-md rouded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label
        class="block text-grey-darker text-sm font-bold mb-2"
        for="name"
      >
        Name
      </label>
      <input
        v-model="name"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        placeholder="Ingredient Name..."
        name="name"
        type="text"
      >
    </div>
    <div class="mb-4">
      <label
        class="block text-grey-darker text-sm font-bold mb-2"
        for="name"
      >
        Description
      </label>
      <input
        v-model="description"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        placeholder="Describe the ingredient..."
        name="description"
        type="textarea"
      >
    </div>
    <div class="mb-4">
      <label
        class="block text-grey-darker text-sm font-bold mb-2"
        for="name"
      >
        Price
      </label>
      <input
        v-model="price"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        name="price"
        type="number"
      >
    </div>
    <div class="flex flex-1 mx-auto justify-around">
      <button
        :disabled="isClearDisabled"
        class="bg-grey-light hover:bg-grey rounded text-bold text-grey-darkest py-2 px-4"
        @click.prevent="clearForm"
      >
        Clear
      </button>
      <button
        class="bg-teal hover:bg-teal-dark rounded text-bold text-white py-2 px-4"
        @click.prevent="submitForm"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
const initialState = {
  name: '',
  description: '',
  price: 0,
}

export default {
  name: 'IngredientsForm',
  props: {
    onSubmit: {
      default: () => {},
      type: Function,
    },
  },
  data() {
    return {
      name: '',
      description: '',
      price: 0,
    }
  },
  computed: {
    isClearDisabled() {
      return (
        this.name === initialState.name &&
        this.description === initialState.description &&
        this.price === initialState.price
      )
    },
  },
  methods: {
    clearForm() {
      this.name = initialState.name
      this.description = initialState.description
      this.price = initialState.price
    },
    submitForm() {
      // Submit post to api
      this.onSubmit({
        name: this.name,
        description: this.description,
        price: this.price,
      })

      this.clearForm()
    },
  },
}
</script>
