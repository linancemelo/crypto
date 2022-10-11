import axios from 'axios'
import { defineStore } from 'pinia'

export default defineStore('info-data', {
  state: () => {
    return {
      dataList: [],
      option: {
        // 網格線
        grid: {
          show: false
        },
        candle: {
          tooltip: {
            showRule: 'follow_cross',
            labels: ['', '開盤:', '收盤:', '最高:', '最低:', '成交量:'],
            text: {
              size: 12,
              color: '#838e9e',
              marginLeft: 0,
              marginRight: 6
            }
          }
        },
        xAxis: {
          tickText: {
            size: 10
          }
        },
        yAxis: {
          width: 50,
          axisLine: {
            color: 'gray'
          },
          tickText: {
            size: 10
          }
        },
        crosshair: {
          horizontal: {
            text: {
              borderSize: 0,
              backgroundColor: 'blue'
            }
          }
        }
      }
    }
  },
  actions: {
    getKlineData (coin) {
      this.dataList = []
      const baseUrl = 'https://api.binance.com/api/v3/'
      const query = `uiKlines?symbol=${coin}USDT&interval=1d`
      const url = baseUrl + query
      axios.get(url).then((res) => {
        const tempList = res.data.slice(135, 500)
        tempList.forEach((i) => {
          const data = {
            timestamp: i[0],
            open: Number(i[1]),
            high: Number(i[2]),
            low: Number(i[3]),
            close: Number(i[4]),
            volume: Number(i[5])
          }
          this.dataList.push(data)
        })
      })
    }
  }
})
