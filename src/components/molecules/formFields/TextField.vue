<script setup>
import { ref } from 'vue'
import { Field, ErrorMessage } from 'vee-validate'
import {
  createEmits,
  createInnerValue,
  createProps,
  errorCss,
} from '@/components/molecules/formFields/baseFormField'

const props = defineProps({
  ...createProps(),
  type: {
    type: String,
    default: 'text',
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
})

const emit = defineEmits(createEmits().concat(['focus', 'blur']))

const innerValue = createInnerValue(props, emit)
const element = ref()
const focus = () => element.value.querySelector('input').focus()
const blur = () => element.value.querySelector('input').blur()

defineExpose({ focus, blur })
</script>

<template>
  <div :ref="element">
    <label v-if="showLabel && label" :for="id" :class="[labelClass]">{{
      label
    }}</label>
    <div class="prefix">
      <Field
        :id="id"
        v-model="innerValue"
        :type="type"
        :name="name"
        :label="validName || label"
        class="form-control text-field fs-7"
        :class="[inputClass, errorCss(props, errors)].join(' ')"
        :rules="rules"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :standalone="props.standalone"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
      />
    </div>
    <ErrorMessage
      v-if="showErrorMessage"
      :name="name"
      class="text-danger fs-7"
      :class="[errorClass]"
    />
  </div>
</template>

<style lang="scss">
.text-field {
  padding: 15px;
  font-weight: 400;
  &::placeholder {
    color: #989898;
  }
}
</style>
