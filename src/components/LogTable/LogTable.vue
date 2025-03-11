<script setup lang="ts">
import { ref, watch } from "vue";
import FilterButton from "@/components/LogTable/FilterButton.vue";
import DataList from "@/components/LogTable/DataList.vue";
import Paginator from "@/components/Paginator/Paginator.vue";

defineProps({
  searchString: {
    type: String,
  },
});

const currentFilter = ref("alle");
const changeFilter = (event: string) => {
  currentFilter.value = event;
}
</script>

<template>
  <div class="table">
    <FilterButton @filter="changeFilter($event)" />
    <DataList :filter="currentFilter"/>
    <Paginator class="paginator"/>
  </div>}
</template>

<style scoped lang="scss">
</style>
