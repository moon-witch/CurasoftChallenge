<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["filter"]);

type Filter = "Alle" | "Fehler" | "Warnung" | "Log";
const currentFilter = ref<Filter>("Alle");

const changeFilter = (newFilter: Filter) => {
  currentFilter.value = newFilter;
  emit("filter", currentFilter.value);
};
</script>

<template>
  <section class="filter">
    <button
      class="filter-button"
      :class="{ active: currentFilter === 'Alle' }"
      @click="changeFilter('Alle')"
    >
      Alle
    </button>
    <button
      class="filter-button"
      :class="{ active: currentFilter === 'Fehler' }"
      @click="changeFilter('Fehler')"
    >
      Fehler
    </button>
    <button
      class="filter-button"
      :class="{ active: currentFilter === 'Warnung' }"
      @click="changeFilter('Warnung')"
    >
      Warnung
    </button>
    <button
      class="filter-button"
      :class="{ active: currentFilter === 'Log' }"
      @click="changeFilter('Log')"
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