<template>
    <transition
        enter-active-class="ease-out duration-300"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-300"
        leave-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="processing" class="cubeContainer absolute z-50 h-full w-full flex items-center justify-center">
            <div class="cube">
                <div class="sides">
                    <div class="top bg-gradient-to-r from-codeBlue-primary"></div>
                    <div class="anotherTop bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="topMirror1 bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="topMirror2 bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="topMirror3 bg-gradient-to-r from-codeBlue-primaryTrans"></div>

                    <div class="right bg-gradient-to-r from-codeBlue-primary"></div>
                    <div class="anotherRight bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="rightMirror1 bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="rightMirror2 bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="rightMirror3 bg-gradient-to-r from-codeBlue-primaryTrans"></div>

                    <div class="left bg-gradient-to-r from-codeBlue-primary"></div>
                    <div class="anotherLeft bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="leftMirror1 bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="leftMirror2 bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="leftMirror3 bg-gradient-to-r from-codeBlue-primaryTrans"></div>

                    <div class="front bg-gradient-to-r from-codeBlue-primary"></div>
                    <div class="anotherFront bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="frontMirror1 bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="frontMirror2 bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="frontMirror3 bg-gradient-to-r from-codeBlue-primaryTrans"></div>

                    <div class="back bg-gradient-to-r from-codeBlue-primary"></div>
                    <div class="anotherBack bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="backMirror1 bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="backMirror2 bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="backMirror3 bg-gradient-to-r from-codeBlue-primaryTrans"></div>

                    <div class="bottom bg-codeBlue-primaryTrans"></div>
                    <div class="anotherBottom bg-codeBlue-primaryTrans"></div>
                    <div class="bottomMirror1 bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="bottomMirror2 bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                    <div class="bottomMirror3 bg-gradient-to-r from-codeBlue-primaryTrans"></div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {

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
$panelOrigin: 0;
$border: 6px;
$delayLimit: 30;

.cubeContainer {
    background: rgb(57,72,85);
    background: radial-gradient(circle, rgba(57,72,85,0) 0%, rgba(118,184,241,0) 50%, rgba(57,72,85,0.70211834733893552) 100%);
}

.cube, .cube * {
    position: absolute;
    width: $size + $border;
    height: $size + $border;
}

.cube .sides * {
    box-sizing: border-box;
    border: $border solid white;
    box-shadow: 2px 2px 50px 10px rgba(255, 255, 255, 0.2);
}

@keyframes rotate {
    0%      { transform: rotateX(-55deg) rotateY(45deg); }
    100%    { transform: rotateX(-55deg) rotateY(405deg); }
}

.sides {
    //animation: rotate 20s linear infinite;
    //animation-delay: 1s;
    transform-style: preserve-3d;
    transform: rotateX(-47deg) rotateY(45deg);
}

@mixin initialMirror($name, $rotate, $delay) {
    $perspectiveOrigin : $size + $panelOrigin;

    @keyframes #{$name}-animation {
        0%      { opacity: 0;   transform: #{$rotate} translateZ($perspectiveOrigin)}
        20%     { opacity: 0.7; transform: #{$rotate} translateZ(($size + $border) / 2) }
        80%     { opacity: 1;   transform: #{$rotate} translateZ(($size + $border) / 2) }
        90%     { opacity: 1;   transform: #{$rotate} translateZ(($size + $border) / 2) }
        100%    { opacity: 0;   transform: #{$rotate} translateZ($perspectiveOrigin) }
    }

    .#{$name} {
        opacity:                0;
        animation:              #{$name}-animation 3s ease-in infinite;
        animation-delay:        $delay * 100ms;
        transform:              #{$rotate} translateZ($perspectiveOrigin);
    }
}

@mixin mirror($name, $rotate, $delay) {
    $perspectiveOrigin : $size + $panelOrigin;

    $distance : random($perspectiveOrigin) + $size;

    @keyframes #{$name}-animation {
        0%      { opacity: 0;   transform: #{$rotate} translateZ($distance)}
        40%     { opacity: 0; transform: #{$rotate} translateZ($distance)}
        60%     { opacity: 0.1; transform: #{$rotate} translateZ($distance)}
        70%     { opacity: 0.5; transform: #{$rotate} translateZ(($size + $border) / 2) }
        80%     { opacity: 1;   transform: #{$rotate} translateZ(($size + $border) / 2) }
        100%    { opacity: 0;   transform: #{$rotate} translateZ(($size + $border) / 2) }
    }

    .#{$name} {
        opacity:                0;
        animation:              #{$name}-animation 2s ease-out infinite;
        animation-delay:        $delay * 100ms;
        animation-fill-mode:    forwards;
        transform:              #{$rotate} translateZ($distance);
    }
}

.cube .sides {
    @include initialMirror("top",       rotateX(90deg),     1);
    @include initialMirror("bottom",    rotateX(-90deg),    2);
    @include initialMirror("front",     rotateY(0deg),      2);
    @include initialMirror("back",      rotateY(-180deg),   1);
    @include initialMirror("left",      rotateY(-90deg),    2);
    @include initialMirror("right",     rotateY(90deg),     0);

    @include initialMirror("anotherTop",       rotateX(90deg),     10);
    @include initialMirror("anotherBottom",    rotateX(-90deg),    12);
    @include initialMirror("anotherFront",     rotateY(0deg),      11);
    @include initialMirror("anotherBack",      rotateY(-180deg),   12);
    @include initialMirror("anotherLeft",      rotateY(-90deg),    12);
    @include initialMirror("anotherRight",     rotateY(90deg),     11);

    @include mirror("topMirror1",     rotateX(90deg),     random($delayLimit));
    @include mirror("topMirror2",     rotateX(90deg),     random($delayLimit));
    @include mirror("topMirror3",     rotateX(90deg),     random($delayLimit));
    @include mirror("bottomMirror1",  rotateX(-90deg),    random($delayLimit));
    @include mirror("bottomMirror2",  rotateX(-90deg),    random($delayLimit));
    @include mirror("bottomMirror3",  rotateX(-90deg),    random($delayLimit));
    @include mirror("frontMirror1",   rotateY(0deg),      random($delayLimit));
    @include mirror("frontMirror2",   rotateY(0deg),      random($delayLimit));
    @include mirror("frontMirror3",   rotateY(0deg),      random($delayLimit));
    @include mirror("backMirror1",    rotateY(-180deg),   random($delayLimit));
    @include mirror("backMirror2",    rotateY(-180deg),   random($delayLimit));
    @include mirror("backMirror3",    rotateY(-180deg),   random($delayLimit));
    @include mirror("leftMirror1",    rotateY(-90deg),    random($delayLimit));
    @include mirror("leftMirror2",    rotateY(-90deg),    random($delayLimit));
    @include mirror("leftMirror3",    rotateY(-90deg),    random($delayLimit));
    @include mirror("rightMirror1",   rotateY(90deg),     random($delayLimit));
    @include mirror("rightMirror2",   rotateY(90deg),     random($delayLimit));
    @include mirror("rightMirror3",   rotateY(90deg),     random($delayLimit));
}

</style>
