<template>
    <div>
        <h1>Olá Vue!</h1>
        <Reutilizaçao />
        <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p>
        <Reutilizaçao />
        <MultiplosEventos />
        <Reutilizaçao />
    </div>
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue'
import Reutilizaçao from './MyReutilizaçao.vue'
export default {
    name: 'PrimeiroComponente',
    components: {
        MultiplosEventos,
        Reutilizaçao
    },
    data() {
        return {
            nome: "Ana",
            profissao: "Programadora"
        }
    }
}
</script>