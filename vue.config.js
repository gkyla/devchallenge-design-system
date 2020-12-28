module.exports = {
  pages: {
    index: {
      title: "Devchallenges - Design System",
      entry: "src/main.js"
    }
  },
  css: {
    loaderOptions: {
      scss: {
        // Global Data
        prependData: `@import "@/scss/_variables.scss";`
      }
    }
  },
  configureWebpack: {
    devServer: {
      host: "0.0.0.0",
      port: 9090,
      compress: true
    }
  }
};
