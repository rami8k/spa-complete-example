<script>
export default {
  props: {
    text: { type: String, required: false },
  }
}
</script>

<template>
  <div>
    {{ text }}
    <slot name="label"/>
  </div>
</template>
