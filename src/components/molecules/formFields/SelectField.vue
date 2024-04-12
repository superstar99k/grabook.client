<script setup>
import { computed } from 'vue'
import { Field, ErrorMessage } from 'vee-validate'
import {
  createEmits,
  createInnerValue,
  createProps,
  errorCss,
} from '@/components/molecules/formFields/baseFormField'

const props = defineProps({
  ...createProps(),
  inputAttrs: {
    type: Object,
    default: () => ({}),
  },
  options: {
    type: Array,
    default: () => [],
  },
  showUnselected: {
    type: Boolean,
    default: true,
  },
  unselectedText: {
    type: String,
    default: '選択して下さい',
  },
  unselectedValue: {
    type: [Object, String, Number],
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([...createEmits()])

const innerOptions = computed(() =>
  props.options.map((option) =>
    typeof option === 'object' && option !== null
      ? option
      : { value: option, label: option }
  )
)

const innerValue = createInnerValue(props, emit)

defineExpose({
  blur,
})
</script>

<template>
  <div>
    <label v-if="showLabel && label" :for="id" :class="[labelClass]">{{
      label
    }}</label>
    <Field
      :id="id"
      v-model="innerValue"
      :name="name"
      :label="label"
      as="select"
      class="form-select fs-7"
      :class="[inputClass, errorCss(props, errors)].join(' ')"
      :rules="rules"
      :disabled="disabled"
      v-bind="inputAttrs"
      :required="required"
    >
      <option
        v-if="showUnselected"
        :value="unselectedValue"
        :disabled="required"
      >
        {{ unselectedText }}
      </option>
      <option
        v-for="(option, index) in innerOptions"
        :key="index"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </Field>
    <ErrorMessage v-if="showErrorMessage" :name="name" class="text-danger" />
  </div>
</template>

<style lang="scss" scoped>
select.form-select {
  padding: 15px;
  font-weight: 400;
  &::placeholder {
    color: #989898;
  }
}
</style>
