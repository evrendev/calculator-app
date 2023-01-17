<template>
  <section class="keypad fs-800">
    <div class="flex justify-content-space-between align-items-flex-center">
      <button @click="numPressed(7)">7</button>
      <button @click="numPressed(8)">8</button>
      <button @click="numPressed(9)">9</button>
      <button @click="processPressed('del')" class="fs-600 keys-200 text-200">DEL</button>
    </div>
    <div class="flex justify-content-space-between align-items-flex-center">
      <button @click="numPressed(4)">4</button>
      <button @click="numPressed(5)">5</button>
      <button @click="numPressed(6)">6</button>
      <button @click="processPressed('+')">+</button>
    </div>
    <div class="flex justify-content-space-between align-items-flex-center">
      <button @click="numPressed(1)">1</button>
      <button @click="numPressed(2)">2</button>
      <button @click="numPressed(3)">3</button>
      <button @click="processPressed('-')">-</button>
    </div>
    <div class="flex justify-content-space-between align-items-flex-center">
      <button @click="numPressed('.')">.</button>
      <button @click="numPressed(0)">0</button>
      <button @click="processPressed('/')">/</button>
      <button @click="processPressed('*')">x</button>
    </div>
    <div class="flex justify-content-space-between align-items-flex-center">
      <button @click="processPressed('reset')" class="w-2x fs-600 keys-200 text-200">RESET</button>
      <button @click="processPressed('=')" class="w-2x fs-600 keys-400 text-400">=</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "KeypadComponent",
  emits: ["numericValue", "processValue"],
  setup(props, { emit }) {
    let numPressed = (val) => {
      emit("numericValue", val);
    };

    let processPressed = (val) => {
      emit("processValue", val);
    };

    return { processPressed, numPressed };
  },
};
</script>
