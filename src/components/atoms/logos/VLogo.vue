<script setup>
const props = defineProps({
  white: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="logo-wrapper px-2" :class="props.white ? 'white' : ''">
    <a href="/">
      <img
        v-if="props.white"
        src="/images/common/vlogo-white.svg"
        alt="vlogo"
      />
      <img v-else src="/images/common/vlogo.svg" alt="vlogo" />
    </a>
  </div>
</template>

<style lang="scss">
.logo-wrapper {
  max-width: 220px;
  margin: 0 auto;

  &.white {
    max-width: 250px;
  }
}
</style>
