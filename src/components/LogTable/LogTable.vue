<script setup lang="ts">
import { ref, watch } from "vue";
import FilterButton from "@/components/LogTable/FilterButton.vue";

defineProps({
  searchString: {
    type: String,
  },
});

const currentFilter = ref("Alle");
const changeFilter = (event: Record<string, any>) => {
  currentFilter.value = event;
}

watch(currentFilter, () => {
  console.log("currentFilter", currentFilter.value);
})
</script>

<template>
  <FilterButton @filter="changeFilter($event)" />
  {{ currentFilter }}
  <section class="list"></section>
  <section class="pagination"></section>
</template>

<style scoped lang="scss">

</style>
