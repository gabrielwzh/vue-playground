<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue'

const counterStore = useCounterStore()
const numberInput = ref('')

function handleFormSubmit(event: Event) {
  event.preventDefault()
  const value = parseFloat(numberInput.value)
  if (!isNaN(value)) {
    counterStore.addToSum(value)
    numberInput.value = ''
  }
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Count: {{ counterStore.count }}</p>
    <div>
      <button @click="counterStore.increment">Increase by 1</button>
    </div>
    <form @submit="handleFormSubmit">
      <div>
        <label for="number">Enter a number:</label>
        <input id="number" v-model="numberInput" type="number" />
      </div>
      <button type="submit">Add to Sum</button>
    </form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    /* min-height: 100vh; */
    /* display: flex; */
    align-items: center;
  }
}
</style>
