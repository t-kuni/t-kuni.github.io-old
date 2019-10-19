<template>
    <div>
        <div class="sub-header">
            <b-container>
                <p>
                    <router-link :to="{name: 'top'}">
                        <i class="far fa-id-card"></i> t-kuni's portfolio
                    </router-link>
                </p>
            </b-container>
        </div>
        <b-container>
            <h1 class="main-header">
                <slot></slot>
            </h1>
        </b-container>
        <b-container>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page" v-for="breadcrumb in breadcrumbs">
                        <template v-if="'route' in breadcrumb">
                            <router-link :to="breadcrumb.route">{{breadcrumb.label}}</router-link>
                        </template>
                        <template v-else>
                            <span>{{breadcrumb.label}}</span>
                        </template>
                    </li>
                </ol>
            </nav>
        </b-container>
    </div>
</template>

<script>
  export default {
    components: {},
    mounted() {
    },
    props     : {
        breadcrumbs: {
            type: Array,
        },
    },
    data      : function () {
      return {
      }
    },
    computed  : {
    },
    methods   : {
    }
  }
</script>

<style scoped lang="scss">
    @import '../../scss/variables';

    .sub-header {
        border-bottom: 1px solid $base-border-color;
        background-color: darken($base-color, 5%);

        p {
            margin: 0;
            padding: 3px 0;
            font-weight: lighter;

            a {
                color: $border-color!important;
                text-decoration: none!important;
            }
        }
    }

    .main-header {
        margin: 15px 0 0;
    }

    .breadcrumb {
        background-color: $base-color;
        font-size: $font-size-small;
        margin: 3px 0;
        padding: 0;
    }
</style>
