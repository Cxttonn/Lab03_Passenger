<template>
    <div>
      <h1>Airline Details</h1>
      <div v-if="airline">
        <p>Name: {{ airline.name }}</p>
        <p>IATA Code: {{ airline.iata }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  const airline = ref<any>(null);
  
  const fetchAirline = async (id: string) => {
    try {
      const response = await fetch(`https://api.instantwebtools.net/v1/airlines/${id}`);
      if (!response.ok) {
        router.push({ name: 'resource-not-found' });
        return;
      }
      const data = await response.json();
      airline.value = data;
    } catch (error) {
      router.push({ name: 'resource-not-found' });
    }
  };
  
  onMounted(() => {
    fetchAirline(route.params.airlineId as string);
  });
  </script>
  