<template>
  <header class="flex justify-content-space-between align-items-flex-end">
    <div>
      <h1 class="fs-700">calc</h1>
    </div>
    <div>
      <div class="theme-changer flex align-items-flex-end">
        <h3 class="fs-200">THEME</h3>
        <div class="option-group">
          <div class="labels flex justify-content-space-between">
            <span class="fs-200">1</span>
            <span class="fs-200">2</span>
            <span class="fs-200">3</span>
          </div>
          <div class="inputs flex justify-content-space-between">
            <input
              type="radio"
              name="theme"
              id="theme1"
              value="1"
              v-model="theme"
              @change="changeTheme"
            />
            <label for="theme1" class="fs-200"></label>
            <input
              type="radio"
              name="theme"
              id="theme2"
              value="2"
              v-model="theme"
              @change="changeTheme"
            />
            <label for="theme2" class="fs-200"></label>
            <input
              type="radio"
              name="theme"
              id="theme3"
              value="3"
              v-model="theme"
              @change="changeTheme"
            />
            <label for="theme3" class="fs-200"></label>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let theme = ref(1);

    const changeTheme = () => {
      let body = document.querySelector("body");
      body.className = "";
      body.classList.add(`theme${theme.value}`);
    };

    return { theme, changeTheme };
  },
};
</script>
