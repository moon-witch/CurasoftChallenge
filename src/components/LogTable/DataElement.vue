<script setup lang="ts">
import InfoIcon from "@/assets/icons/circle-info-solid.svg"
import WarningIcon from "@/assets/icons/triangle-exclamation-solid.svg"
import ErrorIcon from "@/assets/icons/circle-xmark-solid.svg"

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
      <InfoIcon v-if="type === 'log'" class="icon" :style="{ fill: '#888888'}"/>
      <WarningIcon v-if="type === 'warning'" class="icon" :style="{ fill: '#888888'}" />
      <ErrorIcon v-if="type === 'error'" class="icon" :style="{ fill: '#888888'}" />
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
  }

  .stamp {
    opacity: 0.75;
  }
}
</style>