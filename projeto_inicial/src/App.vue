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

</style>
