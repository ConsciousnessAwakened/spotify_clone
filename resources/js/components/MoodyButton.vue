<template>
    <div class="w-full flex justify-center font-medium rounded-full focus:outline-none cursor-pointer" :class="themeClass">
        <div :class="spacingClass" class="relative">
            <div class="flex items-center">
                <span v-if="logo" class="absolute flex items-center"> <!--left-0 inset-y-0 pl-2-->
                    <img alt="icon" :class="logoClass" :src="logo" />
                </span>

                <span :class="[labelSpaceFromLogo, labelSize, label.class]" v-text="label.value"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MoodyButton",

    props: {
        logo: {
            type: String,
            default: null
        },
        label: {
            type: Object,
            default: () => {return {
                value : 'Moody Button',
                class : ''
            }}
        },
        size : {
            type: String,
            default: 'sm'
        },
        theme : {
            type: Object,
            default: () => {return {
                text : 'dark',
                background : 'bg-white hover:bg-gray-100',
                border : ''
            }}
        }

    },

    computed: {
        spacingClass() {
            return {
                'sm': 'px-2 py-2',
                'md' : 'px-2 py-2',
                'lg' : 'px-4 py-3'
            }[this.size];
        },

        labelSpaceFromLogo(){
            return this.logo ? {
                'sm': 'ml-7',
                'md' : 'ml-9',
                'lg' : 'ml-11'
            }[this.size] : '';
        },

        labelSize(){
            return {
                'sm': 'text-xs',
                'md' : 'text-lg',
                'lg' : 'text-xl'
            }[this.size];
        },

        logoClass() {
            return {
                'sm': 'h-6 w-6',
                'md' : 'h-8 w-8',
                'lg' : 'h-10 w-10'
            }[this.size];
        },

        textClass() {
            return {
                'light': 'text-white',
                'dark' : 'text-gray-600'
            }[this.theme.text ? this.theme.text : 'dark'];
        },

        bgClass() {
            return this.theme.background ? this.theme.background : 'bg-white hover:bg-gray-200';
        },

        borderClass() {
            return this.theme.border ? this.theme.border : '';
        },

        themeClass() {
            return [this.textClass, this.bgClass, this.borderClass];
        }
    }
}
</script>

<style scoped>

</style>
