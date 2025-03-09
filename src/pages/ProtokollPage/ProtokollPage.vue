<template>
  <main class="page">
    <ContentCard title="Protokoll" class="contentCad">
      Protokollliste soll hier sein
    </ContentCard>
    <img
      class="bg-img"
      src="/mockup_bg-CgVORq9O.png"
      alt="exclamation mark background image"
    />
  </main>
</template>

<script setup lang="ts">
import ContentCard from "@/components/ContentCard/ContentCard.vue";
import { useProtokollStore } from "@/stores/protokoll";
import { onMounted } from "vue";

const protokollStore = useProtokollStore();

// ...

onMounted(async () => {
  await protokollStore.request();
});
</script>

<style scoped lang="scss">
.page {
  padding: 10px;
  background: springgreen;

  .bg-img {
    position: absolute;
    bottom: 50px;
    right: 25px;
    width: 35rem;
  }
}
</style>
