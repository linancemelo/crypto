import { defineStore } from 'pinia'

export default defineStore('statusStore', {
  state: () => ({
    isLoading: false,
    messages: []
  }),
  actions: {
    pushMessage (data) {
      const { title, style, content } = data
      this.messages.push({ title, style, content })
      setTimeout(() => {
        this.messages.shift()
      }, 3500)
    }
  }
})
