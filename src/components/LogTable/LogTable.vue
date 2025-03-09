<script setup lang="ts">
import { ref } from "vue";
import FilterButton from "@/components/LogTable/FilterButton.vue";

defineProps({
  searchString: {
    type: String,
  },
});

const currentFilter = ref('Alle')
const changeFilter = (event: Record<string, any>) => {
  currentFilter.value = event.target.textContent;
}
</script>

<template>
  <FilterButton @click="changeFilter($event)" />
  {{ currentFilter }}
  <section class="list"></section>
  <section class="pagination"></section>
</template>

<style scoped lang="scss">

</style>
