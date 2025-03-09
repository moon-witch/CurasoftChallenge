import { defineStore } from "pinia";
import type { ProtokollResponse } from "@/models/ProtokollResponse";
import { computed, ref } from "vue";

export const useProtokollStore = defineStore("protokoll", () => {
  const lastResponse = ref<ProtokollResponse | null>(null);

  const getItems = () =>
    computed(() => {
      return lastResponse.value?.items || [];
    });

  const request = async () => {
    //
  };

  return { lastResponse, getItems, request };
});
