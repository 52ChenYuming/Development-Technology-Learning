<template>
<a href="" @click.prevent="onclick">
  <slot></slot>
</a>
</template>

<script>
  props: {
    to: String
  },
  methods: {
    onclick() {
      window.location.hash = '#' + this.to
    }
  }
</script>