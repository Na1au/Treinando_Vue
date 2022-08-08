<template>
    <div>
        <h2>Esta é a descrição dapessoa: {{ nome }}</h2>
        <InfoPessoa compEmail = "ana@hotmail.com" :esta_trabalhando=false />
        <FormText/>
    </div>
</template>

<script>
import InfoPessoa from './InfoPessoa.vue'
import FormText from './FormText.vue';
    export default {
    name: "PrimeiraPessoa",
    components: {
        InfoPessoa,
        FormText
    },
    data() {
        return {
            nome: "Ana"
        };
    }
}
</script>