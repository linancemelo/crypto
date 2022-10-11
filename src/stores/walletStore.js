import { defineStore } from 'pinia'
import axios from 'axios'
import statusStore from './statusStore'
const status = statusStore()

export default defineStore('wallet-data', {
  state: () => {
    return {
      stockList: JSON.parse(localStorage.getItem('stock')) || [],
      dataList: []
    }
  },
  getters: {
    currentStock: (state) => {
      const filterList = state.dataList.filter(i => i.s.slice(-4) === 'USDT')
      const tempList = state.stockList.map(function (i) {
        const index = filterList.findIndex(j => j.b === i.abb)
        i.price = Number(filterList[index].c)
        return i
      })
      return tempList
    },
    currentValue () {
      const result = this.currentStock.reduce((total, current) => {
        // eslint-disable-next-line no-return-assign
        return total = total + current.price
      }, 0)
      return result
    },
    covertToBtc (state) {
      const btcPrice = Number(state.dataList.filter(i => i.s === 'BTCUSDT')[0].c)
      const btcValue = (this.currentValue / btcPrice).toFixed(10)
      return btcValue
    }
  },
  actions: {
    sendCount (coin, count, fullCoin) {
      if (count > 0) {
        status.isLoading = true
        const stockIndex = this.stockList.findIndex((item) => item.abb === coin)
        console.log(stockIndex)
        const obj = {
          title: fullCoin,
          abb: coin,
          count: count,
          price: 0
        }
        if (stockIndex === -1) {
          // 沒資料就寫入
          this.stockList.push(obj)
        } else {
          // 有資料的話做數量加總
          this.stockList[stockIndex].count += obj.count
        }
        localStorage.setItem('stock', JSON.stringify(this.stockList))
        this.stockList = JSON.parse(localStorage.getItem('stock'))
        setTimeout(() => {
          status.isLoading = false
          status.pushMessage({
            style: 'success',
            title: '購買成功',
            content: `已購買${fullCoin}(${coin}) ${count}顆 `
          })
        }, 500)
      }
    },
    getCurrentValue () {
      const allDataUrl = 'https://www.binance.com/exchange-api/v2/public/asset-service/product/get-products'
      axios.get(allDataUrl).then(res => {
        this.dataList = res.data.data
      })
    }
  }
})
