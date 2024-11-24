<template>
  <div class="tamagotchi">
    <h1>Tamagotchi</h1>
    <div class="turtle-states">
      <pre>
  .-.-.
  ( {{}} )
  (       )
  (     )
  `-.-'
      </pre>
    </div>
    <p>Name: {{  }}</p>
    <p>Hunger: {{  }}</p>
    <p>Happiness: {{  }}</p>
    <div>
      <button>Feed</button>
      <button>Play</button>
    </div>
    <button>Reset</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, reactive } from 'vue'

interface TamagotchiState {
  hunger: number;
  happiness: number;
  mood: string;
}

const mood = {
  happy: '^_^',
  irritated: 'o_o',
  concerned: '(O_O)',
  angry: '(>_<)',
  exhausted: '(x_x)',
}

// Define reactive variables
const name = ref<string>('Tama');
const tamagotchiState = reactive<TamagotchiState>({});

// Method to feed Tamagotchi
const feed = () => {};

// Method to play with Tamagotchi
const play = () => {};

// Method to reset Tamagotchi
const reset = () => {};

// Lifecycle hooks to simulate the passage of time
let interval: number;

onMounted(() => {
  interval = setInterval(() => {
    tamagotchiState.hunger = Math.min(tamagotchiState.hunger + 1, 100);
    tamagotchiState.happiness = Math.max(tamagotchiState.happiness - 1, 0);
  }, 500);
});

onUnmounted(() => {
  clearInterval(interval);
});

// Watch for changes in tamagotchiState
watch(
  () => tamagotchiState,
  (newVal) => {
    const { hunger, happiness } = newVal;
    console.log(hunger, happiness, tamagotchiState);
    
    if (hunger <= 5 && happiness > 90) {
      tamagotchiState.mood = '^_^';
    } else if (hunger > 5 && hunger <= 10 && happiness > 80) {
      tamagotchiState.mood = 'o_o';
    } else if (hunger > 10 && hunger <= 20 && happiness > 70) {
      tamagotchiState.mood = '(O_O)';
    } else if (hunger > 20 && happiness > 60) {
      tamagotchiState.mood = '(>_<)';
    } else if (hunger > 30 && happiness > 50) {
      tamagotchiState.mood = '(x_x)';
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