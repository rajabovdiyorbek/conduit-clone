<template>
  <div>
    <mcv-topbar />
    <router-view></router-view>
  </div>
</template>

<script>
import McvTopbar from '@/components/Topbar.vue'

export default {
  name: 'App',
  components: {
    McvTopbar
  }
}
</script>
