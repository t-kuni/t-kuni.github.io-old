<template>
  <div >
    <b-container>
      <div class="mt-5 mb-5">
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

  export default {
    components: {},
    mounted() {
    },
    props     : {},
    data      : function () {
      return {
      }
    },
    computed  : {
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
      }
    }
</style>
