<template>
  <div id="trade" ref="chartContainer" style="width: 90%; height: 25rem"></div>
</template>

<script>
import { init, klineChart } from 'klinecharts'
import klineStore from '@/stores/klineStore'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
export default {
  setup (props, { emit }) {
    const route = useRoute()
    const coin = ref(route.params.id)
    const klineData = klineStore()
    const { dataList, option } = storeToRefs(klineData)
    const { getKlineData } = klineData
    const kLineCharts = ref(klineChart)
    klineData.getKlineData(coin.value)
    setTimeout(() => {
      kLineCharts.value = init('trade', option.value)
      kLineCharts.value.createTechnicalIndicator('VOL', true)
      kLineCharts.value.applyNewData(dataList.value)
      pushData()
    }, 500)
    function pushData () {
      emit('push-data', dataList, coin)
    }
    return {
      coin,
      klineData,
      dataList,
      option,
      getKlineData,
      kLineCharts,
      pushData
    }
  }
}
</script>

<style>

</style>
