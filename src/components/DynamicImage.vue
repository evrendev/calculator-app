<template>
  <img :src="src" :alt="alt" />
</template>
<script>
export default {
  name: "DynamicImage",
  props: {
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const src = new URL(`../assets/images/${props.image}`, import.meta.url).href;
    return { src };
  },
};
</script>
