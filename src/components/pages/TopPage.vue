<template>
    <div class="root">
        <top-background class="fullscreen background"></top-background>
    </div>
</template>

<script>
    import {GETTERS} from "../../getters";
    import TopBackground from "../organisms/TopBackground";

    export default {
    components: {TopBackground},
    mounted() {
        console.log("BUILD DATE: " + __BUILD_DATE__)
    },
    props     : {},
    data      : function () {
        return {

        }
    },
    computed  : {
        firstProductPermalink() {
            return this.$store.getters[GETTERS.FIRST_PRODUCT];
        }
    },
    methods   : {
    }
  }
</script>

<style scoped lang="scss">
    @import '../../scss/variables';

    @mixin fullscreen() {
        width: 100vw;
        height: 100vh;
    }

    .root {
        @include fullscreen;
        position: relative;
    }

    .background {
        @include fullscreen;
        position: absolute;
    }

    .foreground {
        @include fullscreen;
        position: absolute;
    }

    .content-area {
        border: 1px dashed $base-border-color;
        background-color: $main-color;
        text-align: center;
        padding: 2rem;
    }

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 5px solid white;
        box-shadow: 3px 3px 10px #2c3e50;
    }

    p.name {
        margin: 1rem 0 0 0;
    }

    .link-area {
        .link-item:nth-child(n + 2) {
            padding-left: 5px;
        }
    }

    .build-info {
        position: fixed;
        bottom: 0;
        right: 0;
    }
</style>
