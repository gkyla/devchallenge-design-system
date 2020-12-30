<template>
  <figure>
    <figcaption>{{ title }}</figcaption>
    <img :src="getImg(imgsrc)" :alt="title" />
  </figure>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true
    },
    imgsrc: {
      type: String,
      require: true
    }
  },

  setup() {
    function getImg(url) {
      return require("../assets/" + url);
    }

    return {
      getImg
    };
  }
};
</script>

<style lang="scss" scoped>
figure {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0 55px 50px 0;
  flex-basis: 300px;

  figcaption {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  img {
    display: inline-block;
    cursor: pointer;
    transition: 0.2s ease-in-out all;
    object-fit: cover;
    max-width: 400px;
    width: 100%;
    object-position: center;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 0 5px 0 rgba($color: #000000, $alpha: 0.3);

    &:hover {
      transform: scale(1.03);
    }
  }
}

@media (min-width: 550px) {
  figure {
    margin: 0 75px 50px 0;

    figcaption {
      font-size: 1.4rem;
    }
  }
}
</style>
