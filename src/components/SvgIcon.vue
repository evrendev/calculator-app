<template>
  <component :is="dynamicComponent" />
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    dynamicComponent() {
      const name = this.name;

      return defineAsyncComponent(() => import(`../assets/images/icon-${name}.svg`));
    },
  },
};
</script>
