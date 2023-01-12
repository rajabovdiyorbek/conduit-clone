<template>
  <div>Feed {{ apiUrl }}</div>
</template>

<script>
export default {
  name: 'McvFeed',
  props: {
    apiUrl: {
      type: String,
      require: true
    }
  }
}
</script>
