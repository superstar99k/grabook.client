<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button :loading="props.loading" :disabled="props.loading" type="button">
    <span
      v-if="props.loading"
      class="spinner-border spinner-border-sm me-1"
      role="status"
      aria-hidden="true"
    ></span>
    <slot></slot>
  </button>
</template>
