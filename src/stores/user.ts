import { defineStore } from "pinia";
import { api } from "@/api/Api";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const token = ref<string | null>(null);
  const getAuthorizationStatus = computed(() => {
    return !!token.value;
  });
  function setToken(newToken: string | null) {
    if (newToken === null) removeToken();
    token.value = newToken;
    api.setAuthToken(newToken);
  }
  function removeToken() {
    token.value = null;
    api.setAuthToken(null);
  }
  return { token, getAuthorizationStatus, setToken, removeToken };
});
