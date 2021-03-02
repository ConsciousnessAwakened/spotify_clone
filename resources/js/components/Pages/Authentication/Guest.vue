<template>
    <app>
        <login />
    </app>
</template>

<script>
import App from "../../Layouts/App";
import Login from "./Login";
import Feature from "../Sample/Feature";

export default {
    name: "Guest",

    components: {
        Feature,
        Login,
        App
    }
}
</script>

<style scoped>

</style>
