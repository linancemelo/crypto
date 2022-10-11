<template>
  <Navbar></Navbar>
  <div>
    <div class="wallet">
      <div class="balance">
        <div class="info">
          <div class="img">
            <img src="https://ppt.cc/fwNSEx@.png" class="img-fluid" alt="">
          </div>
          <div class="name">Liang Melo</div>
        </div>
        <h4><i class="bi bi-eye-fill"></i>總資產估值</h4>
        <div class="money">
          <div class="money-value">{{covertToBtc}}BTC <span>
            <i class="bi bi-water"></i>
            ${{$filters.currency(currentValue)}}</span></div>
          <div class="option">
            <button class="btn">儲值</button>
            <button class="btn">提現</button>
            <button class="btn">轉帳</button>
          </div>
        </div>
      </div>
    </div>
    <div class="stock-container">
      <div class="stock">
        <h4>庫存明細</h4>
        <ul>
          <li v-for="(item, key) in currentStock" :key="key" @click.prevent="$router.push(`/trade/USDT_${item.title}`)">
            <div class="left">
              <div class="logo">
                <img :src="`//logo.chainbit.xyz/${item.abb.toLowerCase()}`" class="img-fluid" alt="">
              </div>
              <div class="title">
                <div class="main">{{item.title}}</div>
                <div class="sec">{{item.abb}}</div>
              </div>
            </div>
            <div class="right">
              <div class="main">{{item.count}}</div>
              <div class="sec">${{item.price}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import walletStore from '@/stores/walletStore'
import { storeToRefs } from 'pinia'
export default {
  components: { Navbar, Footer },
  setup () {
    const wallet = walletStore()
    const { stockList, currentStock, currentValue, covertToBtc } = storeToRefs(wallet)
    const { getCurrentValue } = wallet
    wallet.getCurrentValue()
    return {
      stockList,
      currentStock,
      getCurrentValue,
      currentValue,
      covertToBtc
    }
  }
}
</script>

<style scoped lang="scss" src="@/assets/scss/front-end/Wallet.scss">

</style>
