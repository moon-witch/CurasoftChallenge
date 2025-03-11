<script setup lang="ts">
import { computed, ref, watch } from "vue";
import DataElement from "@/components/LogTable/DataElement.vue";
import { useProtokollStore } from "@/stores/protokoll";
import { useUserStore } from "@/stores/user";

const props = defineProps( {
  filter: {
    type: String,
  }
})

const protokollStore = useProtokollStore()
const userStore = useUserStore()
const data: any = protokollStore.getItems()
const filteredData = computed(() => {
  if (data.value.items) {
    if (props.filter === "alle") {
      return data.value.items;
    }
    return data.value.items.filter((item: any) => item.typ === props.filter);
  }
  return []
});

const loading = computed(() => { return protokollStore.isLoading })
const isTokenValid = computed(() => { return userStore.token !== null })
</script>

<template>
  <section class="list">
    <div v-if="!isTokenValid && !loading">401 - Ungültiger Token</div>
    <div v-if="loading">Lade Daten...</div>
      <div v-if="filteredData.length === 0 && !loading" class="no-data">Keine Einträge</div>
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
