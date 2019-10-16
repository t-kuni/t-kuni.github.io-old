<template>
  <div >
    <b-container>
      <article class="markdown-body" v-html="product.content"></article>
    </b-container>
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
      }
    },
    methods   : {
    }
  }
</script>

<style scoped lang="scss">
    @import '../../scss/variables';
    @import '../../../node_modules/github-markdown-css/github-markdown.css';

</style>
