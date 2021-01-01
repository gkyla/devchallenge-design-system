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
      :class="[startIcon ? style.starticon : '', 'material-icons']"
    >
      {{ startIcon }}
    </span>
    Default
    <span
      v-if="endIcon"
      :class="[endIcon ? style.endicon : '', 'material-icons']"
    >
      {{ endIcon }}
    </span>
  </button>
</template>

<script>
import { useCssModule } from "vue";
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
  },

  setup() {
    const style = useCssModule();

    return {
      style
    };
  }
};
</script>

<style lang="scss" src="../scss/components/Button.scss" module></style>
