<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const currentRoute = computed(() => {
  return route.fullPath;
});
</script>

<template>
  <header class="header">
    <div class="logo">GO.VITAL</div>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item" :class="{ active: currentRoute === '/' }">
          <RouterLink to="/" class="a">Start</RouterLink>
        </li>
        <li class="nav-item" :class="{ active: currentRoute === '/patients' }">
          <RouterLink to="/patients" class="a">Patienten</RouterLink>
        </li>
        <li class="nav-item" :class="{ active: currentRoute === '/graphs' }">
          <RouterLink to="/graphs" class="a">Kurven</RouterLink>
        </li>
        <li class="nav-item" :class="{ active: currentRoute === '/settings' }">
          <RouterLink to="/settings" class="a">Einstellungen</RouterLink>
        </li>
        <li class="nav-item" :class="{ active: currentRoute === '/log' }">
          <RouterLink to="/log" class="a">Protokoll</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100dvw;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 3rem;
  background: var(--accent-color);
  box-shadow: 0 0 8px 0 grey;
  .logo {
    font-family: var(--font-family-secondary), sans-serif;
    font-size: 1.75rem;
    padding: 0.5rem;
    color: white;
  }
  .nav {
    height: 100%;
    .nav-list {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2.5rem;
      list-style: none;
      .nav-item {
        height: calc(100% - 2px);
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 2px solid transparent;
        transition: border-bottom 0.3s ease-in-out;
      }
      .a {
        text-decoration: none;
        color: white;
        opacity: 0.75;
        transition: opacity 0.1s ease-in-out;

        &:hover {
          opacity: 1;
        }
      }
      .active {
        border-bottom: 2px solid white;
        .a {
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: 1023px) {
    align-items: start;
    justify-content: space-between;
    .nav {
      background: var(--accent-color);
      height: auto;
      padding: 2rem;
      margin-top: 50%;
      z-index: 2;
      box-shadow: -2px 2px 8px 0 grey;
      .nav-list {
        flex-direction: column;
        justify-content: start;
      }
    }
  }
}
</style>
