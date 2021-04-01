<template>
    <app>
        <profile/>
        <featured/>
    </app>
</template>

<script>
import App from "../../Layouts/App";
import Profile from "./Profile";
import Featured from "./Featured";

export default {
    name: "Index",

    components: {
        Featured,
        Profile,
        App
    }
}
</script>

<style scoped>

</style>
