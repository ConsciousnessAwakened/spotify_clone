
export default {
    data() {
        return {
            windowWidth : window.innerWidth,
            items : []
        }
    },

    mounted() {
        window.addEventListener('resize', this.handleWindowWidth);
    },

    destroyed() {
        window.removeEventListener('resize', this.handleWindowWidth);
    },

    computed:{

    },

    methods : {
        handleWindowWidth() {
            this.windowWidth = window.innerWidth;
        },
        isHidden(key) {
            let hidden = true;

            if (this.windowWidth < SCREEN_WIDTH.SM) {
                hidden = !(key <= 0);
            } else if (this.windowWidth >= SCREEN_WIDTH.SM && this.windowWidth < SCREEN_WIDTH.MD) {
                hidden = !(key <= 1);
            } else if (this.windowWidth >= SCREEN_WIDTH.MD && this.windowWidth < SCREEN_WIDTH.LG) {
                hidden = !(key <= 2);
            } else if (this.windowWidth >= SCREEN_WIDTH.LG && this.windowWidth < SCREEN_WIDTH.XL) {
                hidden = !(key <= 3);
            } else if (this.windowWidth >= SCREEN_WIDTH.XL && this.windowWidth < SCREEN_WIDTH.XXL) {
                hidden = !(key <= 5);
            } else if (this.windowWidth >= SCREEN_WIDTH.XXL) {
                hidden = !(key <= 7);
            }

            return hidden;
        }
    },

    watch : {
        windowWidth : {
            immediate : true,
            handler : (oldWidth, newWidth) => {
                //console.log([oldWidth, newWidth]);
            }
        }
    }
}
