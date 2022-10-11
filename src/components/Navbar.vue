<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link :to="{name: 'home'}" class="navbar-brand ms-1 fs-6"><i class="bi bi-currency-exchange"></i>&ensp;LINANCE</router-link>
      <button class="menu-btn btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <i class="bi bi-list"></i>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><i class="bi bi-currency-exchange"></i>&ensp;LINANCE</h5>
          <button type="button" class="btn fw-bold text-white" data-bs-dismiss="offcanvas" aria-label="Close"><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1">
            <li class="nav-item">
              <router-link :to="{name: 'market'}" class="nav-link active" aria-current="page">
                <i class="bi bi-bank2 align-self-center me-2"></i>市場</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'wallet'}" class="nav-link" href="#">
                <i class="bi bi-wallet-fill align-self-center me-2"></i>錢包</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="bi bi-bar-chart-fill align-self-center me-2"></i>股市</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="bi bi-currency-dollar align-self-center me-2"></i>外匯</a>
            </li>
            <li class="nav-item dropdown manage-money">
              <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-cash-coin align-self-center me-2"></i>理財
              </a>
              <ul class="dropdown-menu border-0" aria-labelledby="offcanvasNavbarDropdown">
                <li><a class="dropdown-item" href="#">流動性挖礦</a></li>
                <li><a class="dropdown-item" href="#">雙幣理財</a></li>
                <li><a class="dropdown-item" href="#">幣安礦池</a></li>
                <li><a class="dropdown-item" href="#">ETH 2.0</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about"><i class="bi bi-chat-dots-fill align-self-center me-2"></i>關於我們</router-link>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss" src="@/assets/scss/front-end/common/Navbar.scss">

</style>
