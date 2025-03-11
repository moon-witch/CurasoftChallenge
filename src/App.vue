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
import { computed, onMounted, ref, watch } from "vue";
import EmptyTokenWarning from "@/components/EmptyTokenWarning/EmptyTokenWarning.vue";

const userStore = useUserStore();

const isUserAuthorized = computed(() => userStore.getAuthorizationStatus);

const getToken = (): string | null => {
  const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
  const storedData = JSON.parse(localStorage.getItem("tokenData") || "null");

  if (storedData && storedData.date === today && storedData.token) {
    return `Bearer ${storedData.token}`;
  }

  const newToken = import.meta.env.VITE_CURA_API_KEY;
  if (newToken) {
    const tokenData = { token: newToken, date: today };
    localStorage.setItem("tokenData", JSON.stringify(tokenData));
    return `Bearer ${newToken}`;
  }
  return null;
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
