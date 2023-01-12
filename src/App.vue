<template>
  <div>
    <mcv-topbar />
    <router-view></router-view>
  </div>
</template>

<script>
import McvTopbar from '@/components/Topbar.vue'
import {actionTypes} from '@/store/modules/auth'

export default {
  name: 'App',
  components: {
    McvTopbar
  },
  mounted() {
    console.log('hello')
    this.$store.dispatch(actionTypes.getCurrentUser)
  }
}
</script>
