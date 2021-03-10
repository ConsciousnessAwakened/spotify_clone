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
        let that = this;

        that.request({
            service : that.api['spotify'].account(),
            delayedResponse : true,
            successCallback : (response) => {
                console.log(response);
            }
        });
    }
}
</script>

<style scoped>

</style>
