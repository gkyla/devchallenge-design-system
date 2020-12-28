<template>
  <div class="wrapper">
    <button
      class="hamburger"
      :class="{ navisactive: navIsActive }"
      @click="toggleNav"
    >
      <img src="../assets/menu.svg" alt="Menu Icon" />
    </button>

    <nav class="nav" :class="{ active: navIsActive }">
      <slot name="nav"></slot>
    </nav>

    <main :class="{ navIsActive: navIsActive }">
      <slot name="main"></slot>
      <footer>
        Agits Zakky Akmala @ DevChallenges.io
      </footer>
    </main>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    function toggleNav() {
      store.dispatch("toggleNav");
    }

    const navIsActive = computed(() => store.state.navIsActive);

    return {
      toggleNav,
      navIsActive
    };
  }
};
</script>

<style lang="scss" src="../scss/components/Layout.scss" scoped></style>
