<template>
  <NavBar :logo="logo_src" :alt="app_name"/>
  <router-view/>
  <MyFooter/>
</template>

<script>
  import NavBar from './components/NavBar.vue';
  import MyFooter from './components/MyFooter.vue';

  export default {
    components:  {
      NavBar,
      MyFooter
    },
    data() {
      return {
        logo_src: "/img/logo.png",
        app_name: "Make your burguer"
      }
    }
  }
</script>

<style>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

.main-container {
  margin: 50px;
  min-height: 250px;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
  
}
</style>