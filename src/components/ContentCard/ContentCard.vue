<script setup lang="ts">
import { ref, watch } from "vue";
import { vOnClickOutside } from '@vueuse/components'

defineProps<{
  title: string;
}>();

const emit = defineEmits(["searching"]);

const inputString = ref("");

const searchbarOpen = ref(false);
const toggleSearchbar = () => {
  searchbarOpen.value = !searchbarOpen.value;
};

const onClickOutside = () => {
  if (searchbarOpen.value) {
    toggleSearchbar();
  }
};

watch(inputString, () => {
  emit("searching", inputString.value);
});
</script>

<template>
  <article class="card">
    <header class="header">
      <h2>{{ title }}</h2>
      <div class="search">
        <input
          v-model="inputString"
          v-on-click-outside="onClickOutside"
          class="search-bar"
          :class="{ open: searchbarOpen }"
        />
        <img
          class="search-button"
          src="/icons/magnifying-glass-solid.svg"
          alt="search button"
          @click="toggleSearchbar"
        />
      </div>
    </header>
    <div class="content">
      <slot />
    </div>
  </article>
</template>

<style scoped>
.card {
  max-width: 750px;
  height: 88dvh;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 grey;

  @media (max-width: 1023px) {
    height: 82dvh;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--accent-color);
    padding: 0 1rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    .search {
      display: flex;
      align-items: center;
      justify-content: end;
      position: relative;
      gap: 0.5rem;

      .search-button {
        width: 20px;
        cursor: pointer;
        filter: invert(100%);
      }

      .search-bar {
        border-radius: 5px;
        outline: none;
        border: none;
        padding: 0;
        width: 0;
        transition: width 0.1s;

        &.open {
          padding: 0.25rem 0.5rem;
          width: 100%;
        }
      }
    }
  }
}
</style>
