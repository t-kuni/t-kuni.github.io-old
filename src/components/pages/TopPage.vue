<template>
  <div class="d-flex justify-content-center align-items-center" :style="{width: width + 'px', height: height + 'px'}">
    <div class="content-area">
        <img src="@/assets/me.jpg" />
        <p class="name">t-kuni</p>
        <p>
            <a href="https://twitter.com/t_kuni_"><i class="fab fa-twitter"></i></a>
            <a href="https://github.com/t-kuni"><i class="fab fa-github"></i></a>
        </p>
        <!--
        <p>スキル： PHP, Laravel, Vue, <router-link :to="{name: 'skills'}">More...</router-link></p>
        -->
        <p>スキル： PHP, Laravel, Vue</p>
        <p>
            <span>趣味： </span>
            <router-link :to="{name: 'books'}">読書</router-link>
            <span>、</span>
            <router-link :to="{ name: 'product', params: { permalink: firstProductPermalink }}">個人製作</router-link>
        </p>
    </div>
  </div>
</template>

<script>
    import {GETTERS} from "../../getters";

    export default {
    components: {},
    mounted() {
        window.onresize = () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        };
    },
    props     : {},
    data      : function () {
      return {
          width: window.innerWidth,
          height: window.innerHeight,
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
        margin-top: 1rem;
    }
</style>
