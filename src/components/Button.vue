<template>
  <button
    :disabled="disabled"
    :variant="variant"
    :disableshadow="disableShadow"
    :size="size"
    :color="color"
    :demo="demo"
  >
    <span
      v-if="startIcon"
      class="material-icons"
      :class="{ starticon: startIcon }"
    >
      {{ startIcon }}</span
    >
    Default
    <span v-if="endIcon" class="material-icons" :class="{ endicon: endIcon }">
      {{ endIcon }}</span
    >
  </button>
</template>

<script>
export default {
  props: {
    variant: String,
    disableShadow: Boolean,
    disabled: Boolean,
    startIcon: String,
    endIcon: String,
    size: String,
    color: String,
    demo: String
  }
};
</script>

<style lang="scss" src="../scss/components/Button.scss" scoped></style>
