<template>
    <div>
        <h2>Meu formulário:</h2>
        <form action="" @submit="enviarFormulario($event)">
            <div>
                <input type="text" v-model="name">
            </div>
            <div>
                <input type="text" v-model="email">
            </div>
            <div>
                <SubmitText/>
            </div>
        </form>
        <p>Conteúdo</p>
        <p>Conteúdo</p>
        <p>Conteúdo</p>
    </div>
</template>

<script>
/*     import InputText from './form/InputText.vue'
 */    import SubmitText from './form/SubmitText.vue'

    export default {
        name: 'FormText',
        components: {
            SubmitText
        },
        data() {
            return {
                name: "",
                email: ""
            }
        },
        methods: {
            enviarFormulario(e) {

                e.preventDefault();

                const name = this.name;
                const email = this.email;

                console.log("Formulário enviado!");
                console.log("O nome é: " + name);
                console.log("O email é: " + email);

                // Ajax e inserir os dados no banco 
            }
        }
    }
</script>

<style scoped>
    p {
        margin: 50px;
    }
</style>