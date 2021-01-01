<template>
  <layout>
    <template #nav>
      <div class="logo">
        <strong class="dev">
          <span class="dev-logo">Dev</span>challenge.io
        </strong>
      </div>

      <div class="nav-lists">
        <router-link
          v-for="route in routerPaths"
          :key="route.name"
          class="nav-link"
          :to="route.path"
        >
          <span @click="toggleNav">{{ route.name }}</span>
        </router-link>
      </div>
    </template>

    <template #main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in" appear>
          <component :is="Component" />
        </transition>
      </router-view>
    </template>
  </layout>
</template>

<script>
import Layout from "./components/Layout.vue";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Layout
  },

  setup() {
    const store = useStore();
    const router = useRouter();

    const routerPaths = computed(() => {
      return router.options.routes;
    });

    function toggleNav() {
      if (!store.state.navIsActive) return;

      store.dispatch("toggleNav");
    }

    return {
      routerPaths,
      toggleNav
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

// Transition

// If want Both Enter & Leave (More Smooth)

.fade-enter-active,
.fade-leave-active {
  transition: 0.15s ease-in all;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

// If want only on Enter

// .fade-enter-active {
//   transition: 0.1s ease-in all;
// }

// .fade-enter-from {
//   opacity: 0;
// }
// .fade-enter-to {
//   opacity: 1;
// }

// If want only on leave

// .fade-leave-active {
//   transition: 0.1s ease-in all;
// }

// .fade-leave-from {
//   opacity: 0;
// }
// .fade-leave-to {
//   opacity: 1;
// }

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
}

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// For Routes who dont have project inside
.empty {
  font-size: 0.7em;
  margin-top: 20px;
}

.nav-link {
  position: relative;
  display: flex;
  width: 100%;
  transition: 0.2s ease-in all;
  text-decoration: none;
  padding-left: 30px;

  color: #9e9e9e;

  &:hover {
    background-color: rgba($color: #000000, $alpha: 10%);
  }

  &:not(:first-child) {
    margin: 10px 0;
  }

  &.router-link-active {
    color: black;
  }

  span {
    position: relative;
    padding: 10px;
    width: 100%;
    height: 100%;
    display: block;

    &::before {
      content: "";
      position: absolute;
      left: -30px;
      top: 0;
      bottom: 0;
      right: 0;
    }
  }
}

.logo {
  margin-top: 47px;
  margin-bottom: 50px;
  padding-left: 30px;
  text-align: left;

  .dev {
    .dev-logo {
      color: red;
    }
  }
}

@media (min-width: 850px) {
  .logo {
    padding-left: 30px;
    margin-bottom: 122px;
  }
}
</style>
