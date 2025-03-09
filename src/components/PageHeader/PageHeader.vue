<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute()

const currentRoute = computed(() => {
  return route.fullPath;
});
</script>

<template>
  <header class="header">
    <div class="logo">GO.VITAL</div>
    <nav>
      <ul>
        <li class="nav-item" :class="{ active: currentRoute === '/' }">
          <RouterLink to="/">Start</RouterLink>
        </li>
        <li class="nav-item" :class="{ active: currentRoute === '/patients' }">
          <RouterLink to="/patients">Patienten</RouterLink>
        </li>
        <li class="nav-item" :class="{ active: currentRoute === '/graphs' }">
          <RouterLink to="/graphs">Kurven</RouterLink>
        </li>
        <li class="nav-item" :class="{ active: currentRoute === '/settings' }">
          <RouterLink to="/settings">Einstellungen</RouterLink>
        </li>
        <li class="nav-item" :class="{ active: currentRoute === '/protocol' }">
          <RouterLink to="/protocol">Protokoll</RouterLink>
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
  nav {
    height: 100%;
    ul {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2.5rem;
      list-style: none;
      li {
        height: calc(100% - 2px);
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 2px solid transparent;
      }
      a {
        text-decoration: none;
        color: white;
        opacity: 0.75;
      }
      .active {
        border-bottom: 2px solid white;
        a {
          font-weight: bold;
          opacity: 1;
        }
      }
    }
  }
}
</style>
