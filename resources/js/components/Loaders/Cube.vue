<template>
    <transition
        enter-active-class="ease-out duration-300"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-300"
        leave-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="processing" class="cubeContainer absolute z-50 h-full w-full flex items-center justify-center">
            <div class="cube rounded-full">
                <div class="sides">
                    <div class="top bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="right bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="bottom bg-codeBlue-primaryTrans"></div>
                    <div class="left bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="front bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="back bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "Cube",

    props : {
        processing : {
            type : Boolean,
            default : false
        }
    }
}
</script>

<style lang="scss" scoped>

$size: 150px;

.cubeContainer {
    background: rgb(57,72,85);
    background: radial-gradient(circle, rgba(57,72,85,0) 0%, rgba(118,184,241,0) 50%, rgba(57,72,85,0.70211834733893552) 100%);
}

@keyframes rotate {
    0% {
        transform: rotateX(-37.5deg) rotateY(45deg);
    }
    50% {
        transform: rotateX(-37.5deg) rotateY(605deg);
    }
    100% {
        transform: rotateX(-37.5deg) rotateY(405deg);
    }
}

.cube, .cube * {
    position: absolute;
    width: $size + 10;
    height: $size + 10;
}

.sides {
    animation: rotate 3s ease infinite;
    animation-delay: 1s;
    transform-style: preserve-3d;
    transform: rotateX(-37.5deg) rotateY(45deg);
}

.cube .sides * {
    box-sizing: border-box;
    border: $size / 10 solid white;
}

@mixin side($name, $rotate, $i) {
    .#{$name} {
        animation: #{$name}-animation 3s ease infinite;
        animation-delay: $i * 100ms;
        transform: #{$rotate} translateZ($size);
        animation-fill-mode: forwards;
        transform-origin: 50% 50%;
    }

    @keyframes #{$name}-animation {
    0%      { opacity: 1; transform: #{$rotate} translateZ($size)}
    20%     { opacity: 1; transform: #{$rotate} translateZ($size / 2)}
    70%     { opacity: 1; transform: #{$rotate} translateZ($size / 2) }
    90%     { opacity: 1; transform: #{$rotate} translateZ($size) }
    100%    { opacity: 1; transform: #{$rotate} translateZ($size) }
    }
}

.cube .sides {
    @include side("top", rotateX(90deg), 0);
    @include side("bottom", rotateX(-90deg), 0);
    @include side("front", rotateY(0deg), 1);
    @include side("back", rotateY(-180deg), 1);
    @include side("left", rotateY(-90deg), 1);
    @include side("right", rotateY(90deg), 1);
}

</style>
