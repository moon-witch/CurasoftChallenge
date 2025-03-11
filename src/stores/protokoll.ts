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

  const request = async (page: number = currentPage.value, needle: string | null = null) => {
    try {
      isLoading.value = true;
      const response = await api.request({
        path: "web/v3/go.vital/protocol",
        method: "GET",
        getParams: {
          page,
          limit: pageSize.value,
          needle: needle
        }
      })

      const data = await response.json();

      lastResponse.value = data;
      totalPages.value = data.page_count
      console.log('data', data)
      console.log('pages', totalPages.value)
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      isLoading.value = false;
    }
  };

  return { lastResponse, isLoading, currentPage, getItems, request };
});
