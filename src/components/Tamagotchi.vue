<template>
  <div class="tamagotchi">
    <h1>Tamagotchi</h1>
    <div class="turtle-states">
      <pre>
  .-.-.
  ( {{ tamagotchiStore.mood }} )
  (       )
  (     )
  `-.-'
      </pre>
    </div>
    <p>Name: {{ name }}</p>
    <p>Hunger: {{ tamagotchiStore.hunger }}</p>
    <p>Happiness: {{ tamagotchiStore.happiness }}</p>
    <button @click="feed">Feed</button>
    <button @click="play">Play</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, reactive } from 'vue'
import { useTamagotchiStore } from '@/stores/tamagotchiStore';

const props = defineProps<{
  name: string;
}>();

// Define reactive variables
const name = ref<string>('Tama');

const tamagotchiStore = useTamagotchiStore();

const feed = () => {
  tamagotchiStore.feed();
};

const play = () => {
  tamagotchiStore.play();
};

const reset = () => {
  tamagotchiStore.reset();
};

// Lifecycle hooks to simulate the passage of time
let interval: number;

onMounted(() => {
  tamagotchiStore.startInterval();
});

onUnmounted(() => {
  clearInterval(interval);
});

// Watch for changes in tamagotchiState
watch(
  () => tamagotchiStore,
  (newVal) => {
    const { hunger, happiness } = newVal;
    console.log(hunger, happiness, tamagotchiStore);
    
    if (hunger <= 5 && happiness > 90) {
      tamagotchiStore.mood = '^_^';
    } else if (hunger > 5 && hunger <= 10 && happiness > 80) {
      tamagotchiStore.mood = 'o_o';
    } else if (hunger > 10 && hunger <= 20 && happiness > 70) {
      tamagotchiStore.mood = '(O_O)';
    } else if (hunger > 20 && happiness > 60) {
      tamagotchiStore.mood = '(>_<)';
    } else if (hunger > 30 && happiness > 50) {
      tamagotchiStore.mood = '(x_x)';
  }
},
{ deep: true }
);
</script>

<style scoped>
.tamagotchi {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.turtle-states {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}

pre {
  font-family: monospace;
}

button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

h1 {
  margin-bottom: 20px;
}

p {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>