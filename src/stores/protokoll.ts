import { defineStore } from "pinia";
import type { ProtokollResponse } from "@/models/ProtokollResponse";
import { computed, ref } from "vue";
import { api } from "@/api/Api";

export const useProtokollStore = defineStore("protokoll", () => {
  const lastResponse = ref<ProtokollResponse | null>(null);
  const currentPage = ref<number>(1);
  const totalPages = ref<number>(1);
  const pageSize = ref<number>(10);
  const isLoading = ref(true);

  const getItems = computed(() => {
      return lastResponse.value || {};
    });

  const request = async (page = currentPage.value) => {
    try {
      isLoading.value = true;
      const response = await api.request({
        path: "web/v3/go.vital/protocol",
        method: "GET",
        getParams: {
          page,
          limit: pageSize.value,
        }
      })

      const data = await response.json();

      lastResponse.value = data;
    } catch (error) {
      console.error("Error fetiching data:", error);
    } finally {
      isLoading.value = false;
    }
  };

  return { lastResponse, isLoading, getItems, request };
});
