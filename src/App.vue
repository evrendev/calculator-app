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
    let num1 = ref("0");
    let num2 = ref("0");
    let process = ref(null);
    let display = ref("0");
    let err = ref(false);

    const result = {
      "+": () => {
        return (parseFloat(num1.value) * 10 + parseFloat(num2.value) * 10) / 10;
      },
      "-": () => {
        return parseFloat(num1.value) - parseFloat(num2.value);
      },
      "/": () => {
        if (parseFloat(num2.value) == 0) {
          err.value = true;
          num1.value = 0;
          return;
        }

        return parseFloat(num1.value) / parseFloat(num2.value);
      },
      "*": () => {
        return parseFloat(num1.value) * parseFloat(num2.value);
      },
      "=": () => {
        return num1.value;
      },
    };

    const numericKeyPressed = (key) => {
      if (!process.value) {
        const comma = /\./g.test(num1.value);
        num1.value +=
          (comma && key == ".") || (!comma && parseInt(num1.value) == 0 && key == "0") ? "" : key;
        display.value = num1.value;
      } else {
        const comma = /\./g.test(num2.value);
        num2.value +=
          (comma && key == ".") || (!comma && parseInt(num2.value) == 0 && key == "0") ? "" : key;
        display.value = num2.value;
      }
    };

    const processKeyPressed = (key) => {
      if ((key == "+" || key == "-" || key == "*" || key == "/" || key == "=") && !process.value) {
        num2.value = 0;
        process.value = key;
      } else if (
        (key == "+" || key == "-" || key == "*" || key == "/" || key == "=") &&
        process.value
      ) {
        num1.value = result[process.value]();
        num2.value = "0";
        process.value = key;
      } else if (key == "del" && process.value && num2.value != "0") {
        num2.value = `${num2.value}`.slice(0, -1);
      } else if (key == "del" && !process.value && num1.value != "0") {
        num1.value = `${num1.value}`.slice(0, -1);
      } else if (key == "reset") {
        num1.value = "0";
        num2.value = "0";
        err.value = false;
        process.value = null;
      }

      display.value = err.value
        ? "ERROR"
        : num2.value.toString() != "0"
        ? num2.value.toString()
        : num1.value.toString();
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
