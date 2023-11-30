<template>
  <div id="app">
    <ButtonCounter />
    <PropComponent
      v-for="post in posts"
      :key="post.id"
      :post="post.title"
    ></PropComponent>
  </div>
</template>

<script>
import ButtonCounter from "./components/ButtonCounter.vue";
import PropComponent from "./components/PropComponent.vue";

export default {
  name: "App",
  components: {
    ButtonCounter,
    PropComponent,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" },
      ],
    };
  },
};
</script>

<style scoped>
</style>
