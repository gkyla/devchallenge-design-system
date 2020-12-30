<template>
  <div ref="display" class="display" :style="{ display: display }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    display: String
  }
};
</script>

<style lang="scss" scoped>
.display {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-top: 35px;
}
</style>
