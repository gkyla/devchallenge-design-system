import { createStore } from "vuex";

const store = createStore({
  state: {
    navIsActive: false
  },

  actions: {
    toggleNav(ctx, val = !ctx.state.navIsActive) {
      ctx.state.navIsActive = val;
    }
  }
});

export default store;
