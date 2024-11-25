import { defineStore } from "pinia";

interface TamagotchiState {
  hunger: number;
  happiness: number;
  mood: string;
}

const mood = {
  happy: '^_^',
  irritated: 'o_o',
  concerned: '(O_O)',
  exhausted: '(x_x)',
  angry: '(>_<)',
}

export const useTamagotchiStore = defineStore('tamagotchi', {
  state: (): TamagotchiState => ({
    happiness: 100,
    hunger: 0,
    mood: mood.happy
  }),
  actions: {
    feed() {
      this.hunger = Math.max(this.hunger - 10, 0);
    },
    play() {
      this.happiness = Math.min(this.happiness + 10, 100);

    },
    reset() {
      this.mood = '^_^';
      this.happiness = 100;
      this.hunger = 0;
    },
    updateState() {
      this.hunger = Math.min(this.hunger + 1, 100);
      this.happiness = Math.max(this.happiness - 1, 0);
    },
    startInterval() {
      setInterval(() => {
        this.updateState()
      }, 500);
    }
  }
})
