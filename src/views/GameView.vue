<script setup lang="ts">
import Tamagotchi from '@/components/Tamagotchi.vue';

import { ref } from 'vue';

interface TamagotchiState {
  hunger: number;
  happiness: number;
  mood: string;
}

const handleUpdate = (state: TamagotchiState) => {
  parentState.value = state;
};

const parentState = ref<TamagotchiState>({
  hunger: 0,
  happiness: 100,
  mood: '^_^',
});

</script>

<template>
  <div>
    {{ parentState }}
  </div>
  <div>
    <Tamagotchi 
    name="Tama"
    @update="handleUpdate"
    />
  </div>
</template>