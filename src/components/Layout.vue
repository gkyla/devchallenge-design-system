<template>
  <div :class="style.wrapper">
    <button
      :class="[navIsActive ? style.navisactive : '', style.hamburger]"
      @click="toggleNav"
    >
      <img src="../assets/menu.svg" alt="Menu Icon" />
    </button>

    <nav :class="[navIsActive ? style.active : '', style.nav]">
      <slot name="nav"></slot>
    </nav>

    <main :class="[navIsActive ? style.navIsActive : '']">
      <slot name="main"></slot>
      <footer>
        Agits Zakky Akmala @ DevChallenges.io
      </footer>
    </main>
  </div>
</template>

<script>
import { computed, useCssModule } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const style = useCssModule();
    console.log(style);

    const navIsActive = computed(() => store.state.navIsActive);
    function toggleNav() {
      store.dispatch("toggleNav");
    }

    return {
      toggleNav,
      navIsActive,
      style
    };
  }
};
</script>

<style lang="scss" src="../scss/components/Layout.scss" module></style>
