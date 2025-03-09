<template>
  <template v-if="isUserAuthorized">
    <div class="container">
      <PageHeader />
      <RouterView />
      <PageFooter />
    </div>
  </template>
  <EmptyTokenWarning v-else />
</template>

<script setup lang="ts">
import PageHeader from "@/components/PageHeader/PageHeader.vue";
import PageFooter from "@/components/PageFooter/PageFooter.vue";
import { useUserStore } from "@/stores/user";
import { computed, onMounted } from "vue";
import EmptyTokenWarning from "@/components/EmptyTokenWarning/EmptyTokenWarning.vue";

const userStore = useUserStore();

const isUserAuthorized = computed(() => userStore.getAuthorizationStatus);

const getToken = (): string | null => {
  // ..
  return `Bearer ${import.meta.env.CURA_API_TOKEN}`; // change token here
  // return null; // change token here
};

onMounted(() => {
  userStore.setToken(getToken());
});
</script>

<style scoped>
.container {
  overflow-x: hidden;
  min-height: 100dvh;
}
</style>
