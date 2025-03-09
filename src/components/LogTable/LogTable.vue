<script setup lang="ts">
defineProps({
  searchString: {
    type: String,
  },
});
</script>

<template>
  <div>{{ searchString }}</div>
</template>

<style scoped></style>
