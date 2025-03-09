<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed, provide } from "vue";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu.vue";
import { useBurgerMenu } from "@/composables/useBurgerMenu";

const route = useRoute();
const menuComposable = useBurgerMenu();
provide("menuComposable", menuComposable);

const currentRoute = computed(() => {
  return route.fullPath;
});

const mobileMenuOpen = menuComposable.menuOpen;
const handleToggle = () => {
  menuComposable.toggle();
};
</script>

<template>
  <header class="header">
    <div class="logo">GO.VITAL</div>
    <BurgerMenu class="menu-button" @toggle="handleToggle" />
    <nav class="nav" :class="{ open: mobileMenuOpen }">
      <ul class="nav-list">
        <li
          class="nav-item"
          :class="{ active: currentRoute === '/' }"
          @click="handleToggle"
        >
          <RouterLink to="/" class="a">Start</RouterLink>
        </li>
        <li
          class="nav-item"
          :class="{ active: currentRoute === '/patients' }"
          @click="handleToggle"
        >
          <RouterLink to="/patients" class="a">Patienten</RouterLink>
        </li>
        <li
          class="nav-item"
          :class="{ active: currentRoute === '/graphs' }"
          @click="handleToggle"
        >
          <RouterLink to="/graphs" class="a">Kurven</RouterLink>
        </li>
        <li
          class="nav-item"
          :class="{ active: currentRoute === '/settings' }"
          @click="handleToggle"
        >
          <RouterLink to="/settings" class="a">Einstellungen</RouterLink>
        </li>
        <li
          class="nav-item"
          :class="{ active: currentRoute === '/log' }"
          @click="handleToggle"
        >
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
  .menu-button {
    position: absolute;
    top: 7px;
    right: 7px;
    width: 2rem;
    z-index: 3;
    @media (min-width: 1024px) {
      display: none;
    }
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
    position: relative;
    .nav {
      background: var(--accent-color);
      height: calc(100dvh - 50px);
      padding: 2rem;
      z-index: 2;
      box-shadow: -2px 2px 8px 0 grey;
      position: absolute;
      transform: translateX(1000px);
      transition: transform 0.2s ease-in-out;

      &.open {
        transform: translateX(610px);

        @media (max-width: 400px) {
          transform: translateX(210px);
        }
      }
      .nav-list {
        flex-direction: column;
        justify-content: center;
        margin-top: 3rem;
        height: auto;
      }
    }
  }
}
</style>
