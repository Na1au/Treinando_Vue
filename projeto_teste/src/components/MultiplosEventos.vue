<template>
    <div>
        <button @click="primeiro($event), segundo($event), terceiro($event)">Ativar multiplos eventos</button>
        <p>{{ multiplos_eventos }}</p>
    </div>
</template>

<script>
    export default {
        name: 'MultiplosEventos',
        data() {
            return {
                multiplos_eventos: ''
            }
        },
        methods: {
            primeiro() {
                this.multiplos_eventos = 'Primeiro evento ativado'
            },
            segundo() {
                setTimeout(() => this.multiplos_eventos = "Segundo evento!", 500)
            },
            terceiro() {
                setTimeout(() => this.multiplos_eventos = '', 1000)
            }
        }
    }
</script>

<style scoped>
    div {
        margin: 100px;
    }
</style>