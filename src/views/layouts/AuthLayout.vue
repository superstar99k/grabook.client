<script setup>
import * as roleType from '@/constants/roleType'

const props = defineProps({
  role: {
    type: String,
    default: 'user',
    validate(value) {
      return roleType.includes(value)
    },
  },
  route: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="auth-visual" :class="`${props.role} ${props.route}`"></div>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.auth-visual {
  position: fixed;
  z-index: -1;
  top: 0;
  bottom: 0;
  width: 100vw;
  min-height: 100%;
}

.wrapper {
  margin: 90px 0;
}

.user {
  background: linear-gradient(#26aae5, #f8166d);
}

.admin {
  background: #212121;
}

.company {
  background: #216ced;
}

.auth-login::before {
  position: fixed;
  content: '';
  width: 100vw;
  height: 100%;
  background: url(/images/visual/login.png);
  background-position-x: 50%;
}
</style>
