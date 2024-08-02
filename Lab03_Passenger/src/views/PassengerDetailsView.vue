<template>
    <div>
      <h1>Passenger Details</h1>
      <div v-if="passenger">
        <p>Name: {{ passenger.name }}</p>
        <p>Age: {{ passenger.age }}</p>
        <router-link :to="{ name: 'airline-details', params: { airlineId: passenger.airline._id } }">
          View Airline Details
        </router-link>
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
  const passenger = ref<any>(null);
  
  const fetchPassenger = async (id: string) => {
    try {
      const response = await fetch(`https://api.instantwebtools.net/v1/passenger/${id}`);
      if (!response.ok) {
        router.push({ name: 'resource-not-found' });
        return;
      }
      const data = await response.json();
      passenger.value = data;
    } catch (error) {
      router.push({ name: 'resource-not-found' });
    }
  };
  
  onMounted(() => {
    fetchPassenger(route.params.id as string);
  });
  </script>
  