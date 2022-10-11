<template>
  <!-- footer -->
  <footer class="footer">
    <div class="container py-3">
      <div class="d-flex justify-content-between text-light">
        <ul class="d-md-flex p-0 m-0 dnone">
          <li class="nav-item me-3">
            <router-link to="/" class="nav-link pt-2">回首頁</router-link>
          </li>
          <li class="nav-item me-3">
            <router-link to="/market" class="nav-link pt-2"
              >所有產品</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link pt-2"
              >關於我們</router-link
            >
          </li>
        </ul>
        <ul class="d-flex p-0 m-0 icon-ul">
          <li class="nav-item mx-2">
            <a href="https://www.facebook.com/hexschool/" class="nav-link pt-1">
              <i class="bi bi-facebook"></i>
            </a>
          </li>
          <li class="nav-item mx-2">
            <a href="https://www.instagram.com/" class="nav-link pt-1">
              <i class="bi bi-instagram"></i>
            </a>
          </li>
          <li class="nav-item mx-2">
            <a href="https://github.com/linancemelo" class="nav-link pt-1">
              <i class="bi bi-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="d-flex justify-content-between text-light fs-8 mt-2">
        <p class="mb-md-2 copyright">
          Copyright © 2022 LINANCE INC. Taipei Taiwan
        </p>
        <p class="mb-md-2 dnone">本網站僅提供個人作品使用，無商業用途。</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss" src="@/assets/scss/front-end/common/Footer.scss">

</style>
