<template>
  <div>
    <MyHeader :esta_logado="true"/>
    <PrimeiroComponente />
    <p>O dado do app é {{ testando }}</p>
    <LifeCycle/>
    <PrimeiraPessoa />
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle from './components/LifeCycle.vue'
  import PrimeiraPessoa from './components/Pessoa.vue'
  import MyHeader from './components/MyHeader.vue'

  export default {
    name: 'App',
    components: {
    PrimeiroComponente,
    LifeCycle,
    PrimeiraPessoa,
    MyHeader
},
    data() {
      return {
        testando: "teste"
      }
    }
  }
</script>

<style>
  body {
    background-color: #333;
    color: #fff;
  }

  a {
    color: rgb(0, 153, 255);
  }
</style>