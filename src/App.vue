<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  name: "App",
  components: {
    FooterComponent,
    HeaderComponent,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <main>
    <header-component />
    <section class="display fs-900">399,981</section>
    <section class="keypad fs-800">
      <div class="flex justify-content-space-between align-items-flex-center">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="fs-600 keys-200 text-200">DEL</button>
      </div>
      <div class="flex justify-content-space-between align-items-flex-center">
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
      </div>
      <div class="flex justify-content-space-between align-items-flex-center">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
      </div>
      <div class="flex justify-content-space-between align-items-flex-center">
        <button>.</button>
        <button>0</button>
        <button>/</button>
        <button>x</button>
      </div>
      <div class="flex justify-content-space-between align-items-flex-center">
        <button class="w-2x fs-600 keys-200 text-200">RESET</button>
        <button class="w-2x fs-600 keys-400 text-400">=</button>
      </div>
    </section>
    <footer-component />
  </main>
</template>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>
