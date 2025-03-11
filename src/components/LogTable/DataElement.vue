<script setup lang="ts">
import InfoIcon from "@/assets/icons/circle-info-solid.svg"
import WarningIcon from "@/assets/icons/triangle-exclamation-solid.svg"
import ErrorIcon from "@/assets/icons/circle-xmark-solid.svg"
import { computed } from "vue";

const props = defineProps({
  type: String,
  message: String,
  employee: String,
  timestamp: String
})

function calculateTimeDifference(timestamp: string): string {
  const now = new Date();
  const past = new Date(timestamp);
  const secondsPast = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (secondsPast < 60) {
    return `${secondsPast} second${secondsPast !== 1 ? 's' : ''} ago`;
  }
  if (secondsPast < 3600) {
    const minutes = Math.floor(secondsPast / 60);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  }
  if (secondsPast < 86400) {
    const hours = Math.floor(secondsPast / 3600);
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  }
  if (secondsPast < 2592000) {
    const days = Math.floor(secondsPast / 86400);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }
  if (secondsPast < 31104000) {
    const months = Math.floor(secondsPast / 2592000);
    return `${months} month${months !== 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(secondsPast / 31104000);
    return `${years} year${years !== 1 ? 's' : ''} ago`;
  }
}

const relativeTime = computed(() => { return calculateTimeDifference(props.timestamp ?? '')})
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
        {{relativeTime}} von {{ employee}}
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