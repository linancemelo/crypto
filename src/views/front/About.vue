<template>
  <Navbar></Navbar>
  <div class="welcome py-5 d-flex justify-content-center align-items-center">
    <div class="rocket">
      <img src="https://ppt.cc/fjNVVx@.png" class="img-fluid"  data-aos="zoom-in" alt="">
    </div>
    <div class="content text-light w-50 px-4">
      <h1>歡迎來到 <span>Linance</span></h1>
      <p class="m-0">At Linance, we believe that everyone should have the freedom to earn, hold, spend, share and give their money - no matter who you are or where you come from.</p>
    </div>
  </div>
  <div class="about">
    <div class="top">
      <h2 class="text-light mb-5" data-aos="fade-up">我們的創建理念</h2>
      <div class="area">
        <div class="image">
          <img src="https://ppt.cc/fSQWEx@.png" alt="" class="img-fluid">
        </div>
        <div class="content">
          <p>經過艱辛的努力，我們已是世界上頂尖的區塊鍊生態系，包括最大的數位資產交易所。我們的使命是為整個區塊鏈生態系統提供基礎設施服務，並能提供其他平台難以企及的完整金融產品線。</p>
          <router-link to="/" class="btn">深入了解</router-link>
        </div>
      </div>
    </div>
    <div class="middle">
      <h2 class="text-light mb-5" data-aos="fade-up">我們的創辦人</h2>
      <div class="area">
        <div class="image">
          <img src="https://ppt.cc/fa5JOx@.png" alt="" class="img-fluid">
          <h4 class="w-100 text-center text-light mt-3 mb-0">LeBron James</h4>
          <p class="w-100 text-center text-secondary" style="font-size: 0.8rem">執行長兼NBA球員</p>
        </div>
        <div class="content">
          <p>作為NBA聯盟現今第一人，Lebron James不僅賺進大合同，場外的事業版圖更是擴及各領域，包括娛樂圈、足球界、教育界，現在更是進軍金融界，為方便解決NBA的勞資關係、投資娛樂圈的資金控管，讓所有金錢流向更加透明化，使得交易越來越便捷，因此才有了此平台的產生。</p>
          <a href="https://www.nba.com/player/2544/lebron-james" class="btn">個人介紹</a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <h2 class="text-light mb-5" data-aos="fade-up">我們的工作模式</h2>
      <div class="area">
        <div class="image">
          <img src="https://ppt.cc/fWycLx@.png" alt="" class="img-fluid">
        </div>
        <div class="content">
          <p>我們給予員工自由做決策的權利、多元的福利制度，並以熱情與誠信為用戶服務。立即加入我們，並與世界上最勤奮、最有熱情的人一起工作吧！</p>
          <button class="btn">探索職缺</button>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: { Navbar, Footer }
}
</script>

<style scoped lang="scss" src="@/assets/scss/front-end/about.scss">

</style>
