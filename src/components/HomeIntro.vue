<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-fluid">
    <div class="intro">
      <!-- 1.hot -->
      <div class="hot">
        <div class="top d-flex justify-content-between">
          <h2 class="text-light m-0">熱門虛擬貨幣</h2>
          <router-link :to="{name: 'market'}" class="more">查看更多&ensp;<i class="bi bi-arrow-right"></i></router-link>
        </div>
        <div class="crypto-list mt-5">
          <table class="table table-borderless mt-2 p-3">
            <thead class="thead">
              <tr>
                <th class="catecory col-6 col-md-4 text-start">幣種</th>
                <th class="last-price col-3 col-md-3 text-start">最新價</th>
                <th class="change col-3 col-md-2 text-center">24h漲跌</th>
                <th class="market-cap col-md-3 text-end dnone">市值</th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr v-for="i in topTenMC" :key="i.c" class="text-light">
                <td class="title col-6 col-md-4 d-flex">
                  <div><img :src="`//logo.chainbit.xyz/${i.b.toLowerCase()}`" class="logo" alt=""></div>
                  <div class="mx-2">{{i.an}}</div>
                  <div class="">{{i.b}}</div>
                </td>
                <td class="last-price col-3 col-md-3 text-start">${{i.c}}</td>
                <td class="change col-3 col-md-2 text-center" :class="{'text-danger':i.percentChange<0, 'text-success':i.percentChange>0}">{{i.percentChange}}%</td>
                <td class="market-cap col-md-3 text-end dnone">${{$filters.currency(i.totalMC / 1000000)}}M</td>
              </tr>
            </tbody>
            </table>
        </div>
        <div class="bottom ">
          <h4 class="text-light mt-4 mb-3">馬上開始進行交易吧！</h4>
          <button class="btn btn-warning px-3" type="submit">立即開始</button>
        </div>
      </div>
      <!-- 2.portfolio -->
      <div class="portfolio">
        <div class="row">
          <div class="col-lg-7">
            <h2 class="text-light">建立您的投資組合</h2>
            <ul class="mt-5">
              <li class="d-flex my-4">
                <div class="i-con">
                  <img src="https://ppt.cc/fTvWnx@.png" class="img-fluid" alt="">
                </div>
                <div class="ms-3 align-self-center">
                  <h5 class="m-0 text-light">儲值資金到您的帳戶</h5>
                  <p class="m-0">透過各種付款方式儲值資金，儲值資金到您的帳戶以開始交易加密貨幣。</p>
                </div>
              </li>
              <li class="d-flex my-4">
                <div class="i-con">
                  <img src="https://ppt.cc/f22ajx@.png" class="img-fluid" alt="">
                </div>
                <div class="ms-3 align-self-center">
                  <h5 class="m-0 text-light">進行身份驗證</h5>
                  <p class="m-0">我們將強制進行兩步驟的身份驗證之程序，以確保您的帳戶與交易的安全。</p>
                </div>
              </li>
              <li class="d-flex my-4">
                <div class="i-con">
                  <img src="https://ppt.cc/fNTCvx@.png" class="img-fluid" alt="">
                </div>
                <div class="ms-3 align-self-center">
                  <h5 class="m-0 text-light">開始交易</h5>
                  <p class="m-0">您可以開始了交易此平台上的虛擬貨幣，並探索幣安能夠提供哪些服務。</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-lg-5 image">
            <img src="https://ppt.cc/fPfk6x@.png" class="img-fluid px-5" alt="">
          </div>
        </div>
        <button class="btn btn-warning" type="submit">立即開始</button>
      </div>
      <!-- 3.explore -->
      <div class="explore">
        <h2 class="text-light m-0">一起探索無限可能</h2>
        <div class="explore-card row mt-5">
          <div class="col-lg-4">
            <div class="card py-2 mb-3">
              <img src="https://ppt.cc/fIouAx@.png" class="card-img-top img-fluid p-5" alt="...">
              <div class="card-body text-light" data-aos="fade-up">
                <h5 class="card-title">理財服務</h5>
                <p class="card-text">利用虛擬貨幣來賺取額外資金.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card py-2 mb-3">
              <div class="card-body text-light" data-aos="fade-up">
                <h5 class="card-title">行動支付</h5>
                <p class="card-text">您可以用虛擬貨幣來進行支付或收款等行為。</p>
              </div>
              <img src="https://ppt.cc/fWWdgx@.png" class="card-img-bottom img-fluid p-5" alt="...">
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card py-2 mb-3">
              <img src="https://ppt.cc/fJTy4x@.png" class="card-img-top img-fluid p-5" alt="...">
              <div class="card-body text-light" data-aos="fade-up">
                <h5 class="card-title">NFT 的世界</h5>
                <p class="card-text">使用NFT開啟神秘禮包或代幣等等.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 4.download -->
      <div class="download">
        <div class="top d-flex justify-content-between">
          <h2 class="text-light m-0">隨時進行交易</h2>
          <!-- <a href="" class="more">更多下載選項&ensp;<i class="bi bi-arrow-right"></i></a> -->
        </div>
        <div class="row mt-5">
          <div class="col-lg-6 mb-5 text-center">
            <img src="https://ppt.cc/fj483x@.png" class="img-fluid" alt="">
          </div>
          <div class="download-area col-lg-6">
            <div class="QR-code w-75 d-flex align-item-center p-2 mx-auto">
              <img src="https://ppt.cc/fRo98x@.png" alt="">
              <div class="align-self-center ms-4">
                <div class="text-light fw-lighter">掃描下載</div>
                <div class="text-light fw-bold">iOS & Android</div>
              </div>
            </div>
            <div class="download-option">
              <ul class="d-flex flex-wrap px-5 mt-4">
                <li class="w-50 px-4"><a class="text-light d-flex flex-column align-items-center p-3" href=""><i class="fs-4 bi bi-apple"></i><span>App Store</span></a></li>
                <li class="w-50 px-4"><a class="text-light d-flex flex-column align-items-center p-3" href=""><i class="fs-4 bi bi-google-play"></i><span>Google Play</span></a></li>
                <li class="w-50 px-4"><a class="text-light d-flex flex-column align-items-center p-3" href=""><i class="fs-4 bi bi-command"></i><span>MacOS</span></a></li>
                <li class="w-50 px-4"><a class="text-light d-flex flex-column align-items-center p-3" href=""><i class="fs-4 bi bi-windows"></i><span>Windows</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 5.help -->
      <div class="help">
        <h2 class="text-light m-0">尋求幫助</h2>
        <div class="help-option">
          <ul class="d-flex mt-5">
            <li class="d-flex my-4">
              <div class="image">
                <img src="https://ppt.cc/fbN6Ux@.png" class="img-fluid" alt="">
              </div>
              <div>
                <h5 class="text-light">線上客服</h5>
                <p>我們為您提供全天線上客服支援。</p>
                <a href="" class="more">了解更多</a>
              </div>
            </li>
            <li class="d-flex my-4">
              <div class="image">
                <img src="https://ppt.cc/fnEaUx@.png" class="img-fluid" alt="">
              </div>
              <div>
                <h5 class="text-light">常見問題</h5>
                <p>查找常見問題，獲得解決方案。</p>
                <a href="" class="more">了解更多</a>
              </div>
            </li>
            <li class="d-flex my-4">
              <div class="image">
                <img src="https://ppt.cc/fLyoJx@.png" class="img-fluid" alt="">
              </div>
              <div>
                <h5 class="text-light">社群平台</h5>
                <p>隨時了解最新的動態消息。</p>
                <a href="" class="more">了解更多</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="intro-end text-center">
      <h1 class="text-light">今天就開始賺取收益吧！</h1>
      <button class="btn btn-warning mt-5 px-5" type="submit">立即開始</button>
    </div>
  </div>
</template>

<script>
import cryptoStore from '@/stores/cryptoStore'
import { storeToRefs } from 'pinia'
import statusStore from '@/stores/statusStore'

// import { onMounted } from 'vue'
export default {
  setup () {
    // isLoading
    const status = statusStore()
    const { isLoading } = storeToRefs(status)
    const cryptoData = cryptoStore()
    const { topTenMC } = storeToRefs(cryptoData)
    const { getData } = cryptoData
    cryptoData.getData()
    return {
      isLoading, topTenMC, getData
    }
  }
}
</script>

<style scoped lang="scss" src="@/assets/scss/front-end/HomeIntro.scss">

</style>
