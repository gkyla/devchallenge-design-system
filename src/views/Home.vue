<template>
  <div class="home">
    <h1>Recent Project</h1>
    <!-- Only put filename since on the Figure component -->
    <!-- is actually returning require("../assets/" + img); (See Figure.vue) -->
    <div class="showcase">
      <router-link class="project-link" to="/buttons">
        <Figure title="Button Components" imgsrc="buttonpage.jpg" />
      </router-link>
      <router-link class="project-link" to="/inputs">
        <Figure title="Input Components" imgsrc="inputpage.png" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Figure from "../components/Figure.vue";

export default {
  name: "Home",
  components: {
    Figure
  }
};
</script>

<style lang="scss" scoped>
.project-link {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: black;
  display: inline-block;
}
</style>
