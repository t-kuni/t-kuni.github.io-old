<template>
  <div >
    <b-container>
      <div class="mt-5 mb-5">
        <article class="markdown-body" v-html="product.content"></article>
      </div>
    </b-container>

    <div class="buttons-area">
      <b-container>
        <div class="prev-button float-left" @click="onClickPrev">
          前
        </div>
        <div class="next-button float-right" @click="onClickNext">
          次
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
  import products from '../../assets/products/products';

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

      },
      onClickNext() {

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
      }
    }
</style>
