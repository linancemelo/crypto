<template>
  <Navbar></Navbar>
  <div class="market">
    <div class="container-fluid px-5">
      <nav class="pt-4" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">主頁</a></li>
          <li class="breadcrumb-item active" aria-current="page">加密貨幣</li>
        </ol>
      </nav>
      <div class="top-nav pt-1 pb-4 d-flex justify-content-between align-items-center">
        <div class="category">
          <router-link :to="{name: 'all'}" class="btn">所有加密貨幣</router-link>
          <router-link :to="{name: 'favorite'}" class="btn"><i class="bi bi-star-fill"></i> 我的最愛</router-link>
        </div>
        <div class="search py-2">
          <i class="bi bi-search"></i>
          <input type="search" placeholder="搜尋幣種名稱" v-model="searchTxt">
        </div>
      </div>
      <!-- Main Router-view -->
      <router-view></router-view>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { ref, provide } from 'vue'
export default {
  components: { Navbar, Footer },
  setup () {
    const searchTxt = ref('')
    provide('searchTxt', searchTxt)
    return {
      searchTxt
    }
  }
}
</script>

<style scoped lang="scss" src="@/assets/scss/front-end/Market.scss">

</style>
