<script setup lang="ts">
import { ref, watch } from "vue";
import DataElement from "@/components/LogTable/DataElement.vue";
import { useProtokollStore } from "@/stores/protokoll";

const protokollStore = useProtokollStore()
const data = protokollStore.getItems()
</script>

<template>
  <section v-if="data" class="list">
      <DataElement
        v-for="dataSet in data.items"
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
