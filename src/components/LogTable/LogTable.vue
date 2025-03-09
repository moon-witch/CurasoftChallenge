<script setup lang="ts">
import { ref, watch } from "vue";
import FilterButton from "@/components/LogTable/FilterButton.vue";
import DataList from "@/components/LogTable/DataList.vue";

defineProps({
  searchString: {
    type: String,
  },
});

const currentFilter = ref("Alle");
const changeFilter = (event: string) => {
  currentFilter.value = event;
}
</script>

<template>
  <FilterButton @filter="changeFilter($event)" />
  <DataList />
  <section class="pagination"></section>
</template>

<style scoped lang="scss">

</style>
