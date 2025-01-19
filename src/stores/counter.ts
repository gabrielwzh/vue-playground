import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter2', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  function addToSum(value: number) {
    count.value += value
  }

  return { count, doubleCount, increment, addToSum }
})
