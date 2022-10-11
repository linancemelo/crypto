import { defineStore } from 'pinia'
import statusStore from './statusStore'
const status = statusStore()

export default defineStore('like-dataList', {
  state: () => {
    return {
      likeList: JSON.parse(localStorage.getItem('like')) || [],
      likeId: JSON.parse(localStorage.getItem('id')) || []
    }
  },
  getters: {

  },
  actions: {
    toggleLike (product) {
      const favoriteIndex = this.likeList.findIndex((item) => item.b === product.b)
      if (favoriteIndex === -1) {
        // 如果沒資料就寫入
        this.likeList.push(product)
        this.likeId.push(product.b)
        status.pushMessage({
          style: 'success',
          title: '成功加入',
          content: `${product.b} 已加到我的最愛`
        })
      } else {
        this.likeList.splice(favoriteIndex, 1)
        this.likeId.splice(favoriteIndex, 1)
        status.pushMessage({
          style: 'danger',
          title: '成功移除',
          content: `${product.b} 已從我的最愛中移除`
        })
      }
      // 儲存收藏列表進去
      localStorage.setItem('like', JSON.stringify(this.likeList))
      localStorage.setItem('id', JSON.stringify(this.likeId))
      // 重新更新收藏列表資料
      this.likeList = JSON.parse(localStorage.getItem('like'))
      this.likeId = JSON.parse(localStorage.getItem('id'))
    }
  }
})
