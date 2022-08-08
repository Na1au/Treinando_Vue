<template>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contato</a></li>
        <li v-if="esta_logado"><a href="#">Meu perfil :)</a></li>
    </ul>
</template>

<script>
    export default {
        name: 'MyHeader',
        props: ["esta_logado"]
    }
</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        background-color: rgb(36, 35, 35);
    }

    li {
        margin-right: 10px;
    }

    a {
        color: #ddd;
        text-decoration: none;
        transition: .5s;
    }

    a:hover {
        color: rgb(0, 16, 241);
    }
</style>