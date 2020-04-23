<template>
    <div class="root">
        <top-background class="fullscreen background"></top-background>
        <div class="foreground d-flex justify-content-center align-items-center">
            <div class="content-area">
                <img src="@/assets/me.jpg" />
                <p class="name">t-kuni</p>
                <div class="link-area">
                    <span class="link-item"><a href="https://twitter.com/t_kuni_" target="_blank"><i class="fab fa-twitter"></i></a></span>
                    <span class="link-item"><a href="https://github.com/t-kuni" target="_blank"><i class="fab fa-github"></i></a></span>
                    <span class="link-item"><a href="https://qiita.com/t-kuni" target="_blank">Qiita</a></span>
                    <span class="link-item"><a href="http://t-kuni.sub.jp" target="_blank">Blog</a></span>
                </div>
                <!--
                <p>スキル： PHP, Laravel, Vue, <router-link :to="{name: 'skills'}">More...</router-link></p>
                -->
                <p class="mt-3">スキル： PHP, Laravel, Vue</p>
                <p>
                    <span>趣味： </span>
                    <router-link :to="{name: 'books'}">読書</router-link>
                    <span>、</span>
                    <router-link :to="{ name: 'products' }">個人製作</router-link>
                </p>
            </div>
        </div>
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
        background-color: rgba(255, 255, 255, 0.7);
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
