<template>
    <div class="root">
        <top-background class="fullscreen background"></top-background>
        <div class="foreground d-flex justify-content-center align-items-center">
            <div class="content-area">
                <img src="@/assets/me.jpg" />
                <p class="name">t-kuni</p>
                <div class="link-area d-flex justify-content-center">
                    <a href="https://twitter.com/t_kuni_" target="_blank"><div class="link-item twitter"><i class="fab fa-twitter"></i></div></a>
                    <a href="https://github.com/t-kuni" target="_blank"><div class="link-item github"><i class="fab fa-github"></i></div></a>
                    <a href="https://qiita.com/t-kuni" target="_blank"><div class="link-item qiita">Qiita</div></a>
                    <a href="http://t-kuni.sub.jp" target="_blank"><div class="link-item blog">Blog</div></a>
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
        margin-top: 8px;

        a {
            color: white;
        }

        .link-item {
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            margin-left: 5px;

            &.twitter {
                background-color: #4CA5E6;
            }
            &.github {
                background-color: #24292E;
            }
            &.qiita {
                background-color: #59C500;
            }
            &.blog {
                background-color: #EB4A4C;
            }
        }

        .link-item:nth-child(n + 2) {
        }
    }

    .build-info {
        position: fixed;
        bottom: 0;
        right: 0;
    }
</style>
