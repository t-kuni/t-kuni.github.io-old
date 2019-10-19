<template>
    <div>
        <ex-header :breadcrumbs="breadcrumbs">
            <i class="fas fa-book-open"></i> 読んだ本リスト
        </ex-header>

        <b-container>
            <b-input-group size="lg" class="mt-3">
                <b-form-input v-model="$store.state[STATE.BOOK_SEARCH_TEXT]"></b-form-input>
                <b-input-group-append>
                    <b-button @click="onClickClear">Clear</b-button>
                </b-input-group-append>
            </b-input-group>

            <template v-for="chunk in chunkedBooks">
                <b-row class="no-gutters" :key="chunk[0].title">
                    <template v-for="book in chunk">
                        <b-col class="px-1 my-1" xs="12" sm="6" :key="book.title">
                            <article class="book-item p-3">
                                <book :book="book"></book>
                            </article>
                        </b-col>
                    </template>
                </b-row>
            </template>
        </b-container>
    </div>
</template>

<script>
    import Book from "../molecules/Book"
    import _ from "lodash"
    import {STATE} from '../../state';
    import {MUTATION} from '../../mutations';
    import {GETTERS} from "../../getters";
    import ExHeader from "../organisms/ExHeader";

  export default {
    components: {ExHeader, Book},
    mounted() {
    },
    props     : {},
    data      : function () {
      return {
          STATE,
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
                    label: '読んだ本リスト'
                }
            ]
        },
        books() {
            return this.$store.getters[GETTERS.FILTERED_BOOKS];
        },
        chunkedBooks() {
            return _.chunk(this.books, 2)
        }
    },
    methods   : {
        onClickClear() {
            this.$store.commit(MUTATION.CLEAR_BOOK_SEARCH_TEXT);
        }
    }
  }
</script>

<style scoped lang="scss">
    @import '../../scss/variables';

    .book-item {
        border: 1px solid $base-border-color;
        background-color: $main-color;
    }
</style>
