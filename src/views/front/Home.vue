<template>
  <Navbar></Navbar>
  <div class="container-fluid home pb-4">
    <div class="main-pic row">
      <div class="col-12 col-lg-6">
        <img src="https://ppt.cc/ffEbKx@.png" class="img-fluid p-5" alt="">
      </div>
      <div class="form col-12 col-lg-6 align-self-center">
        <h1 class="text-white" data-aos="fade-left" data-aos-duration="2000">在此平台交易和持有100種以上虛擬貨幣、追蹤市場價格變化</h1>
        <form class="d-flex mb-5">
          <input class="ipt form-control w-50 me-2 text-light" type="text" placeholder="電話號碼/電子郵件" aria-label="Search">
          <button class="btn btn-warning px-3" type="submit">立即開始</button>
        </form>
      </div>
    </div>
    <div class="main-char row text-light" data-aos="fade-up">
      <div class="col-6 col-lg-3 mb-4"><div class="d-flex flex-column"><h4 class="mb-0">500億美元</h4><span>交易所近一日交易量</span></div></div>
      <div class="col-6 col-lg-3 mb-4"><div class="d-flex flex-column"><h4 class="mb-0">100+</h4><span>上市的虛擬貨幣</span></div></div>
      <div class="col-6 col-lg-3 mb-4"><div class="d-flex flex-column"><h4 class="mb-0">&lt;0.05%</h4><span>平易近人的手續費</span></div></div>
      <div class="col-6 col-lg-3 mb-4"><div class="d-flex flex-column"><h4 class="mb-0">2000萬</h4><span>註冊用戶</span></div></div>
    </div>
  </div>
  <!--intro component-->
  <HomeIntro></HomeIntro>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import HomeIntro from '@/components/HomeIntro.vue'

export default {
  components: {
    Navbar,
    Footer,
    HomeIntro
  }
}
</script>

<style scoped lang="scss" src="@/assets/scss/front-end/Home.scss">

</style>
