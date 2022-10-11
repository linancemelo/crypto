<template>
  <Loading :active="isLoading"></Loading>
  <div class="cryptoinfo">
    <div class="container-fluid">
      <nav class="py-3" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link :to="{name: 'home'}">主頁</router-link></li>
          <li class="breadcrumb-item"><router-link :to="{name: 'all'}">所有加密貨幣</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{coin}}</li>
        </ol>
      </nav>
      <div class="main row">
        <div class="chart col-lg-8">
          <div class="title text-light d-flex">
            <img :src="`//logo.chainbit.xyz/${coin.toLowerCase()}`" class="img-fluid me-1" alt="">
            <h2>{{cryptoInfo.an}}<span>({{coin}})</span></h2>
          </div>
          <div class="price">
            <span>${{dataLists.close}}</span>
            <span style="color: #0ecb81" v-if="percentChg>0">+{{percentChg.toFixed(2)}}%</span>
            <span style="color: #f6465d" v-else-if="percentChg<0">{{percentChg.toFixed(2)}}%</span>
            <span v-else>{{percentChg.toFixed(2)}}%</span>
            <span>(1d)</span>
          </div>
          <KlineChart @push-data="getTodayData"></KlineChart>
        </div>

        <div class="cal col-lg-4">
          <div class="title">
            <h4>{{coin}} 價格計算機</h4>
            <div class="calculator">
              <p class="text-light">購買</p>
              <div class="count">
                <input type="number" placeholder="0.00" min="0" v-model="count">
                <span><img :src="`//logo.chainbit.xyz/${coin.toLowerCase()}`" class="img-fluid me-1" alt="">{{coin}}</span>
              </div>
            </div>
            <div class="sum">
                <span>價格</span>
                <span>USDT $ {{(count * dataLists.close).toFixed(2)}}</span>
              </div>
          </div>
          <p class="mt-4 mb-0 text-secondary" style="font-size: 0.8rem"><i class="bi bi-coin me-1"></i>此交易尚未計入任何手續費及交易費。</p>
          <p class="mt-1 text-secondary" style="font-size: 0.8rem"><i class="bi bi-coin me-1"></i>使用BNB支付可享有5%回饋。</p>
          <button class="btn" @click.prevent="sendCount(coin, count, cryptoInfo.an)">購買{{coin}}</button>
        </div>
      </div>
      <div class="introduction row">
        <div class="about col-lg-8 text-light">
          <h2>關於 {{cryptoInfo.an}} ({{coin}})</h2>
          <p>Bitcoin is a decentralized digital currency that enables instant payments to anyone, anywhere in the world. Bitcoin uses peer-to-peer technology to operate with no central authority: transaction management and money issuance are carried out collectively by the network.</p>
        </div>
        <div class="market col-lg-4 text-light">
          <h2>市場資訊</h2>
          <div class="stats">
            <div class="d-flex justify-content-between mb-2"><span>排名</span><span>#{{cryptoInfo.ranking}}</span></div>
            <div class="d-flex justify-content-between mb-2"><span>市值</span><span>{{$filters.currency(cryptoInfo.totalMC / 1000000)}}M</span></div>
            <div class="d-flex justify-content-between mb-2"><span>24h交易量</span><span>{{$filters.currency(cryptoInfo.qv / 1000000)}}M</span></div>
            <div class="d-flex justify-content-between mb-2"><span>幣別</span><span>USDT(TetherUS)</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ToastContainerVue></ToastContainerVue>
</template>
<script>
import KlineChart from '@/components/KlineChart.vue'
import ToastContainerVue from './ToastContainer.vue'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import statusStore from '@/stores/statusStore'
import cryptoStore from '@/stores/cryptoStore'
import walletStore from '@/stores/walletStore'
export default {
  components: {
    KlineChart,
    ToastContainerVue
  },
  setup () {
    // isLoading
    const status = statusStore()
    const { isLoading } = storeToRefs(status)
    // 取出24小時變化及相關數據
    const cryptoData = cryptoStore()
    const { sortData } = storeToRefs(cryptoData)
    const { getData } = cryptoData
    const cryptoInfo = ref([])
    cryptoData.getData()
    setTimeout(() => {
      cryptoInfo.value = [...sortData.value].find((i) => i.b === coin)
    }, 500)
    // 取出路由id
    const route = useRoute()
    const coin = route.params.id
    // 取出子組件發送過來的數據(一天的變化)
    const dataLists = ref([])
    const percentChg = ref(0)
    function getTodayData (list) {
      dataLists.value = list.value[364]
      percentChg.value = (list.value[364].close - list.value[363].close) * 100 / list.value[363].close
    }
    // 計算要買數量的總價格
    const count = ref(0)
    const totalPrice = ref(0)
    // 購買完傳送數量
    const wallet = walletStore()
    const { sendCount } = wallet
    // Return
    return {
      isLoading,
      coin,
      dataLists,
      percentChg,
      getTodayData,
      count,
      totalPrice,
      cryptoData,
      cryptoInfo,
      sortData,
      getData,
      sendCount
    }
  }
}
</script>

<style scoped lang="scss" src="@/assets/scss/front-end/CryptoInfo.scss">

</style>
