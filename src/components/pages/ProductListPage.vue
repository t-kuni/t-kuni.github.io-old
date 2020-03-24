<template>
  <div class="body">
    <ex-header :breadcrumbs="breadcrumbs">
      <i class="fas fa-drafting-compass"></i> 製作物リスト
    </ex-header>

    <b-container>
      <template v-for="chunk in chunkedProducts">
        <b-row class="no-gutters" :key="chunk[0].title">
          <template v-for="product in chunk">
            <b-col class="px-1 my-1" xs="12" sm="6" :key="product.title">
              <article class="product-item p-3">
                <product :product="product"></product>
              </article>
            </b-col>
          </template>
        </b-row>
      </template>
    </b-container>
  </div>
</template>

<script>
  import products from '../../assets/products/products';
  import {GETTERS} from "../../getters";
  import ExHeader from "../organisms/ExHeader";
  import _ from "lodash";
  import Product from "../molecules/Product";

  export default {
    components: {Product, ExHeader},
    mounted() {
    },
    props     : {},
    data      : function () {
      return {
        products,
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
            label: '製作物リスト'
          },
        ]
      },
      chunkedProducts() {
        return _.chunk(this.products, 2)
      }
    },
    methods   : {
    }
  }
</script>

<style scoped lang="scss">
    @import '../../scss/variables';
    @import '../../../node_modules/github-markdown-css/github-markdown.css';

    .product-item {
      border: 1px solid $base-border-color;
      background-color: $main-color;
    }
</style>
