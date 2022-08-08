<template>
    <div>
        <p>{{ compEmail }} - {{ email }}</p>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades</p>
        <p>Utilizo as seguintes tecnologias para back-end:</p>
        <ul>
            <li v-for="(technology, index) in backend_technologies" v-bind:key="index">{{ technology }}</li>
        </ul>
        <p>Utilizo as seguintes tecnologias para front-end:</p>
        <ul>
            <li v-for="technology in frontend_technologies" :key="technology.id"> {{ technology.language }} </li>
        </ul>
        <div>
            <button @click="showEmail">{{ textoBotao }}</button>
        </div>
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
        <p>Para acessar meu portfólio basta clicar <a v-bind:href="meu_link" target="_blank">aqui</a></p>
        <MyPicture/>
    </div>
</template>

<script>
import MyPicture from './MyPicture.vue'
    export default {
    name: "InfoPessoa",
    components: {
        MyPicture
    },
    props: {
        compEmail: String,
        esta_trabalhando: Boolean
    },
    data() {
        return {
            mostrar_email: false,
            email: "analaura-osilva@hotmail.com",
            meu_link: "https://github.com/Na1au",
            textoBotao: "Mostrar e-mail",
            backend_technologies: ['Java', 'Python', 'C++'], /* Array normal */
            frontend_technologies: [
                {id: 1, language: 'HTML'},
                {id: 2, language: 'CSS'},
                {id: 3, language: 'JavaScript'}
            ] /* Array de objetos */
        }
    },
    methods: {
        showEmail() {
            this.mostrar_email = !this.mostrar_email
            if(!this.mostrar_email) {
                this.textoBotao = 'Mostrar e-mail'
            } else {
                this.textoBotao = 'Esconder e-mail'
            }
        }
    }
}
</script>