<template>
  <div>
    <button @click="onClick()" :style="{ background: color }" class="btn">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      console.log("  Button clicked");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>