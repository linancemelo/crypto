import { defineStore, storeToRefs } from 'pinia'
import cryptoStore from '@/stores/cryptoStore'
const cryptoData = cryptoStore()
const { sortData } = storeToRefs(cryptoData)
export default defineStore('pagination-data', {
  state: () => {
    return {
      pagination: {
        totalPages: 1,
        currentPage: 1,
        pageSize: 20
      },
      currentPageData: []
    }
  },
  getters: {

  },
  actions: {
    getPagination () {
      // 產生總頁數
      setTimeout(() => {
        this.pagination.totalPages = Math.ceil(sortData.value.length / this.pagination.pageSize)
        this.pagination.totalPages = this.pagination.totalPages === 0 ? 1 : this.pagination.totalPages
      }, 1000)
    },
    updatePage (page = 1) {
      this.pagination.currentPage = page
      // 產生每一頁的數據
      const start = (this.pagination.currentPage - 1) * this.pagination.pageSize
      const end = this.pagination.currentPage * this.pagination.pageSize
      setTimeout(() => {
        this.currentPageData = sortData.value.slice(start, end)
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }, 500)
    }
  }
})
