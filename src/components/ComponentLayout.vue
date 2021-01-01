<template>
  <div ref="display" :class="style.display" :style="{ display: display }">
    <slot></slot>
  </div>
</template>

<script>
import { useCssModule } from "vue";
export default {
  props: {
    name: String,
    display: String
  },

  setup() {
    const style = useCssModule();

    return {
      style
    };
  }
};
</script>

<style lang="scss" module>
.display {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-top: 35px;
}
</style>
