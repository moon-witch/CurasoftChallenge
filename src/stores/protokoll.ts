import { defineStore } from "pinia";
import type { ProtokollResponse } from "@/models/ProtokollResponse";
import { ref } from "vue";

export const useProtokollStore = defineStore("protokoll", () => {
  const lastResponse = ref<ProtokollResponse | null>(null);

  const getItems = () => {
    return lastResponse.value?.items || [];
  };

  const request = () => {
    //
  };
});
