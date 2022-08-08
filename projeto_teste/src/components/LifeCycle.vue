<template>
    <h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
    export default {
        name: 'LifeCycle',
        data() {
            return {
                nome: 'Ainda não sei'
            }
        },
        created() {
            setTimeout(() => {
                this.nome = "Ana"
            }, 1000)
            this.lifeCycle()
        },
        mounted() {
            setTimeout(() => {
                this.nome = "Laura"
            }, 2000);
        },
        methods: {
            lifeCycle() {
                console.log('Executou');
            }
        }
    }
</script>