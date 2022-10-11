import { defineStore } from 'pinia'
import axios from 'axios'
import statusStore from './statusStore'
const status = statusStore()

export default defineStore('crypto-datalist', {
  state: () => ({
    dataList: []
  }),
  getters: {
    // 篩選出USDT幣
    cryptoUSDT: (state) => {
      const tempList = state.dataList.filter((i) => i.s.slice(-4) === 'USDT')
      tempList.forEach((i) => {
        // 計算並寫入總市值
        const totalMC = i.cs * i.c
        i.totalMC = totalMC
        // 計算並寫入價格變動百分比
        const percentChange = ((i.c - i.o) * 100 / i.o).toFixed(2)
        i.percentChange = percentChange
      })
      return tempList
    },
    // 以市值排序取出前200大
    sortData () {
      const tempList = [...this.cryptoUSDT]
        .sort((a, b) => { return b.totalMC - a.totalMC })
        .slice(0, 100)
      tempList.forEach((i, index) => {
        i.ranking = index + 1
      })
      return tempList
    },
    // 正宗binance API 有跨域問題
    // tempList.forEach((i) => {
    //   const chg24Url = `api/v3/ticker/24hr?symbol=${i.s}`
    //   axios.get(chg24Url).then((res) => {
    //     let percentChange = 0
    //     percentChange = Number(res.data.priceChangePercent)
    //     i.percentChange = percentChange.toFixed(2)
    //   })
    // })
    // 前十大市值（放在首頁的）
    topTenMC () {
      return this.sortData.slice(0, 10)
    }
  },
  actions: {
    getData () {
      status.isLoading = true
      const allDataUrl = 'https://www.binance.com/exchange-api/v2/public/asset-service/product/get-products'
      axios.get(allDataUrl).then((res) => {
        // dataList用來存放所有數據
        this.dataList = res.data.data
        status.isLoading = false
      })
    }
  }
})
