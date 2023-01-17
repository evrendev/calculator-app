<template>
  <section class="display fs-900">{{ display }}</section>
</template>

<script>
export default {
  name: "DisplayComponent",
  props: {
    display: {
      type: Number,
      value: null,
    },
  },
};
</script>
