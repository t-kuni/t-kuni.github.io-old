<template>
  <div class="body">
    <ex-header :breadcrumbs="breadcrumbs">
      <i class="fas fa-drafting-compass"></i> 製作物リスト
    </ex-header>

    <b-container>
      <div class="content-area mt-3">
        <article class="markdown-body" v-html="product.content"></article>
      </div>
    </b-container>

    <div class="buttons-area">
      <b-container>
        <div class="prev-button float-left" v-if="hasPrev" @click="onClickPrev">
          前
        </div>
        <div class="next-button float-right" v-if="hasNext" @click="onClickNext">
          次
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
  import products from '../../assets/products/products';
  import {GETTERS} from "../../getters";
  import ExHeader from "../organisms/ExHeader";

  export default {
    components: {ExHeader},
    mounted() {
    },
    props     : {},
    data      : function () {
      return {
      }
    },
    computed  : {
      breadcrumbs() {
        return [
          {
            label: 'トップ',
            route: {
              name: 'top'
            },
          },
          {
            label: '製作物リスト',
            route: {
              name: 'products'
            },
          },
          {
            label: this.product.title
          }
        ]
      },
      hasPrev() {
        return this.$store.getters[GETTERS.PREV_PRODUCT] !== null;
      },
      hasNext() {
        return this.$store.getters[GETTERS.NEXT_PRODUCT] !== null;
      },
      product() {
        const curPerm = this.$store.state.route.params.permalink;
        const filtered = products.filter((p) => p.permalink === curPerm);
        if (filtered.length > 0) {
          return filtered[0];
        } else {
          return null;
        }
      },
    },
    methods   : {
      onClickPrev() {
        const permalink = this.$store.getters[GETTERS.PREV_PRODUCT];
        this.$router.push({ name: 'product', params: { permalink }});
      },
      onClickNext() {
        const permalink = this.$store.getters[GETTERS.NEXT_PRODUCT];
        this.$router.push({ name: 'product', params: { permalink }});
      },
    }
  }
</script>

<style scoped lang="scss">
    @import '../../scss/variables';
    @import '../../../node_modules/github-markdown-css/github-markdown.css';

    .body {
      padding-bottom: 100px;
    }

    .content-area {
      background-color: $main-color;
      border: 1px solid rgb(234, 236, 239);
      padding: 1rem;
      border-radius: 3px;
    }

    .buttons-area {
      pointer-events: none;
      position: fixed;
      bottom: 0;
      width: 100%;

      .prev-button, .next-button {
        $size: 80px;

        width: $size;
        height: $size;
        line-height: $size;
        border-radius: 50%;
        background-color: #FF3636;
        color: white;
        font-size: 2rem;
        text-align: center;
        margin: 1rem;
        cursor: pointer;
        pointer-events: auto;
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.4);
      }
    }
</style>
