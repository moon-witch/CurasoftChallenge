<script setup lang="ts">
import { inject, ref, watch } from "vue";

const emit = defineEmits(["toggle"]);
const menuComposable = inject<any>("menuComposable");

const menuToggle = ref();
const menuOpen = ref(false);
const handleToggle = () => {
  menuOpen.value = !menuOpen.value;
  menuToggle.value.setAttribute(
    "aria-pressed",
    !menuToggle.value.matches("[aria-pressed=true]"),
  );
  menuToggle.value.classList.toggle("pressed");
  emit("toggle", menuOpen.value);
};

watch(menuComposable.menuOpen, (newValue) => {
  if (newValue !== menuOpen.value) {
    menuOpen.value = newValue;
    menuToggle.value.setAttribute("aria-pressed", newValue.toString());
    menuToggle.value.classList.toggle("pressed");
  }
});
</script>

<template>
  <button ref="menuToggle" class="menu-button" @click="handleToggle">
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <rect width="18" height="1.5" fill="red" ry="0.75" x="3" y="6.25" />
      <rect width="18" height="1.5" fill="red" ry="0.75" x="3" y="11.25" />
      <rect width="18" height="1.5" fill="red" ry="0.75" x="3" y="16.25" />
    </svg>
  </button>
</template>

<style lang="scss" scoped>
.menu-button {
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
}

button rect {
  transform-box: fill-box;
  transform-origin: 50% 50%;
  fill: hsl(0 0% 98%);
}
.pressed rect {
  transform-box: unset;
}
[aria-pressed="true"] rect {
  transition: rotate 0.2s 0.3s;
}
rect {
  transition:
    rotate 0.2s 0s,
    translate 0.2s 0.2s;
}

[aria-pressed="true"] rect:nth-of-type(1) {
  translate: 15% 15%;
  rotate: -45deg;
}
[aria-pressed="true"] rect:nth-of-type(2) {
  rotate: 45deg;
}
[aria-pressed="true"] rect:nth-of-type(3) {
  translate: 0 -333%;
  rotate: 45deg;
}
[aria-pressed="true"] svg {
  rotate: 90deg;
  transition: rotate 1s 0.4s;
}
</style>
