<script setup lang="ts">
import { computed, ref, watch } from "vue";
import DataElement from "@/components/LogTable/DataElement.vue";
import { useProtokollStore } from "@/stores/protokoll";

const props = defineProps( {
  filter: {
    type: String,
  }
})

const protokollStore = useProtokollStore()
const data = protokollStore.getItems()
const filteredData = computed(() => {
  if (props.filter === "alle") {
    return data.value.items;
  }
  return data.value.items.filter((item) => item.typ === props.filter);
});
</script>

<template>
  <section v-if="data" class="list">
    {{ filter }}
      <DataElement
        v-for="dataSet in filteredData"
        :key="dataSet.id"
        :type="dataSet.typ"
        :employee="
          `${dataSet.mitarbeiter_vorname || ''} ${dataSet.mitarbeiter_name || ''}`.trim()
        "
        :message="dataSet.message"
        :timestamp="dataSet.stamp"
      />
  </section>
</template>

<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
