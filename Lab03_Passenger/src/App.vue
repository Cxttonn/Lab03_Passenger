<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const pageSize = ref(parseInt(route.query.pageSize as string) || 10);

const updatePageSize = () => {
  router.push({ query: { ...route.query, pageSize: pageSize.value, page: 1 } });
};
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list-view' }">Event</RouterLink> |
          <RouterLink :to="{ name: 'student' }">Student</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
        <div class="pagination-controls">
          <label for="pageSize">Events per page:</label>
          <select id="pageSize" v-model="pageSize" @change="updatePageSize">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    </header>
    <RouterView/>
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.pagination-controls {
  margin-top: 20px;
}
</style>

