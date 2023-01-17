<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import DisplayComponent from "./components/DisplayComponent.vue";
import KeypadComponent from "./components/KeypadComponent.vue";
import { ref } from "vue";
export default {
  name: "App",
  components: {
    FooterComponent,
    HeaderComponent,
    DisplayComponent,
    KeypadComponent,
  },
  setup() {
    let num1 = ref(0);
    let num2 = ref(0);
    let process = ref(null);
    let display = ref(0);
    let comma = ref(false);

    const result = {
      "+": () => {
        return num1.value + num2.value;
      },
      "-": () => {
        return num1.value - num2.value;
      },
      "/": () => {
        return num1.value / num2.value;
      },
      "*": () => {
        return num1.value * num2.value;
      },
      "=": () => {
        return num1.value;
      },
    };

    const numericKeyPressed = (key) => {
      if (!process.value && key != ".") {
        num1.value = comma.value
          ? parseFloat(`${num1.value}.${key}`)
          : parseFloat(`${num1.value}${key}`);
        display.value = num1.value;
        comma.value = false;
      } else if (process.value && key != ".") {
        num2.value = comma.value
          ? parseFloat(`${num2.value}.${key}`)
          : parseFloat(`${num2.value}${key}`);
        display.value = num2.value;
        comma.value = false;
      } else {
        comma.value = true;
        display.value += ".";
      }
    };

    const processKeyPressed = (key) => {
      if ((key == "+" || key == "-" || key == "*" || key == "/" || key == "=") && num2.value > 0) {
        num1.value = result[process.value ?? key]();
        num2.value = 0;
        process.value = key;
      } else if (
        (key == "+" || key == "-" || key == "*" || key == "/" || key == "=") &&
        num2.value == 0
      ) {
        process.value = key;
      } else if (key == "del" && num2.value > 0) {
        num2.value = num2.value > 9 ? parseFloat(`${num2.value}`.slice(0, -1)) : 0;
      } else if (key == "del" && num2.value == 0) {
        num1.value = num1.value > 9 ? parseFloat(`${num1.value}`.slice(0, -1)) : 0;
      } else if (key == "reset") {
        num1.value = 0;
        num2.value = 0;
        comma.value = false;
        process.value = null;
      }

      display.value = num2.value > 0 ? num2.value : num1.value;
    };

    return { numericKeyPressed, processKeyPressed, display };
  },
};
</script>

<template>
  <main>
    <header-component />
    <display-component :display="display" />
    <keypad-component @numericValue="numericKeyPressed" @processValue="processKeyPressed" />
    <footer-component />
  </main>
</template>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>
