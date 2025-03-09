import { ref } from "vue";

export const useBurgerMenu = () => {
  const menuOpen = ref(false);

  const toggle = () => {
    menuOpen.value = !menuOpen.value;
  };

  return { menuOpen, toggle };
};
