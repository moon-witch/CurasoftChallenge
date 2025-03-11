<script setup lang="ts">
import ContentCard from "@/components/ContentCard/ContentCard.vue";
import { useProtokollStore } from "@/stores/protokoll";
import { computed, onMounted, provide, ref, watch } from "vue";
import LogTable from "@/components/LogTable/LogTable.vue";

const protokollStore = useProtokollStore();

const searchString = ref("")
const handleSearch = (event: string) => {
  searchString.value = event;
};

onMounted(async () => {
  await protokollStore.request();
});
</script>

<template>
  <main class="page">
    <ContentCard
      title="Protokoll"
      class="contentCard"
      @searching="handleSearch($event)"
    >
      <LogTable :searchString="searchString" />
    </ContentCard>
    <img
      class="bg-img"
      src="/mockup_bg-CgVORq9O.png"
      alt="exclamation mark background image"
    />
  </main>
</template>

<style scoped lang="scss">
.page {
  padding: 2rem 5rem;

  @media (max-width: 1023px) {
    padding: 0.5rem 1rem;
  }

  .bg-img {
    position: absolute;
    bottom: 50px;
    right: 25px;
    width: 35rem;
    z-index: -1;

    @media (max-width: 1023px) {
      display: none;
    }
  }
}
</style>
