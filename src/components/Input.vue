<template>
  <div class="input-group" :class="{ fullwidth: fullWidth }">
    <label
      class="label"
      :demo="demo"
      :error="error"
      :class="{ focused: focused, hovered: hovered }"
      :for="name"
    >
      {{ name }}
    </label>

    <div class="input-wrapper-action" :demo="demo">
      <span
        v-if="startIcon"
        class="material-icons"
        :class="{ start: startIcon }"
      >
        {{ startIcon }}
      </span>

      <textarea
        v-if="multiline"
        @focus="focused = true"
        @blur="focused = false"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
        class="textarea"
        :rows="defineRow(row)"
      >
      </textarea>
      <input
        v-else
        @focus="focused = true"
        @blur="focused = false"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
        class="input"
        :class="{
          start: startIcon,
          end: endIcon,
          fullwidth: fullWidth,
          focused: focused
        }"
        :disabled="disabled"
        :error="error"
        :inputSize="size"
        :type="type"
        :value="value"
        :demo="demo"
      />

      <span v-if="endIcon" class="material-icons" :class="{ end: endIcon }">
        {{ endIcon }}</span
      >
    </div>
    <span v-if="helperText" class="helpertext">{{ helperText }}</span>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    name: {
      type: String,
      default: "Label"
    },
    type: {
      type: String,
      default: "text"
    },
    error: Boolean,
    value: String,
    helperText: String,
    startIcon: String,
    endIcon: String,
    size: {
      type: String,
      require: false
    },
    disabled: Boolean,
    fullWidth: Boolean,
    multiline: Boolean,
    row: String,
    demo: String
  },

  setup() {
    const focused = ref(false);
    const hovered = ref(false);

    function defineRow(num) {
      return parseInt(num);
    }

    return {
      focused,
      hovered,
      defineRow
    };
  }
};
</script>

<style lang="scss" src="../scss/components/Input.scss" scoped></style>
