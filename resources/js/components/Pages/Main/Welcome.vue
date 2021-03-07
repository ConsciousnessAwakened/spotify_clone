<template>
    <app>
        <feature />
    </app>
</template>

<script>
import App from "../../Layouts/App";
import Feature from "../Sample/Feature";

export default {
    name: "Welcome",

    components: {
        Feature,
        App
    },

    mounted() {

    }
}
</script>

<style scoped>

</style>
