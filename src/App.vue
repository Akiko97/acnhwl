<template>
  <div id="app">
    <HomePage msg="我的 ACNH 愿望单"/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/kk">K.K.</router-link> |
      <router-link to="/fossil">Fossil</router-link>
    </div>
    <router-view/>
    <p>* 2020 Akiko *</p>
  </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue'
export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
@import "./fonts/font.css";
#app {
  font-family: PingFang;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
