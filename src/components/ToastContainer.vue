<template>
  <div class="toast-container">
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg"></Toast>
  </div>
</template>

<script>
import Toast from './Toast.vue'
import statusStore from '@/stores/statusStore'
import { storeToRefs } from 'pinia'
export default {
  components: { Toast },
  setup () {
    const status = statusStore()
    const { messages } = storeToRefs(status)
    return {
      messages
    }
  }
}
</script>

<style scoped lang="scss">
.toast-container{
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1001;
}
</style>
