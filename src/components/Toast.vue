<!-- eslint-disable vue/no-dupe-keys -->
<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
    <div class="toast-header">
      <i :class="`text-${msg.style}`" class="bi bi-chat-left-text-fill me-3 d-inline-block"></i>
      <strong class="me-auto">{{msg.title}}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      {{msg.content}}
    </div>
  </div>
</template>

<script>
import { onMounted, ref, toRefs } from 'vue'
// import Toast from 'bootstrap/js/dist/toast'
import Toast from '../../node_modules/bootstrap/js/dist/toast.js'
export default {
  props: {
    msg: {
      type: Object
    }
  },
  setup (props) {
    const { msg } = toRefs(props)
    const toast = ref(null)
    onMounted(() => {
      const showToast = new Toast(toast.value, {
        delay: 3000
      })
      showToast.show()
    })
    // onMounted(() => {
    //   const toastShow = new Toast(toast.value, {
    //     delay: 3000
    //   })
    //   toastShow.show()
    // })
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      msg,
      toast
    }
  }
}
// export default {
//   props: ['msg'],
//   setup (props) {
//     const { msg } = storeToRefs(props)
//     // const { style, title, content } = ref(msg)
//     const toast = ref(null)
//     onMounted(() => {
//       const toastShow = new Toast(toast.value, {
//         delay: 3000
//       })
//       toastShow.show()
//     })
//     return {
//       // eslint-disable-next-line vue/no-dupe-keys
//       msg,
//       // content,
//       // style,
//       // title,
//       toast
//     }
//   }
// }
</script>

<style>

</style>
