<template>
  <div>
    {{ lodash.random(20) }}
    {{ _.random(20) }}
    {{ custom.random(20) }}
    {{ test() }}
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      return this._.random(20)
    },
  }
}
</script>