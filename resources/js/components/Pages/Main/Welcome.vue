<template>
    <app>
        <play></play>
    </app>
</template>

<script>
import App from "../../Layouts/App";
import Play from "./Player/Play";

export default {
    name: "Welcome",

    components: {
        Play,
        App
    },

    mounted() {
        this.startProcessing();
        // setTimeout(()=>{
        //     this.startProcessing();
        // }, 3000);
        //
        setTimeout(()=>{
            this.finishProcessing();
        }, 9000);
    }
}
</script>

<style scoped>

</style>
