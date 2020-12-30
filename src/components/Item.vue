<template>
  <div class="inner">
    <pre>{{ msg }}</pre>

    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
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
