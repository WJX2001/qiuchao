<!-- BlogPost.vue -->
<template>
    <div>
      <h2>{{ post }}</h2>
      <!-- Other post details can be added here -->
    </div>
  </template>
  
  <script>
  export default {
    props: ['post']
  };
  </script>
  