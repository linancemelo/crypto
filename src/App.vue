<template>
  <router-view/>
</template>
<script>
</script>
<style lang="scss">
$main: #181a21;
$yellow: #f7bc00;
$second: #1d232a;
@import "../node_modules/bootstrap/scss/bootstrap";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
a{
  text-decoration: none;
  color: #000;
}
ul{
  padding: 0;
  li{
    list-style: none;
  }
}
</style>
