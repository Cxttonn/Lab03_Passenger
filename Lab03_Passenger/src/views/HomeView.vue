<template>
  <div>
    <h1>Passenger List</h1>
    <ul>
      <li v-for="passenger in passengers" :key="passenger._id" @click="viewPassengerDetails(passenger._id)">
        {{ passenger.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const passengers = ref<any[]>([]);

const fetchPassengers = async () => {
  try {
    const response = await fetch('https://api.instantwebtools.net/v1/passenger');
    const data = await response.json();
    passengers.value = data;
  } catch (error) {
    console.error('Failed to fetch passengers:', error);
  }
};

const viewPassengerDetails = (id: string) => {
  router.push({ name: 'passenger-details', params: { id } });
};

onMounted(fetchPassengers);
</script>
