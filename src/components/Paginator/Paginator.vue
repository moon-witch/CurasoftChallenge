<script setup lang="ts">
import { computed } from 'vue';
import { useProtokollStore } from '@/stores/protokoll';

const protokollStore = useProtokollStore();

const currentPage = computed(() => protokollStore.currentPage);
const totalPages = computed(() => protokollStore.totalPages);

const visiblePages = computed<(number | string)[]>(() => {
  const pages: (number | string)[] = [];
  const current = currentPage.value;
  const total = totalPages.value;

  if (total < 1) {
    pages.push(1);
    return pages;
  }
  pages.push(1);

  let start = Math.max(2, current - 1);
  let end = Math.min(total - 1, current + 1);

  if (start > 2) {
    pages.push('...');
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < total - 1) {
    pages.push('...');
  }

  if (total > 1) {
    pages.push(total);
  }

  return pages;
});

const goToPage = (page: number | string) => {
  if (typeof page === 'number' && page !== currentPage.value) {
    protokollStore.updateCurrentPage(page)
    protokollStore.request()
  }
};
</script>

<template>
  <div class="button-container">
    <template v-for="page in visiblePages" :key="page">
      <button
        v-if="typeof page === 'number'"
        class="button"
        :disabled="page === currentPage"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
      <span v-else class="ellipsis">{{ page }}</span>
    </template>
  </div>
</template>

<style scoped lang="scss">
.button-container {
  display: flex;
  gap: 0.5rem;
  background: white;
  justify-content: end;
  align-items: center;

  .button {
    background: var(--accent-color);
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .button[disabled] {
    cursor: default;
    opacity: 0.6;
    color: black;
  }
}
</style>
