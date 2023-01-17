<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import DisplayComponent from "./components/DisplayComponent.vue";
import KeypadComponent from "./components/KeypadComponent.vue";
export default {
  name: "App",
  components: {
    FooterComponent,
    HeaderComponent,
    DisplayComponent,
    KeypadComponent,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <main>
    <header-component />
    <display-component :display="'399,981'" />
    <keypad-component />
    <footer-component />
  </main>
</template>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>
