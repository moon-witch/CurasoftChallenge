<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["filter"]);

type Filter = "alle" | "error" | "warning" | "log";
const currentFilter = ref<Filter>("alle");

const changeFilter = (newFilter: Filter) => {
  currentFilter.value = newFilter;
  emit("filter", currentFilter.value);
};
</script>

<template>
  <section class="filter">
    <button
      class="filter-button"
      :class="{ active: currentFilter === 'alle' }"
      @click="changeFilter('alle')"
    >
      Alle
    </button>
    <button
      class="filter-button"
      :class="{ active: currentFilter === 'error' }"
      @click="changeFilter('error')"
    >
      Fehler
    </button>
    <button
      class="filter-button"
      :class="{ active: currentFilter === 'warning' }"
      @click="changeFilter('warning')"
    >
      Warnung
    </button>
    <button
      class="filter-button"
      :class="{ active: currentFilter === 'log' }"
      @click="changeFilter('log')"
    >
      Log
    </button>
  </section>
</template>

<style lang="scss" scoped>
.filter {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.5rem;

  .filter-button {
    background: var(--accent-color);
    border: none;
    padding: 0.5rem 1rem;
    color: white;
    opacity: 0.5;
    cursor: pointer;
    &:first-of-type {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-of-type {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &.active {
      opacity: 1;
    }
  }
}
</style>