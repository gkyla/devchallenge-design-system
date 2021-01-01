<template>
  <div :class="style.inner">
    <pre>{{ msg }}</pre>

    <slot></slot>
  </div>
</template>

<script>
import { useCssModule } from "vue";
export default {
  props: {
    msg: String
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
.inner {
  position: relative;
  margin-top: 20px;
  margin-right: 50px;
  align-self: flex-end;
  flex-basis: 180px;
}

@media (min-width: 630px) {
  .inner {
    &:not(:last-child) {
      flex-basis: 220px;
    }
  }
}
</style>
