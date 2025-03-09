<script setup lang="ts">
defineProps({
  type: String,
  message: String,
  employee: String,
  timestamp: String
})
</script>

<template>
  <section class="element">
    <div class="type">
      <img v-if="type === 'log'" src="/icons/circle-info-solid.svg" alt="log symbol" class="icon" />
      <img v-if="type === 'warning'" src="/icons/triangle-exclamation-solid.svg" alt="warning symbol" class="icon" />
      <img v-if="type === 'error'" src="/icons/circle-xmark-solid.svg" alt="error symbol" class="icon" />
    </div>
    <div class="info">
      <div class="message">
        {{ message}}
      </div>
      <div class="stamp">
        {{timestamp}} von {{ employee}}
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.element {
  border-bottom: 1px solid rgba(208, 208, 208, 0.37);
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;

  .icon {
    width: 20px;
    padding: 1rem;
    filter: invert(51%) sepia(0%) saturate(813%) hue-rotate(237deg) brightness(105%) contrast(91%);
  }

  .stamp {
    opacity: 0.75;
  }
}
</style>