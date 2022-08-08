<template>
    <div>
        <img :src="avatar" alt="Minha imagem" height="200" width="200"> <!-- sintaxe resumida de v-bind: <...> -->
    <MudarImagem @mudar-imagem="mudarImagem" />
    </div>
</template>

<script>
    import MudarImagem from './MudarImagem.vue'
    export default {
        name: 'MyPicture',
        components: {
            MudarImagem
        },
        data() {
            return {
                avatar: '/img/logo.jpeg',
                descriçao: 'Ana Silva'
            }
        },
        methods: {
            mudarImagem() {
                this.avatar = "img/user.jpg"
            }
        }
    }
</script>